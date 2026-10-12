"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

type WishlistContextValue = {
  productIds: string[];
  itemCount: number;
  isHydrated: boolean;
  isWishlisted: (productId: string) => boolean;
  toggleWishlist: (productId: string) => void;
  clearWishlist: () => void;
};

type WishlistProviderProps = {
  children: React.ReactNode;
};

const WISHLIST_STORAGE_KEY = "ecommerce-storefront-wishlist";
const WISHLIST_CHANGE_EVENT = "ecommerce-storefront-wishlist-change";
const EMPTY_WISHLIST = "[]";

const WishlistContext = createContext<WishlistContextValue | undefined>(
  undefined,
);

function subscribeToWishlist(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(WISHLIST_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(WISHLIST_CHANGE_EVENT, callback);
  };
}

function getWishlistSnapshot() {
  return localStorage.getItem(WISHLIST_STORAGE_KEY) ?? EMPTY_WISHLIST;
}

function getWishlistServerSnapshot() {
  return EMPTY_WISHLIST;
}

function parseWishlist(snapshot: string): string[] {
  try {
    const parsedWishlist = JSON.parse(snapshot);

    if (
      Array.isArray(parsedWishlist) &&
      parsedWishlist.every((productId) => typeof productId === "string")
    ) {
      return parsedWishlist;
    }
  } catch {
    return [];
  }

  return [];
}

function saveWishlist(productIds: string[]) {
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(productIds));

  window.dispatchEvent(new Event(WISHLIST_CHANGE_EVENT));
}

function subscribeToHydration() {
  return () => {};
}

function getClientHydrationSnapshot() {
  return true;
}

function getServerHydrationSnapshot() {
  return false;
}

export function WishlistProvider({ children }: WishlistProviderProps) {
  const wishlistSnapshot = useSyncExternalStore(
    subscribeToWishlist,
    getWishlistSnapshot,
    getWishlistServerSnapshot,
  );

  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot,
  );

  const productIds = useMemo(
    () => parseWishlist(wishlistSnapshot),
    [wishlistSnapshot],
  );

  const isWishlisted = useCallback(
    (productId: string) => productIds.includes(productId),
    [productIds],
  );

  const toggleWishlist = useCallback(
    (productId: string) => {
      const nextProductIds = productIds.includes(productId)
        ? productIds.filter((id) => id !== productId)
        : [...productIds, productId];

      saveWishlist(nextProductIds);
    },
    [productIds],
  );

  const clearWishlist = useCallback(() => {
    saveWishlist([]);
  }, []);

  const value = useMemo(
    () => ({
      productIds,
      itemCount: productIds.length,
      isHydrated,
      isWishlisted,
      toggleWishlist,
      clearWishlist,
    }),
    [productIds, isHydrated, isWishlisted, toggleWishlist, clearWishlist],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }

  return context;
}
