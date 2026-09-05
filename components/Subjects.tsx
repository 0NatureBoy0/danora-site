import { subjects } from "../lib/site";

export default function Subjects() {
  return (
    <section id="subjects" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">دروس موجود در دانورا</h2>
          <p className="section-sub">
            برای هر درس، معلم‌های تأییدشده با مدارک و سابقهٔ مشخص در دسترس‌اند.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {subjects.map((s) => (
            <article key={s.name} className="card text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-xl font-black text-brand-700">
                {s.icon}
              </div>
              <h3 className="mt-4 font-black">{s.name}</h3>
              <p className="mt-1.5 text-xs leading-6 text-slate-500">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}