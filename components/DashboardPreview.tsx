import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Info,
} from "lucide-react";

const detectedSkills = ["Python", "Data Analysis", "SQL", "Excel", "Communication"];
const matchedSkills = ["Python", "SQL", "Data Analysis"];
const missingSkills = ["Power BI", "Stakeholder Reporting"];

const matchedWidth = 72;

export default function DashboardPreview() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lift">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="ml-3 flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <FileText className="h-3.5 w-3.5" />
            Career Intelligence · Skill Match
          </span>
        </div>

        <div className="grid gap-0 sm:grid-cols-2">
          {/* Left: extracted skills */}
          <div className="border-b border-slate-200 p-5 sm:border-b-0 sm:border-r">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Step 1 · Your CV
            </p>
            <p className="mt-2 truncate text-sm font-medium text-navy-900">
              sample_graduate_cv.pdf
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Detected skills — awaiting your confirmation
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {detectedSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-brand-100 bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Keyword detection is transparent and rule-based. You review and
              confirm every skill before any assessment is made.
            </div>
          </div>

          {/* Right: job match */}
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Step 2 · Job description match
            </p>
            <p className="mt-2 text-sm font-medium text-navy-900">
              Sample role: Junior Data Analyst
            </p>

            <div className="mt-4">
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-navy-900">
                  {matchedWidth}%
                </span>
                <span className="text-xs text-slate-400">skill overlap</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-brand-600"
                  style={{ width: `${matchedWidth}%` }}
                />
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                An overlap score compares your confirmed skills with a job
                description. It is not a probability of being hired.
              </p>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div>
                <p className="mb-1.5 flex items-center gap-1.5 font-semibold text-emerald-700">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Matched skills
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {matchedSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-1.5 flex items-center gap-1.5 font-semibold text-amber-700">
                  <AlertTriangle className="h-3.5 w-3.5" /> Skill gaps
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {missingSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-amber-50 px-2.5 py-1 font-medium text-amber-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg bg-navy-900 px-3 py-2.5 text-white">
              <span className="text-xs font-medium">
                Personalised development plan
              </span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-slate-400">
        Sample interface data shown for illustration only — not research findings.
      </p>
    </div>
  );
}
