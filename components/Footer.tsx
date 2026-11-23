import { Compass } from "lucide-react";
import { NAV_LINKS, STREAMLIT_APP_URL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-site px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-white">
                <Compass className="h-4 w-4" />
              </span>
              <span className="text-base font-bold tracking-tight text-navy-900">
                Career Intelligence
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              An AI-assisted career intelligence and employability assessment
              system for graduates in Ado-Ekiti, Nigeria.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Explore
            </p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 transition-colors hover:text-navy-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href={STREAMLIT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
            >
              Launch the App
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-xs leading-relaxed text-slate-400">
            Career Intelligence provides skill assessments and guidance for
            self-development purposes. It does not predict hiring outcomes, and
            skill-overlap scores are not employability probabilities. Detected
            skills require user confirmation. Dashboard previews on this site
            show sample interface data for illustration only.
          </p>
          <p className="mt-3 text-xs text-slate-400">
            © {new Date().getFullYear()} Career Intelligence · Ado-Ekiti,
            Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
