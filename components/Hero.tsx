"use client";
import { motion } from "framer-motion";
import { siteConfig } from "../lib/site";

export default function Hero() {
  return (
    <section className="relative text-center py-24 overflow-hidden">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-400/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-green-200"
        >
          ✅ ۱۰۰٪ رایگان برای همیشه
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight"
        >
          <span className="gradient-text">{siteConfig.slogan}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto"
        >
          {siteConfig.description}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={siteConfig.telegramBot}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition"
        >
          شروع کاملاً رایگان 🚀
        </motion.a>
      </div>
    </section>
  );
}