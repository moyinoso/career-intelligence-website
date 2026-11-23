"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Compass } from "lucide-react";
import { NAV_LINKS, STREAMLIT_APP_URL } from "@/lib/config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-site items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-white">
            <Compass className="h-4 w-4" />
          </span>
          <span className="text-base font-bold tracking-tight text-navy-900">
            Career Intelligence
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-navy-900"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={STREAMLIT_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Launch App
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="rounded-lg p-2 text-navy-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={STREAMLIT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-600 px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Launch App
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
