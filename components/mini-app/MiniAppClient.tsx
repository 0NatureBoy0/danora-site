"use client";

import { useEffect, useState } from "react";

type Role = "teacher" | "student" | null;

type TelegramUser = {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
};

export default function MiniAppClient() {
  const [role, setRole] = useState<Role>(null);
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    const webApp = window.Telegram?.WebApp;

    if (webApp) {
      setIsTelegram(true);
      webApp.ready();
      webApp.expand();

      const user = webApp.initDataUnsafe?.user;

      if (user) {
        setTelegramUser(user);
      }
    }
  }, []);

  const fullName = telegramUser
    ? [telegramUser.first_name, telegramUser.last_name]
        .filter(Boolean)
        .join(" ")
    : "کاربر دانورا";

  if (role) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-8">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-lg">
          <div className="mb-8 text-center">
            {telegramUser?.photo_url ? (
              <img
                src={telegramUser.photo_url}
                alt={fullName}
                className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
              />
            ) : (
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-3xl">
                {fullName.charAt(0)}
              </div>
            )}

            <h1 className="text-2xl font-bold text-slate-900">
              سلام {fullName} 👋
            </h1>

            <p className="mt-2 text-slate-500">
              ثبت‌نام {role === "teacher" ? "معلم" : "دانش‌آموز"} در دانورا
            </p>
          </div>

          <div className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                نام و نام خانوادگی
              </span>
              <input
                defaultValue={fullName}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500"
                placeholder="نام و نام خانوادگی"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                شماره تماس
              </span>
              <input
                type="tel"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500"
                placeholder="۰۹۱۲۱۲۳۴۵۶۷"
              />
            </label>

            <button
              type="button"
              onClick={() =>
                window.Telegram?.WebApp.showAlert(
                  "فرم اولیه آماده است. در مرحله بعد ذخیره‌سازی اطلاعات را اضافه می‌کنیم."
                )
              }
              className="w-full rounded-2xl bg-indigo-600 px-4 py-4 font-bold text-white transition hover:bg-indigo-700"
            >
              ادامه ثبت‌نام
            </button>

            <button
              type="button"
              onClick={() => setRole(null)}
              className="w-full rounded-2xl bg-slate-100 px-4 py-3 font-medium text-slate-700"
            >
              تغییر نقش
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-4 py-8">
      <div className="mx-auto max-w-xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-600 text-4xl text-white shadow-lg">
            د
          </div>

          <h1 className="text-3xl font-black text-slate-900">
            به دانورا خوش آمدید
          </h1>

          <p className="mt-3 text-slate-600">
            برای شروع، نوع حساب خود را انتخاب کنید
          </p>

          {!isTelegram && (
            <p className="mt-4 rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-700">
              این صفحه خارج از تلگرام باز شده است؛ اطلاعات کاربر تلگرام در دسترس نیست.
            </p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setRole("teacher")}
            className="rounded-3xl bg-white p-6 text-right shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 text-4xl">👨‍🏫</div>
            <h2 className="text-xl font-bold text-slate-900">من معلم هستم</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              ساخت پروفایل تخصصی و معرفی مهارت‌های تدریس
            </p>
          </button>

          <button
            type="button"
            onClick={() => setRole("student")}
            className="rounded-3xl bg-white p-6 text-right shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 text-4xl">🎓</div>
            <h2 className="text-xl font-bold text-slate-900">من دانش‌آموز هستم</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              پیدا کردن معلم مناسب و دریافت آموزش
            </p>
          </button>
        </div>
      </div>
    </main>
  );
}
