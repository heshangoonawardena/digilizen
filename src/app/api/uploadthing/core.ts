import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = async () => {
  const { userId } = await auth();
  if (!userId) throw new UploadThingError("Unauthorized");
  return { userId };
};

export const ourFileRouter = {
  nicFrontUploader: f({
    image: {
      maxFileSize: "2MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("NIC Upload complete:", file.ufsUrl);
      return { uploadedBy: metadata.userId };
    })
  ,
  
  nicBackUploader: f({
    image: {
      maxFileSize: "2MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("NIC Upload complete:", file.ufsUrl);
      return { uploadedBy: metadata.userId };
    }),
  
  medicalUploader: f({
    image: {
      maxFileSize: "2MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("NIC Upload complete:", file.ufsUrl);
      return { uploadedBy: metadata.userId };
    }),
  
  
  previousLicenseUploader: f({
    image: {
      maxFileSize: "2MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("NIC Upload complete:", file.ufsUrl);
      return { uploadedBy: metadata.userId };
    }),
  
  
  photo: f({
    image: {
      maxFileSize: "2MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("NIC Upload complete:", file.ufsUrl);
      return { uploadedBy: metadata.userId };
    }),

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
