import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-blue-600">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="#features">امکانات</Link>
          <Link href="#how-it-works">نحوهٔ کار</Link>
          <Link href="#subjects">دروس</Link>
          <Link href="#support">پشتیبانی</Link>
        </nav>
        <a
          href={siteConfig.telegramBot}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          شروع رایگان
        </a>
      </div>
    </header>
  );
}