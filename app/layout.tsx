import EnamadBadge from "./EnamadBadge";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | پیدا کردن معلم خصوصی`,
    template: `%s | ${site.name}`,
  },
  description:
    "دانورا پلتفرم اتصال معلم و دانش‌آموز است. معلم خصوصی ریاضی، فیزیک، شیمی، زیست، انگلیسی و برنامه‌نویسی را در ربات تلگرام دانورا پیدا کنید.",
  keywords: ["معلم خصوصی", "تدریس خصوصی", "ریاضی", "فیزیک", "شیمی", "زیست", "انگلیسی", "برنامه‌نویسی", "دانورا"],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | پیدا کردن معلم خصوصی`,
    description: "معلم خصوصی مناسبت را با دانورا پیدا کن.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans">{children}        <EnamadBadge />
      </body>
    </html>
  );
}