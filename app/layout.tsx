import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.slogan}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}