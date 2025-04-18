"use client";

import { FileUpload } from "@/components/upload/fileUpload";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FileUpload
        endpoint="nicFrontUploader"
        onChange={(url) => {
          console.log("Files: ", url);
        }}
      />
    </main>
  );
}
