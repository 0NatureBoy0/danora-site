import { plans, site } from "@/lib/site";

export default function Plans() {
  return (
    <section id="plans" className="section bg-slate-50/70">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">پلن‌های ثبت آگهی</h2>
          <p className="section-sub">
            پلن‌ها بر اساس <strong className="text-slate-700">تعداد آگهی</strong> است، نه مدت زمان.
            آگهی‌های شما محدودیت روز ندارند.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.key}
              className={`relative rounded-3xl border bg-white p-6 sm:p-8 ${
                p.highlight
                  ? "border-brand-600 shadow-soft lg:-translate-y-3"
                  : "border-slate-100 shadow-card"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 start-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-black text-white">
                  پیشنهاد ما
                </span>
              )}

              <h3 className="text-lg font-black">{p.title}</h3>
              <p className="mt-1 text-sm font-bold text-brand-700">{p.ads}</p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-3xl font-black">{p.price}</span>
                {p.unit && <span className="text-sm text-slate-500">{p.unit}</span>}
              </div>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-7 text-slate-600">
                    <svg className="mt-1.5 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={site.bot}
                target="_blank"
                rel="noopener"
                className={`mt-8 w-full ${p.highlight ? "btn-primary" : "btn-ghost"}`}
              >
                {p.price === "رایگان" ? "شروع رایگان" : "خرید در ربات"}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-7 text-slate-500">
          پرداخت از طریق درگاه زرین‌پال · پشتیبانی: {site.phoneFa} · {site.email}
        </p>
      </div>
    </section>
  );
}