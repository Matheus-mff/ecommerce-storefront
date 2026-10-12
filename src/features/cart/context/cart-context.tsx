"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import type { CartItem } from "@/types/cart";
import type { Product } from "@/types/product";

type CartAction =
  | { type: "hydrate"; items: CartItem[] }
  | { type: "add"; product: Product }
  | { type: "remove"; productId: string }
  | { type: "set-quantity"; productId: string; quantity: number }
  | { type: "clear" };

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isHydrated: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

type CartProviderProps = {
  children: React.ReactNode;
};

const CART_STORAGE_KEY = "ecommerce-storefront-cart";

const CartContext = createContext<CartContextValue | undefined>(undefined);

function cartReducer(items: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "hydrate":
      return action.items;

    case "add": {
      const existingItem = items.find(
        (item) => item.productId === action.product.id,
      );

      if (existingItem) {
        return items.map((item) =>
          item.productId === action.product.id
            ? {
                ...item,
                quantity: Math.min(item.quantity + 1, item.stock),
              }
            : item,
        );
      }

      return [
        ...items,
        {
          productId: action.product.id,
          slug: action.product.slug,
          name: action.product.name,
          price: action.product.price,
          stock: action.product.stock,
          image: action.product.images[0] ?? null,
          quantity: 1,
        },
      ];
    }

    case "remove":
      return items.filter((item) => item.productId !== action.productId);

    case "set-quantity":
      if (action.quantity <= 0) {
        return items.filter((item) => item.productId !== action.productId);
      }

      return items.map((item) =>
        item.productId === action.productId
          ? {
              ...item,
              quantity: Math.min(action.quantity, item.stock),
            }
          : item,
      );

    case "clear":
      return [];

    default:
      return items;
  }
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);

      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);

        if (Array.isArray(parsedCart)) {
          dispatch({ type: "hydrate", items: parsedCart });
        }
      }
    } catch {
      localStorage.removeItem(CART_STORAGE_KEY);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  const addItem = useCallback((product: Product) => {
    dispatch({ type: "add", product });
  }, []);

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "remove", productId });
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: "set-quantity", productId, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "clear" });
  }, []);

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      isHydrated,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
    }),
    [
      items,
      itemCount,
      subtotal,
      isHydrated,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
