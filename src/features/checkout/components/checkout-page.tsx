"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/features/cart/context/cart-context";
import {
  checkoutSchema,
  type CheckoutFormValues,
} from "@/features/checkout/schemas/checkout-schema";
import { useOrders } from "@/features/orders/context/order-context";

export function CheckoutPage() {
  const router = useRouter();

  const { items, subtotal, isHydrated, clearCart } = useCart();
  const { createOrder } = useOrders();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
  });

  function onSubmit() {
    createOrder(items, subtotal);
    clearCart();

    router.push("/order-confirmation");
  }

  if (!isHydrated) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500">Loading checkout...</p>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Your cart is empty
        </h1>

        <p className="mt-3 text-zinc-500">
          Add products to your cart before checking out.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-flex rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          Browse products
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          Checkout
        </p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950">
          Complete your order
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          Demo checkout — no real payment will be processed.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-10 lg:grid-cols-[1fr_360px]"
      >
        <div className="space-y-10">
          <fieldset>
            <legend className="text-lg font-semibold text-zinc-950">
              Contact
            </legend>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-zinc-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-lg font-semibold text-zinc-950">
              Shipping address
            </legend>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  First name
                </label>

                <input
                  id="firstName"
                  {...register("firstName")}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
                />

                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  Last name
                </label>

                <input
                  id="lastName"
                  {...register("lastName")}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
                />

                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  Address
                </label>

                <input
                  id="address"
                  {...register("address")}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
                />

                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  City
                </label>

                <input
                  id="city"
                  {...register("city")}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
                />

                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.city.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  State / region
                </label>

                <input
                  id="state"
                  {...register("state")}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
                />

                {errors.state && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.state.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="postalCode"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  Postal code
                </label>

                <input
                  id="postalCode"
                  {...register("postalCode")}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
                />

                {errors.postalCode && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.postalCode.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  Country
                </label>

                <input
                  id="country"
                  {...register("country")}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
                />

                {errors.country && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-lg font-semibold text-zinc-950">
              Payment
            </legend>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="cardName"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  Name on card
                </label>

                <input
                  id="cardName"
                  {...register("cardName")}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
                />

                {errors.cardName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.cardName.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="cardNumber"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  Card number
                </label>

                <input
                  id="cardNumber"
                  inputMode="numeric"
                  placeholder="1234123412341234"
                  {...register("cardNumber")}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
                />

                {errors.cardNumber && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.cardNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="expiry"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  Expiry
                </label>

                <input
                  id="expiry"
                  placeholder="MM/YY"
                  {...register("expiry")}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
                />

                {errors.expiry && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.expiry.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="cvc"
                  className="mb-1 block text-sm font-medium text-zinc-700"
                >
                  CVC
                </label>

                <input
                  id="cvc"
                  inputMode="numeric"
                  {...register("cvc")}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
                />

                {errors.cvc && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.cvc.message}
                  </p>
                )}
              </div>
            </div>
          </fieldset>
        </div>

        <aside className="h-fit rounded-xl border border-zinc-200 p-6 lg:sticky lg:top-6">
          <h2 className="text-lg font-semibold text-zinc-950">Order summary</h2>

          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div
                key={item.productId}
                className="flex justify-between gap-4 text-sm"
              >
                <span className="text-zinc-600">
                  {item.name} × {item.quantity}
                </span>

                <span className="font-medium text-zinc-950">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between border-t border-zinc-200 pt-6">
            <span className="font-medium text-zinc-950">Total</span>

            <span className="text-lg font-semibold text-zinc-950">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Place order
          </button>

          <Link
            href="/cart"
            className="mt-4 block text-center text-sm text-zinc-500 hover:text-zinc-950"
          >
            Return to cart
          </Link>
        </aside>
      </form>
    </section>
  );
}
