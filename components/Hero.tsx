import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import DashboardPreview from "@/components/DashboardPreview";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-site px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-block rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
              For graduates in Ado-Ekiti, Nigeria
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-navy-950 sm:text-5xl">
              Know your skills.{" "}
              <span className="text-brand-600">Plan your career.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Career Intelligence helps graduates understand what their CVs
              actually say about them — identifying skills, matching them to
              real career roles, revealing skill gaps against job descriptions,
              and turning all of it into a practical development plan.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
              Many graduates struggle to articulate their skills or see how they
              fit the labour market. This tool makes that first step structured,
              transparent, and actionable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#careers"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Explore Career Intelligence
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900"
              >
                <PlayCircle className="h-4 w-4 text-brand-600" />
                How It Works
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <DashboardPreview />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
