import { siteConfig } from "../lib/site";

export default function Subjects() {
  return (
    <section id="subjects" className="py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
          دروس ما
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {siteConfig.subjects.map((subject) => (
            <div key={subject} className="card text-center p-4">
              <p className="text-lg font-semibold text-brand-700">{subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
