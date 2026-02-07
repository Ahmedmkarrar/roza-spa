import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spa & Sculpting by Roza | Luxury Facial Sculpting in Charlotte, NC",
  description:
    "Experience the art of facial sculpting and luxury cosmetology treatments with Roza. Licensed cosmetologist specializing in buccal massage, facial contouring, and skin rejuvenation in Charlotte, NC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
