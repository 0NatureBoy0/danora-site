import Logo from "./Logo";
import { site } from "../lib/site";

const stats = [
  { v: "۶", l: "درس اصلی" },
  { v: "۱۰۰٪", l: "رایگان" },
  { v: "۲۴/۷", l: "پشتیبانی" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute -top-28 start-1/4 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-up text-center lg:text-start">
          <span className="badge mb-5">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            {site.tagline}
          </span>

          <h1 className="text-[2rem] font-black leading-[1.35] sm:text-5xl sm:leading-[1.3]">
            معلم خصوصی مناسبت را
            <span className="mt-2 block bg-gradient-to-l from-brand-700 to-brand-400 bg-clip-text text-transparent">
              کاملاً رایگان با دانورا پیدا کن
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 lg:mx-0">
            ریاضی، فیزیک، شیمی، زیست، انگلیسی و برنامه‌نویسی. پروفایل معلم‌ها را ببین،
            زمان دلخواهت را انتخاب کن و بعد از تأیید طرفین، کاملاً رایگان ارتباط مستقیم بگیر —
            همه در ربات تلگرام.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href={site.bot} target="_blank" rel="noopener" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.9 4.3 18.8 19c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.9 8.4-7.6c.4-.3-.1-.5-.6-.2L6.9 12.9l-4.5-1.4c-1-.3-1-1 .2-1.4l17.4-6.7c.8-.3 1.6.2 1.3 1Z" />
              </svg>
              شروع رایگان در ربات تلگرام
            </a>
            <a href="#features" className="btn-ghost">مشاهدهٔ امکانات</a>
          </div>

          <dl className="mt-10 flex justify-center gap-8 lg:justify-start">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-black text-brand-700">{s.v}</dt>
                <dd className="mt-1 text-xs font-bold text-slate-500">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <div className="mx-auto max-w-sm animate-float rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <Logo size={44} />
              <div>
                <p className="text-sm font-black">ربات دانورا</p>
                <p className="text-xs text-emerald-600">آنلاین</p>
              </div>
            </div>

            <div className="space-y-3 pt-5 text-sm">
              <div className="max-w-[85%] rounded-2xl rounded-se-md bg-slate-100 px-4 py-2.5 leading-7">
                سلام! دنبال معلم چه درسی هستی؟
              </div>
              <div className="ms-auto max-w-[85%] rounded-2xl rounded-ss-md bg-brand-600 px-4 py-2.5 leading-7 text-white">
                ریاضی، پایهٔ دوازدهم
              </div>
              <div className="max-w-[90%] rounded-2xl rounded-se-md bg-slate-100 px-4 py-2.5 leading-7">
                ۱۲ معلم پیدا شد. پروفایل‌ها را ببین و زمان انتخاب کن ✅
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {["پروفایل", "زمان‌ها", "رایگان"].map((t) => (
                <span key={t} className="rounded-xl bg-brand-50 py-2 text-center text-xs font-bold text-brand-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
