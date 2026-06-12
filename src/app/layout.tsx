import type { Metadata } from "next";
import { Syne, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Omar Alqaysi — Data Scientist & BI Analyst",
  description:
    "Data & Business Intelligence leader in Baghdad — AML analytics at Zain Cash, GIS and data science at Transit Lab Baghdad, machine learning, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrument.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="noise min-h-full flex flex-col">{children}</body>
    </html>
  );
}
