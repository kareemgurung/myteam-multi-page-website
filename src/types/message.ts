import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .nonempty("This field is required")
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z
    .string()
    .nonempty("This field is required")
    .email({ message: "Invalid email address" }),
  companyName: z
    .string()
    .nonempty("This field is required")
    .min(2, { message: "Company name must be at least 2 characters" }),
  title: z
    .string()
    .nonempty("This field is required")
    .min(2, { message: "Title must be at least 2 characters" }),
  message: z
    .string()
    .nonempty("This field is required")
    .min(2, { message: "Message must be at least 2 characters" }),
});

export type TContactSchema = z.infer<typeof contactSchema>;
