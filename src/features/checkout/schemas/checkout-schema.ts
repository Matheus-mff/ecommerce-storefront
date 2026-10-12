import { z } from "zod";

export const checkoutSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),

  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim().min(1, "Last name is required."),

  address: z.string().trim().min(1, "Address is required."),
  city: z.string().trim().min(1, "City is required."),
  state: z.string().trim().min(1, "State is required."),
  postalCode: z.string().trim().min(1, "Postal code is required."),
  country: z.string().trim().min(1, "Country is required."),

  cardName: z.string().trim().min(1, "Name on card is required."),
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, "Card number must contain 16 digits."),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use the format MM/YY."),
  cvc: z.string().regex(/^\d{3,4}$/, "CVC must contain 3 or 4 digits."),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
