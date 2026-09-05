import { siteConfig } from "../lib/site";

export default function Footer() {
  return (
    <footer id="support" className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-700">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">د</span>
                </div>
                <h3 className="text-2xl font-bold">{siteConfig.name}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {siteConfig.description}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">تماس با ما</h4>
              <div className="space-y-3 text-gray-400">
                <p className="hover:text-cyan-400 transition">
                  📞 تلفن: <a href={`tel:${siteConfig.phone}`}>{siteConfig.supportPhone}</a>
                </p>
                <p className="hover:text-cyan-400 transition">
                  📧 ایمیل: <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
                </p>
                <p className="hover:text-cyan-400 transition">
                  💬 تلگرام: <a href={siteConfig.telegramBot} target="_blank" rel="noopener noreferrer">ربات دانورا</a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">دروس</h4>
              <div className="flex flex-wrap gap-2">
                {siteConfig.subjects.map((subject) => (
                  <span key={subject} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} {siteConfig.name} - تمامی خدمات کاملاً رایگان است
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
