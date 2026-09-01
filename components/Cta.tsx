import { site } from "@/lib/site";

export default function Cta() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-brand-700 px-6 py-14 text-center sm:px-12">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-25" />
          <div className="pointer-events-none absolute -bottom-20 start-1/3 h-64 w-64 rounded-full bg-brand-400/40 blur-3xl" aria-hidden />

          <div className="relative">
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              همین حالا در دانورا شروع کن
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-8 text-brand-100">
              معلم هستی؟ دو آگهی اول رایگان است. دانش‌آموزی؟ جستجو و مشاهدهٔ پروفایل‌ها رایگان.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={site.bot}
                target="_blank"
                rel="noopener"
                className="btn bg-white text-brand-700 hover:bg-brand-50"
              >
                ورود به ربات تلگرام
              </a>
              <a
                href={`tel:${site.phone}`}
                className="btn border border-white/25 text-white hover:bg-white/10"
              >
                تماس با پشتیبانی
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}