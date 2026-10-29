import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import SiteFooter from "@/components/site-footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const tiny5Duo = localFont({
  src: "./fonts/Tiny5Duo-Variable.ttf",
  variable: "--font-tiny5-duo",
  weight: "200",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CineGate | Cinema tickets and showtimes",
  description: "Browse films, compare showtimes, choose seats, and plan your CineGate visit.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${tiny5Duo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
