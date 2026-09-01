import { site } from "@/lib/site";

const faq = [
  { q: "استفاده از دانورا برای دانش‌آموز هزینه دارد؟",
    d: "مشاهدهٔ پروفایل معلم‌ها و جستجو رایگان است. فقط پس از تأیید نهایی، کارمزد اتصال پرداخت می‌شود." },
  { q: "آگهی من چند روز فعال می‌ماند؟",
    d: "پلن‌های دانورا بر اساس تعداد آگهی است، نه روز. آگهی شما محدودیت زمانی ندارد." },
  { q: "شهریهٔ هر جلسه را چه کسی تعیین می‌کند؟",
    d: "معلم شهریه را در آگهی پنل خود اعلام می‌کند و پیش از هر توافقی برای دانش‌آموز قابل مشاهده است." },
  { q: "چطور مطمئن شوم معلم معتبر است؟",
    d: "هر معلم موقع ثبت‌نام مدارک تحصیلی و سابقهٔ تدریس بارگذاری می‌کند و پروفایل پس از بررسی تأیید می‌شود." },
  { q: "آی‌دی‌ها چه زمانی رد و بدل می‌شود؟",
    d: "بعد از تأیید طرفین و پرداخت کارمزد، آی‌دی معلم و دانش‌آموز به یکدیگر نمایش داده می‌شود." },
  { q: "پرداخت از چه درگاهی انجام می‌شود؟",
    d: "از طریق درگاه معتبر زرین‌پال، به‌صورت کامل داخل ربات تلگرام." },
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