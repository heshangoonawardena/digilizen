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
  gender: z.enum(["MALE", "FEMALE"], { message: "Gender is required" }),
  bloodGroup: z.enum(
    ["A_POS", "A_NEG", "B_POS", "B_NEG", "AB_POS", "AB_NEG", "O_POS", "O_NEG"],
    {
      message: "Blood group is required",
    },
  ),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email address is invalid" }),
  province: z.enum(
    [
      "WESTERN",
      "CENTRAL",
      "SOUTHERN",
      "NORTHERN",
      "EASTERN",
      "NORTHWESTERN",
      "NORTHCENTRAL",
      "UVA",
      "SABARAGAMUWA",
    ],
    { message: "Province is required" },
  ),
  district: z.enum(
    [
      "AMPARA",
      "ANURADHAPURA",
      "BADULLA",
      "BATTICALOA",
      "COLOMBO",
      "GALLE",
      "GAMPAHA",
      "HAMBANTOTA",
      "JAFFNA",
      "KALUTARA",
      "KANDY",
      "KEGALLE",
      "KILINOCHCHI",
      "KURUNEGALA",
      "MANNAR",
      "MATALE",
      "MATARA",
      "MONARAGALA",
      "MULLAITIVU",
      "NUWARA_ELIYA",
      "POLONNARUWA",
      "PUTTALAM",
      "RATNAPURA",
      "TRINCOMALEE",
      "VAVUNIYA",
    ],
    { message: "District is required" },
  ),
  city: z.string({ message: "City is required" }).min(1),
  address: z.string({ message: "Address is required" }).min(1),
  licenseType: z.enum(["LEARNER", "PERMANENT"], {
    message: "License type is required",
  }),
  correctiveLens: z.boolean().optional(),
  autoOnly: z.boolean().optional(),
  licenseClasses: z
    .array(
      z.object({
        id: z.string(),
        vehicleClass: z.string().min(1),
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
  previousLicenseUrl: z.union([z.string().url().nullish(), z.literal("")]),
  photoUrl: z.string({ message: "Photo is requried" }).url(),
});

export type LicenseSchema = z.infer<typeof licenseSchema>;
