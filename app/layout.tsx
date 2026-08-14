import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoGlow | Premium Car Care",
  description: "Professional hand washing, detailing and paint protection for a finish you will love.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
