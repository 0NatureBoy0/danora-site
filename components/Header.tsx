"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "../lib/site";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center shadow-lg"
          >
            <span className="text-white font-bold text-lg">د</span>
          </motion.div>
          <span className="text-xl font-extrabold gradient-text">دانورا</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {[
            { href: "#features", label: "امکانات" },
            { href: "#how-it-works", label: "نحوهٔ کار" },
            { href: "#subjects", label: "دروس" },
            { href: "#support", label: "پشتیبانی" },
          ].map((item) => (
            <a key={item.href} href={item.href} className="relative group transition">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={siteConfig.telegramBot}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-5 py-2 rounded-xl text-sm shadow-md hover:shadow-lg transition"
        >
          شروع رایگان
        </motion.a>
      </div>
    </header>
  );
}