import "@/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Digilizen",
  description: "The Future of Driving Licenses",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html className={`${geist.variable}`}>
        <body>
          {children}
          <Toaster position="top-right" />
        </body>
      </html>
    </ClerkProvider>
  );
}
