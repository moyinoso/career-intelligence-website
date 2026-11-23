import { ShieldCheck, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const technologies = [
  "Python",
  "Streamlit",
  "Pandas",
  "PDF processing",
  "DOCX processing",
  "Keyword-based skill extraction",
  "Rule-based matching",
];

const principles = [
  {
    title: "Transparent methods",
    body: "The prototype uses keyword detection and rule-based matching — not a trained AI model. You can see exactly how every result was produced.",
  },
  {
    title: "You stay in control",
    body: "Detected skills always require your confirmation. Nothing is assessed or concluded about you automatically.",
  },
  {
    title: "Honest interpretation",
    body: "Skill-overlap scores show how your skills compare with a job description. They are not employability probabilities, and the system does not predict hiring outcomes.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About the Project"
              title="Research-driven, locally focused"
            />
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Career Intelligence is a research project focused on graduate
              employability in Ado-Ekiti, Ekiti State, Nigeria. It was created
              to help graduates bridge the gap between what they have learned,
              what their CVs communicate, and what the local labour market
              actually asks for.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              By combining Nigerian job-market research with transparent skill
              analysis, the project turns an overwhelming job search into a
              structured self-assessment — one that graduates can act on
              immediately.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-navy-900">
              <MapPin className="h-4 w-4 text-brand-600" />
              Research focus: Ado-Ekiti, Ekiti State, Nigeria
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Technologies
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-brand-600" />
                  <h3 className="text-base font-semibold text-navy-900">
                    What the system is — and is not
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Career Intelligence is an assessment and guidance tool. It
                  works with three commitments:
                </p>
              </div>
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-card"
                >
                  <h4 className="text-sm font-semibold text-navy-900">
                    {principle.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
