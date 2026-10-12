"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import type { CartItem } from "@/types/cart";
import type { Order } from "@/types/order";

type OrderContextValue = {
  orders: Order[];
  isHydrated: boolean;
  createOrder: (items: CartItem[], total: number) => Order;
  clearOrders: () => void;
};

type OrderProviderProps = {
  children: React.ReactNode;
};

const ORDER_STORAGE_KEY = "ecommerce-storefront-orders";
const ORDER_CHANGE_EVENT = "ecommerce-storefront-orders-change";
const EMPTY_ORDERS = "[]";

const OrderContext = createContext<OrderContextValue | undefined>(undefined);

function subscribeToOrders(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(ORDER_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(ORDER_CHANGE_EVENT, callback);
  };
}

function getOrdersSnapshot() {
  return localStorage.getItem(ORDER_STORAGE_KEY) ?? EMPTY_ORDERS;
}

function getOrdersServerSnapshot() {
  return EMPTY_ORDERS;
}

function parseOrders(snapshot: string): Order[] {
  try {
    const parsedOrders = JSON.parse(snapshot);

    if (Array.isArray(parsedOrders)) {
      return parsedOrders;
    }
  } catch {
    return [];
  }

  return [];
}

function saveOrders(orders: Order[]) {
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
  window.dispatchEvent(new Event(ORDER_CHANGE_EVENT));
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

export function OrderProvider({ children }: OrderProviderProps) {
  const ordersSnapshot = useSyncExternalStore(
    subscribeToOrders,
    getOrdersSnapshot,
    getOrdersServerSnapshot,
  );

  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot,
  );

  const orders = useMemo(() => parseOrders(ordersSnapshot), [ordersSnapshot]);

  const createOrder = useCallback(
    (items: CartItem[], total: number) => {
      const order: Order = {
        id: `EC-${Date.now()}`,
        createdAt: new Date().toISOString(),
        status: "confirmed",
        total,
        items: items.map((item) => ({
          productId: item.productId,
          slug: item.slug,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
      };

      saveOrders([order, ...orders]);

      return order;
    },
    [orders],
  );

  const clearOrders = useCallback(() => {
    saveOrders([]);
  }, []);

  const value = useMemo(
    () => ({
      orders,
      isHydrated,
      createOrder,
      clearOrders,
    }),
    [orders, isHydrated, createOrder, clearOrders],
  );

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders must be used inside OrderProvider");
  }

  return context;
}
