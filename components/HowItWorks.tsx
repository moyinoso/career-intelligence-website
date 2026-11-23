import { FileUp, ListChecks, Compass, Map } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const steps = [
  {
    icon: FileUp,
    title: "Upload your CV",
    description:
      "Upload your CV as a PDF or DOCX file. The system reads the document and prepares it for analysis.",
  },
  {
    icon: ListChecks,
    title: "Review and confirm extracted skills",
    description:
      "Skills are detected using transparent, keyword-based rules. You review the results and confirm which skills are genuinely yours before anything else happens.",
  },
  {
    icon: Compass,
    title: "Explore matches and assess job descriptions",
    description:
      "Browse career roles that fit your confirmed skills, or paste a specific job description to see your skill overlap and identify gaps.",
  },
  {
    icon: Map,
    title: "Receive a personalised development plan",
    description:
      "Get a practical, prioritised plan for building the skills that matter most for the roles you are targeting.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="From CV to career plan in four steps"
            description="A simple, transparent workflow built around your confirmed skills — no black boxes, no guesswork."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 100}>
              <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-white">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-slate-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
