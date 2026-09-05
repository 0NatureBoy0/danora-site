import { siteConfig } from "../lib/site";

export default function Footer() {
  return (
    <footer id="support" className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-white font-bold mb-3">{siteConfig.name}</h3>
          <p>{siteConfig.description}</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">پشتیبانی</h3>
          <p>تلفن: {siteConfig.supportPhone}</p>
          <p>ایمیل: {siteConfig.supportEmail}</p>
          <a
            href={siteConfig.telegramBot}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            ربات تلگرام دانورا
          </a>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">دروس</h3>
          <p>{siteConfig.subjects.join("، ")}</p>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} {siteConfig.name} - تمامی خدمات کاملاً رایگان است
      </p>
    </footer>
  );
}