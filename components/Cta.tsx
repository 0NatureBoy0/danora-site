"use client";
import { motion } from "framer-motion";
import { siteConfig } from "../lib/site";

export default function CTA() {
  return (
    <section className="relative text-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 opacity-95 rounded-3xl mx-4" />
      <div className="relative z-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-white"
        >
          همین حالا شروع کنید
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/90 mb-8"
        >
          هیچ هزینه‌ای برای استفاده از دانورا پرداخت نمی‌کنید
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={siteConfig.telegramBot}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition"
        >
          ورود به ربات تلگرام
        </motion.a>
      </div>
    </section>
  );
}