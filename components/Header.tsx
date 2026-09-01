"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site } from "@/lib/site";

const nav = [
  { href: "#subjects", label: "دروس" },
  { href: "#how",      label: "چطور کار می‌کند" },
  { href: "#features", label: "امکانات" },
  { href: "#plans",    label: "پلن‌ها" },
  { href: "#faq",      label: "سؤالات" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        solid ? "border-b border-slate-100 bg-white/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Logo size={36} />
          <span className="text-lg font-black">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-lg px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-50 hover:text-brand-700"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={site.bot} target="_blank" rel="noopener" className="btn-primary">
            ورود به ربات
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="منو"
          aria-expanded={open}
          className="rounded-lg border border-slate-200 p-2.5 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>
                  : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <nav className="container-page flex flex-col py-3">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                {i.label}
              </a>
            ))}
            <a href={site.bot} target="_blank" rel="noopener" className="btn-primary mt-3">
              ورود به ربات
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}