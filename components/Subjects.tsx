import { siteConfig } from "../lib/site";

export default function Subjects() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
            دروس ارائه شده
          </h2>
          <p className="text-xl text-gray-600">
            شش درس اصلی با معلم‌های مجرب
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {siteConfig.subjects.map((subject, i) => (
            <div key={i} className="card p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">
                {i === 0 && "📐"}
                {i === 1 && "⚛️"}
                {i === 2 && "🧪"}
                {i === 3 && "🧬"}
                {i === 4 && "🇬🇧"}
                {i === 5 && "💻"}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {subject}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
