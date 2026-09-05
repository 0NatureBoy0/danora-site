$root = "C:\Users\bahra\OneDrive\Desktop\danora-site"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Write-File($path, $content) {
    $full = Join-Path $root $path
    $dir = Split-Path $full
    if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    [System.IO.File]::WriteAllText($full, $content, $utf8NoBom)
    Write-Host "✅ نوشته شد: $path"
}

# ---------- lib/site.ts ----------
$siteTs = @'
export const siteConfig = {
  name: "دانورا",
  slogan: "پلتفرم رایگان اتصال معلم و دانش‌آموز",
  description: "پیدا کردن معلم خصوصی برای ریاضی، فیزیک، شیمی، زیست، انگلیسی و برنامه‌نویسی - کاملاً رایگان",
  telegramBot: "https://t.me/Teachconnect_ir_bot",
  supportPhone: "09981379074",
  supportEmail: "danora.support@danora.site",
  subjects: ["ریاضی", "فیزیک", "شیمی", "زیست", "انگلیسی", "برنامه‌نویسی"],
  features: [
    { title: "پروفایل تأیید‌شده", desc: "معلم‌ها با مدارک تحصیلی و سابقهٔ تدریس تأیید می‌شوند" },
    { title: "کاملاً رایگان", desc: "بدون هیچ هزینه‌ای، ثبت‌نام و استفاده از سرویس آزاد است" },
    { title: "انتخاب زمان دلخواه", desc: "زمان کلاس را خودتان با معلم هماهنگ می‌کنید" },
    { title: "بدون نیاز به نصب اپلیکیشن", desc: "همه‌چیز از طریق وب‌سایت و تلگرام" },
    { title: "پشتیبانی واقعی", desc: "پاسخ‌گویی سریع از طریق تلگرام، تلفن و ایمیل" },
  ],
  teacherSteps: [
    "ثبت‌نام در ربات تلگرام دانورا",
    "ساخت پروفایل و بارگذاری مدارک",
    "ثبت آگهی تدریس رایگان",
    "دریافت درخواست از دانش‌آموزان",
  ],
  studentSteps: [
    "ورود به ربات تلگرام دانورا",
    "جستجوی درس مورد نظر",
    "مشاهده پروفایل معلم‌ها",
    "ارتباط مستقیم و شروع کلاس",
  ],
};
'@
Write-File "lib\site.ts" $siteTs

# ---------- app/globals.css ----------
$globalsCss = @'
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  direction: rtl;
}

body {
  font-family: "Vazirmatn", Tahoma, sans-serif;
}
'@
Write-File "app\globals.css" $globalsCss

# ---------- components/Header.tsx ----------
$headerTsx = @'
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-blue-600">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="#features">امکانات</Link>
          <Link href="#how-it-works">نحوهٔ کار</Link>
          <Link href="#subjects">دروس</Link>
          <Link href="#support">پشتیبانی</Link>
        </nav>
        <a
          href={siteConfig.telegramBot}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          شروع رایگان
        </a>
      </div>
    </header>
  );
}
'@
Write-File "components\Header.tsx" $headerTsx

# ---------- components/Footer.tsx ----------
$footerTsx = @'
import { siteConfig } from "@/lib/site";

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
'@
Write-File "components\Footer.tsx" $footerTsx

# ---------- app/layout.tsx ----------
$layoutTsx = @'
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.slogan}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
'@
Write-File "app\layout.tsx" $layoutTsx

# ---------- app/page.tsx ----------
$pageTsx = @'
import { siteConfig } from "@/lib/site";

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
'@
Write-File "app\page.tsx" $pageTsx

Write-Host ""
Write-Host "🎉 همه فایل‌ها با موفقیت ساخته/بروزرسانی شدند."