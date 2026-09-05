"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Gift, Clock, Smartphone, Headphones, Sparkles } from "lucide-react";
import { siteConfig } from "../lib/site";

const iconMap: Record<string, any> = {
  "پروفایل تأیید‌شده": ShieldCheck,
  "کاملاً رایگان": Gift,
  "انتخاب زمان دلخواه": Clock,
  "بدون نیاز به نصب اپلیکیشن": Smartphone,
  "پشتیبانی واقعی": Headphones,
};

export default function Features() {
  return (
    <section id="features" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10 gradient-text">
        امکانات دانورا
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {siteConfig.features.map((f, i) => {
          const Icon = iconMap[f.title] || Sparkles;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center mb-4 animate-float">
                  <Icon className="text-white w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}