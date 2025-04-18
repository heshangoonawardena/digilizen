import { z } from "zod";

export const formSchema = z.object({
  nic: z.string().min(10).max(12),
  phoneNumber: z.string(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.coerce.date(),
  gender: z.enum(["male", "female"]),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  email: z.string().email(),
  address: z.string().min(1),
  licenseType: z.enum(["learnersPermit", "permanent"]),
  correctiveLens: z.boolean().optional(),
  autoOnly: z.boolean().optional(),
  licenseClasses: z
    .array(
      z.object({
        id: z.string().uuid(),
        vehicleClass: z.string().min(1),
        vehicleCategory: z.string().min(1),
        issueDate: z.coerce.date(),
        expiryDate: z.coerce.date(),
      }),
    ).min(1)
});
