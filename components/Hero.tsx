import { siteConfig } from "../lib/site";

export default function Hero() {
  return (
    <section className="section-padding bg-gradient-to-b from-cyan-50 via-white to-green-50">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="gradient-text">پلتفرم رایگان</span>
              <br />
              اتصال معلم و دانش‌آموز
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={siteConfig.bot}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary text-lg"
              >
                شروع کاملاً رایگان 🚀
              </a>
              <a 
                href="#how-it-works"
                className="btn btn-secondary text-lg"
              >
                بیشتر بدانید
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden md:flex justify-center animate-slide-in-right">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 gradient-primary rounded-3xl opacity-20 blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl">👨‍🎓</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">۱۰۰%</div>
            <p className="text-gray-600">رایگان</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">۶ درس</div>
            <p className="text-gray-600">تحت پوشش</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">۲۴/۷</div>
            <p className="text-gray-600">پشتیبانی</p>
          </div>
        </div>
      </div>
    </section>
  );
}
