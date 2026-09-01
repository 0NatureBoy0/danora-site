const items = [
  { t: "پروفایل تأییدشده", d: "مدارک تحصیلی و سابقهٔ تدریس هر معلم بررسی و تأیید می‌شود." },
  { t: "شهریهٔ شفاف", d: "قیمت هر جلسه پیش از هر توافقی در آگهی مشخص است." },
  { t: "انتخاب زمان", d: "دانش‌آموز از میان زمان‌های اعلامی معلم انتخاب می‌کند." },
  { t: "پرداخت امن", d: "پرداخت کارمزد از طریق درگاه معتبر زرین‌پال انجام می‌شود." },
  { t: "بدون نصب اپ", d: "همه چیز در تلگرام — روی موبایل و دسکتاپ." },
  { t: "پشتیبانی واقعی", d: "تیم پشتیبانی پاسخگوی معلم و دانش‌آموز است." },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">چرا دانورا؟</h2>
          <p className="section-sub">ساده، شفاف و مطمئن — برای هر دو طرف.</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <article key={f.t} className="card">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4338CA" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 font-black">{f.t}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">{f.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}