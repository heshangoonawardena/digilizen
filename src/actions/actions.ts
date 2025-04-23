"use server";

import { licenseSchema } from "@/schemas/licenseSchema";
import { prisma } from "@/server/db";

export async function getVehicleCategories() {
  return await prisma.vehicleCategory.findMany({
    select: {
      id: true,
      vehicleType: true,
      vehicleClass: true,
      validityPeriod: true,
    },
    orderBy: { vehicleClass: "asc" },
  });
}

/**
 * Creates a license, address, and medical record in a single transaction.
 * @param data - Object containing address, medical, and license fields.
 *   {
 *     address: { address, city, district, province, country? },
 *     medical: { medical_report_photo, blood_group, blood_pressure?, height?, weight?, dateOfBirth, gender },
 *     license: { licenseNumber, nic, photo, nicFront, nicBack, previousLicense?, phone, firstName, lastName, licenseType, status?, dateOfIssue?, dateOfExpiry?, userId?, licenseClasses? }
 *   }
 */

export async function createLicense(newLicense: unknown) {
  // server-side validation
  const result = licenseSchema.safeParse(newLicense);
  if (result.error) {
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });
    return {
      error: errorMessage,
    };
  }
  const validatedData = result.data;

  return await prisma.$transaction(async (tx) => {
    // 1. Create Address
    const address = await tx.address.create({
      data: {
        address: validatedData.address,
        city: validatedData.city,
        district: validatedData.district,
        province: validatedData.province,
      },
    });

    // 2. Create Medical
    const medical = await tx.medical.create({
      data: {
        medical_report_photo: validatedData.medicalUrl,
        blood_group: validatedData.bloodGroup,
        dateOfBirth: new Date(validatedData.dateOfBirth),
        gender: validatedData.gender,
      },
    });

    // 3. Create License
    const license = await tx.license.create({
      data: {
        licenseNumber: "101",
        nic: validatedData.nic,
        photo: validatedData.photoUrl,
        nicFront: validatedData.nicFrontUrl,
        nicBack: validatedData.nicBackUrl,
        previousLicense: validatedData?.previousLicenseUrl,
        phone: validatedData.phoneNumber,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        licenseType: validatedData.licenseType,
        addressId: address.id,
        medicalId: medical.id,
      },
    });

    // 4. Create LicenseVehicleCategory records if provided
    if (
      validatedData.licenseClasses &&
      validatedData.licenseClasses.length > 0
    ) {
      for (const cls of validatedData.licenseClasses) {
        await tx.licenseVehicleCategory.create({
          data: {
            licenseId: license.id,
            vehicleCategoryId: cls.id,
            dateOfIssue: new Date(cls.issueDate),
            dateOfExpiry: new Date(cls.expiryDate),
            categoryStatus: "ACTIVE",
          },
        });
      }
    }
  });
}
