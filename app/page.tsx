import { siteConfig } from "../lib/site";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          {siteConfig.slogan}
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          {siteConfig.description}
        </p>
        <a
          href={siteConfig.telegramBot}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-blue-700 transition inline-block"
        >
          شروع کاملاً رایگان 🚀
        </a>
      </section>

      {/* Subjects */}
      <section id="subjects" className="py-12">
        <h2 className="text-2xl font-bold text-center mb-8">دروس تحت پوشش</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {siteConfig.subjects.map((s) => (
            <span
              key={s}
              className="bg-blue-50 text-blue-700 px-5 py-2 rounded-full font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-12">
        <h2 className="text-2xl font-bold text-center mb-8">امکانات دانورا</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.features.map((f) => (
            <div key={f.title} className="bg-white shadow rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2 text-blue-600">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-12">
        <h2 className="text-2xl font-bold text-center mb-8">نحوهٔ کار</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-blue-600">مسیر معلم</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {siteConfig.teacherSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-blue-600">مسیر دانش‌آموز</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {siteConfig.studentSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">همین حالا شروع کنید</h2>
        <p className="text-gray-600 mb-6">هیچ هزینه‌ای برای استفاده از دانورا پرداخت نمی‌کنید</p>
        <a
          href={siteConfig.telegramBot}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-blue-700 transition inline-block"
        >
          ورود به ربات تلگرام
        </a>
      </section>
    </main>
  );
}