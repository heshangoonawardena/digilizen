import { z } from "zod";

export const licenseSchema = z.object({
  nic: z
    .string()
    .min(10, { message: "NIC must have at least 10 characters" })
    .max(12, { message: "NIC must have at most 12 characters" }),
  phoneNumber: z.string({ message: "Phone number is required" }),
  firstName: z.string().min(1, { message: "First  name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  dateOfBirth: z.coerce.date(),
  gender: z.enum(["male", "female"], { message: "Gender is required" }),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
    message: "Blood group is required",
  }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email address is invalid" }),
  address: z.string({ message: "Address is required" }).min(1),
  licenseType: z.enum(["learnersPermit", "permanent"], {
    message: "License type is required",
  }),
  correctiveLens: z.boolean().optional(),
  autoOnly: z.boolean().optional(),
  licenseClasses: z
    .array(
      z.object({
        id: z.string().uuid(),
        vehicleClass: z.string().min(1),
        vehicleCategory: z
          .string()
          .min(1, { message: "Vehicle category is required" }),
        issueDate: z.coerce.date(),
        expiryDate: z.coerce.date(),
      }),
    )
    .min(1, { message: "At least one license class should be added" }),
  nicFrontUrl: z
    .string()
    .url({ message: "Photo of the front of NIC is requried" }),
  nicBackUrl: z
    .string()
    .url({ message: "Photo of the back of NIC is requried" }),
  medicalUrl: z.string().url({ message: "Photo of the medical is requried" }),
  previousLicenseUrl: z.string().url().optional(),
  photoUrl: z.string({ message: "Photo is requried" }).url(),
});
