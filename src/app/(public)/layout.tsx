import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";

import { SignedOut } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
