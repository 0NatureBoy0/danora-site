import { siteConfig } from "../lib/site";

export default function Faq() {
  const faqs = [
    {
      q: "آیا واقعاً کاملاً رایگان است؟",
      a: "بله! تمام سرویس‌های دانورا برای معلم‌ها و دانش‌آموزان کاملاً رایگان است."
    },
    {
      q: "چگونه می‌توانم معلم خود را پیدا کنم؟",
      a: "کافی است وارد ربات تلگرام دانورا شوید، درس مورد نظر را جستجو کنید و پروفایل معلم‌ها را مشاهده کنید."
    },
    {
      q: "آیا معلم‌ها تأیید شده‌اند؟",
      a: "بله! تمام معلم‌ها باید مدارک تحصیلی و سابقهٔ تدریس خود را بارگذاری و تأیید کنند."
    },
    {
      q: "چه زمانی می‌توانم شروع کنم؟",
      a: "همین الآن! کافی است به ربات تلگرام وارد شوید و ثبت‌نام کنید."
    },
    {
      q: "آیا نیاز به نصب اپلیکیشن است؟",
      a: "خیر! همه‌چیز از طریق وب‌سایت و تلگرام انجام می‌شود."
    },
    {
      q: "چگونه می‌توانم کمک بگیرم؟",
      a: "می‌توانید از طریق تلگرام، تلفن یا ایمیل با ما تماس بگیرید."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
            سوالات متداول
          </h2>
          <p className="text-xl text-gray-600">
            پاسخ‌های شما را اینجا پیدا کنید
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="card p-6 cursor-pointer group">
              <summary className="flex items-center justify-between font-bold text-lg text-gray-900 hover:text-cyan-600 transition">
                {faq.q}
                <span className="text-2xl group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            پاسخت را پیدا نکردی؟ با ما تماس بگیر.
          </p>
        </div>
      </div>
    </section>
  );
}
