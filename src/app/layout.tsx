import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./sidebar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IKOUĒ Academy - Portfolio",
  description: "Introduction à NextJS à travers la construction d'un portfolio personnel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full flex h-screen">
          <div className="w-1/4">
            <Menu />
          </div>
          <div className="flex-1 px-20 pt-44">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
