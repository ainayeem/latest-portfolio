import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});
