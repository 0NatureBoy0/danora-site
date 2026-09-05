"use client";
import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import { siteConfig } from "../lib/site";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10 gradient-text">
        نحوهٔ کار
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center">
              <GraduationCap className="text-white w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">مسیر معلم</h3>
          </div>
          <ol className="space-y-3">
            {siteConfig.teacherSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center">
              <Users className="text-white w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">مسیر دانش‌آموز</h3>
          </div>
          <ol className="space-y-3">
            {siteConfig.studentSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}