import * as z from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z.string().min(1, { message: "Phone number is required." }),
  city: z.string().min(1, { message: "City is required." }),
  province: z.string().min(1, { message: "Province is required." }),
  aggrement: z.boolean().refine(val => val, {
    message: "You must agree to the terms and conditions.",
  }),
});
