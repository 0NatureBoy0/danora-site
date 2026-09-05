import { siteConfig } from "../lib/site";

export default function Cta() {
  return (
    <section className="section-padding bg-gradient-to-r from-cyan-500 to-green-500">
      <div className="container-max text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
          همین حالا شروع کنید
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          هیچ هزینه‌ای برای استفاده از دانورا پرداخت نمی‌کنید
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href={siteConfig.bot}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn bg-white text-cyan-600 hover:bg-gray-100 text-lg font-bold"
          >
            ورود به ربات تلگرام 🚀
          </a>
          <a 
            href={`tel:${siteConfig.phone}`}
            className="btn bg-white/20 text-white border-2 border-white hover:bg-white/30 text-lg font-bold"
          >
            تماس با پشتیبانی ☎️
          </a>
        </div>
      </div>
    </section>
  );
}
