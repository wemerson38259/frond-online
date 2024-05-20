import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

export const DraconisFont = localFont({
  src: "./static-fonts/Draconis Bold.otf",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frond Online",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DraconisFont.className}>{children}</body>
    </html>
  );
}