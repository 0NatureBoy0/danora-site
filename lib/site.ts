export const site = {
  name: "دانورا",
  tagline: "پلتفرم اتصال معلم و دانش‌آموز",
  bot: "https://t.me/Teachconnect_ir_bot",
  phone: "09981379074",
  phoneFa: "۰۹۹۸۱۳۷۹۰۷۴",
  email: "danora.support@danora.site",
  domain: "danora.site",
  url: "https://danora.site",
};

export const subjects = [
  { name: "ریاضی",       icon: "∑",  desc: "حساب، جبر، هندسه، دیفرانسیل" },
  { name: "فیزیک",       icon: "⚛",  desc: "مکانیک، الکتریسیته، نور" },
  { name: "شیمی",        icon: "⚗",  desc: "آلی، معدنی، استوکیومتری" },
  { name: "زیست",        icon: "🧬", desc: "سلولی، ژنتیک، گیاهی" },
  { name: "انگلیسی",     icon: "A",  desc: "مکالمه، گرامر، آیلتس" },
  { name: "برنامه‌نویسی", icon: "{}", desc: "پایتون، وب، الگوریتم" },
];

export const plans = [
  {
    key: "trial",
    title: "آزمایشی",
    price: "رایگان",
    unit: "",
    ads: "۲ آگهی",
    highlight: false,
    features: [
      "ثبت ۲ آگهی بدون هزینه",
      "ساخت پروفایل و بارگذاری مدارک",
      "نمایش در نتایج جستجو",
      "پشتیبانی از طریق ربات",
    ],
  },
  {
    key: "standard",
    title: "استاندارد",
    price: "۱۰۰,۰۰۰",
    unit: "تومان",
    ads: "۵ آگهی",
    highlight: true,
    features: [
      "ثبت ۵ آگهی فعال",
      "نشان پروفایل تأییدشده",
      "اولویت در نتایج جستجو",
      "آمار بازدید آگهی‌ها",
      "پشتیبانی سریع",
    ],
  },
  {
    key: "pro",
    title: "حرفه‌ای",
    price: "۳۰۰,۰۰۰",
    unit: "تومان",
    ads: "۲۰ آگهی",
    highlight: false,
    features: [
      "ثبت ۲۰ آگهی فعال",
      "بالاترین اولویت نمایش",
      "نشان معلم برگزیده",
      "آمار و گزارش کامل",
      "پشتیبانی اختصاصی",
    ],
  },
];