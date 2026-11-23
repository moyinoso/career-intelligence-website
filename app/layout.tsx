import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Career Intelligence — Employability Assessment for Graduates in Ado-Ekiti",
  description:
    "An AI-assisted career intelligence and employability assessment system that helps graduates in Ado-Ekiti, Nigeria identify CV skills, explore career matches, compare against job descriptions, and build skills-development plans.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
