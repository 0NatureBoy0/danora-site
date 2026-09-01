import Logo from "./Logo";
import { site, subjects } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50/70">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo size={38} />
              <span className="text-lg font-black">{site.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-8 text-slate-500">
              دانورا پلتفرم اتصال معلم و دانش‌آموز است. پیدا کردن معلم خصوصی، انتخاب زمان و
              ارتباط مطمئن — همه در ربات تلگرام.
            </p>
            <a href={site.bot} target="_blank" rel="noopener" className="btn-primary mt-6">
              ورود به ربات
            </a>
          </div>

          <div>
            <h3 className="text-sm font-black">دروس</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
              {subjects.map((s) => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black">ارتباط با ما</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
              <li>
                <a href={`tel:${site.phone}`} className="hover:text-brand-700">
                  پشتیبانی: {site.phoneFa}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brand-700">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.bot} target="_blank" rel="noopener" className="hover:text-brand-700">
                  ربات تلگرام دانورا
                </a>
              </li>
              <li>{site.domain}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} دانورا — تمامی حقوق محفوظ است.</p>
          <p>پرداخت‌ها از طریق درگاه معتبر زرین‌پال</p>
        </div>
      </div>
    </footer>
  );
}