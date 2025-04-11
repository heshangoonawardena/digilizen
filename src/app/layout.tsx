import "@/styles/globals.css";
import Footer from "@/components/footer";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
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
    <html className={`${geist.variable}`}>
      <body>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
