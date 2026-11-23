import { Database, Filter, Tags, FileSignature } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const stats = [
  {
    icon: Database,
    value: "9,870",
    label: "unique job records analysed",
    detail:
      "Nigerian job postings collected and deduplicated to form the research dataset.",
  },
  {
    icon: Filter,
    value: "5,080",
    label: "classified job records with descriptions",
    detail:
      "Records successfully categorised into career areas, each with a usable job description.",
  },
  {
    icon: Tags,
    value: "517",
    label: "career-role profiles developed",
    detail:
      "Distinct role profiles constructed from the classified records to power career matching.",
  },
];

const pipeline = [
  { icon: FileSignature, label: "Job postings collected" },
  { icon: Database, label: "Deduplicated dataset" },
  { icon: Filter, label: "Records classified with descriptions" },
  { icon: Tags, label: "Career-role profiles" },
];

export default function LabourMarket() {
  return (
    <section id="insights" className="bg-navy-950 py-20 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex max-w-2xl flex-col items-center gap-3 text-center mx-auto">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
              Labour Market Insights
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built on Nigerian job-market research
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              Career Intelligence is grounded in a dedicated analysis of
              Nigerian job postings. The research behind the system processed
              thousands of real records to build its career-role profiles.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="h-full rounded-xl border border-navy-800 bg-navy-900 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-800 text-brand-500">
                  <stat.icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-4xl font-bold tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-200">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {stat.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 rounded-xl border border-navy-800 bg-navy-900/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Research pipeline
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-4">
              {pipeline.map((step, index) => (
                <div key={step.label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-brand-500">
                    <step.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-500">
                      Stage {index + 1}
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      {step.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
