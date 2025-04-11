import Footer from "@/components/footer";
import "@/styles/globals.css";

import { SignedOut } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SignedOut>
      {children}
      <Footer />
    </SignedOut>
  );
}
