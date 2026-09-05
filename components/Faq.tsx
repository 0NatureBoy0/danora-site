import { site } from "../lib/site";

const faq = [
  { q: "استفاده از دانورا برای دانش‌آموز هزینه دارد؟",
    d: "نه، دانورا کاملاً رایگان است. مشاهدهٔ پروفایل معلم‌ها، جستجو و ارتباط گرفتن، همه بدون هیچ هزینه‌ای انجام می‌شود." },
  { q: "آگهی من چند روز فعال می‌ماند؟",
    d: "آگهی‌های شما هیچ محدودیت زمانی ندارند و به‌صورت رایگان فعال باقی می‌مانند." },
  { q: "شهریهٔ هر جلسه را چه کسی تعیین می‌کند؟",
    d: "معلم شهریه را در آگهی پنل خود اعلام می‌کند و پیش از هر توافقی برای دانش‌آموز قابل مشاهده است." },
  { q: "چطور مطمئن شوم معلم معتبر است؟",
    d: "هر معلم موقع ثبت‌نام مدارک تحصیلی و سابقهٔ تدریس بارگذاری می‌کند و پروفایل پس از بررسی تأیید می‌شود." },
  { q: "آی‌دی‌ها چه زمانی رد و بدل می‌شود؟",
    d: "بعد از تأیید طرفین، آی‌دی معلم و دانش‌آموز به‌صورت رایگان و بدون هیچ پرداختی به یکدیگر نمایش داده می‌شود." },
  { q: "آیا محدودیتی در تعداد آگهی‌ها وجود دارد؟",
    d: "نه، می‌توانید به تعداد دلخواه آگهی ثبت کنید؛ همهٔ امکانات دانورا کاملاً رایگان است." },
];

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <h2 className="section-title">سؤالات پرتکرار</h2>
          <p className="section-sub">
            پاسخت را پیدا نکردی؟ به {site.phoneFa} پیام بده.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faq.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-card open:border-brand-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                {f.q}
                <svg
                  className="shrink-0 text-brand-600 transition group-open:rotate-45"
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-8 text-slate-500">{f.d}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
