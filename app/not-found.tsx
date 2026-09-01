import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      <p className="text-7xl font-black text-brand-600">۴۰۴</p>
      <h1 className="text-xl font-bold">این صفحه پیدا نشد</h1>
      <p className="text-slate-500">ممکن است آدرس تغییر کرده باشد.</p>
      <Link href="/" className="btn-primary">بازگشت به صفحهٔ اصلی</Link>
    </main>
  );
}