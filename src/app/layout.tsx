import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartWrapper from "@/components/Cart/CartWrapper";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "NeoEcommerce Website",
  description: "Minimalist modern e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <CartWrapper>
          <main>{children}</main>
        </CartWrapper>
      </body>
    </html>
  );
}
