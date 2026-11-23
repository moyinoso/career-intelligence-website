import {
  BarChart3,
  Code2,
  Calculator,
  Briefcase,
  Megaphone,
  ClipboardList,
  FileSearch,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const areas = [
  {
    icon: BarChart3,
    title: "Data and Analytics",
    description:
      "Roles centred on collecting, analysing, and presenting data to support decisions.",
  },
  {
    icon: Code2,
    title: "Software Development and IT",
    description:
      "Building, maintaining, and supporting software systems and IT infrastructure.",
  },
  {
    icon: Calculator,
    title: "Finance and Accounting",
    description:
      "Managing financial records, reporting, budgeting, and compliance.",
  },
  {
    icon: Briefcase,
    title: "Business and Administration",
    description:
      "Coordinating operations, documentation, and organisational processes.",
  },
  {
    icon: Megaphone,
    title: "Sales and Marketing",
    description:
      "Promoting products and services, engaging customers, and driving growth.",
  },
  {
    icon: ClipboardList,
    title: "Project and Operations Management",
    description:
      "Planning and delivering projects and keeping day-to-day operations running.",
  },
  {
    icon: FileSearch,
    title: "Research, Monitoring and Evaluation",
    description:
      "Designing studies, gathering evidence, and assessing programme outcomes.",
  },
  {
    icon: Users,
    title: "Human Resources",
    description:
      "Supporting recruitment, staff development, and workplace relations.",
  },
];

export default function CareerAreas() {
  return (
    <section id="careers" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Career Intelligence"
            title="Eight career areas, grounded in real job data"
            description="Roles are organised into eight career areas derived from classified Nigerian job records — so suggestions reflect the local labour market rather than generic lists."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, index) => (
            <Reveal key={area.title} delay={(index % 4) * 80}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-lift">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <area.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-navy-900">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
