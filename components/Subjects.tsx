"use client";
import { motion } from "framer-motion";
import { Calculator, Atom, FlaskConical, Leaf, Languages, Code2 } from "lucide-react";
import { siteConfig } from "../lib/site";

const icons: Record<string, any> = {
  "ریاضی": Calculator,
  "فیزیک": Atom,
  "شیمی": FlaskConical,
  "زیست": Leaf,
  "انگلیسی": Languages,
  "برنامه‌نویسی": Code2,
};

export default function Subjects() {
  return (
    <section id="subjects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10 gradient-text">
        دروس تحت پوشش
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {siteConfig.subjects.map((subject, i) => {
          const Icon = icons[subject] || Calculator;
          return (
            <motion.div
              key={subject}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-2xl p-5 flex items-center gap-3 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center shrink-0">
                <Icon className="text-white w-5 h-5" />
              </div>
              <span className="font-semibold text-gray-800">{subject}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}