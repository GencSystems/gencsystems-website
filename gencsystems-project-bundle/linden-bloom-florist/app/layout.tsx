import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Linden & Bloom | Flowers, thoughtfully arranged",
  description: "Seasonal flowers and same-day delivery from Linden & Bloom in Chicago.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
