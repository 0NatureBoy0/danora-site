const teacher = [
  { t: "ثبت‌نام در ربات", d: "با تلگرام وارد شو و نقش «معلم» را انتخاب کن." },
  { t: "ساخت پروفایل", d: "مدارک، سابقه، دروس و شهریه را وارد کن." },
  { t: "ثبت آگهی", d: "به تعداد دلخواه آگهی ثبت کن، کاملاً رایگان." },
  { t: "دریافت درخواست", d: "دانش‌آموزها زمان‌های اعلامی تو را انتخاب می‌کنند." },
];
const student = [
  { t: "ورود به ربات", d: "نقش «دانش‌آموز» را انتخاب کن." },
  { t: "جستجوی درس", d: "درس و پایهٔ تحصیلی خود را مشخص کن." },
  { t: "مشاهدهٔ پروفایل", d: "مدارک، شهریه و زمان‌های آزاد معلم را ببین." },
  { t: "تأیید نهایی", d: "بعد از تأیید طرفین، آی‌دی‌ها رایگان رد و بدل می‌شود." },
];
function Column({ title, badge, steps }: { title: string; badge: string; steps: { t: string; d: string }[] }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
      <span className="badge">{badge}</span>
      <h3 className="mt-4 text-lg font-black">{title}</h3>
      <ol className="mt-6 space-y-5">
        {steps.map((s, i) => (
          <li key={s.t} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-black text-white">{i + 1}</span>
            <div><p className="font-bold">{s.t}</p><p className="mt-1 text-sm leading-7 text-slate-500">{s.d}</p></div>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default function HowItWorks() {
  return (
    <section id="how" className="section bg-slate-50/70">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">چطور کار می‌کند؟</h2>
          <p className="section-sub">تمام مراحل داخل ربات تلگرام انجام می‌شود — بدون نصب اپلیکیشن.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Column title="مسیر معلم" badge="برای معلم‌ها" steps={teacher} />
          <Column title="مسیر دانش‌آموز" badge="برای دانش‌آموزها" steps={student} />
        </div>
      </div>
    </section>
  );
}
