import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans, Mate } from "next/font/google";
import { Nav } from "./components/nav";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-josefin",
});

const mate = Mate({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mate",
});

export const metadata: Metadata = {
  title: "Zach Wachtel | Portfolio",
  description: "Media Production & Computer Science portfolio of Zach Wachtel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.variable} ${mate.variable}`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <Nav />
        {children}
      </body>
    </html>
  );
}
