import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { STREAMLIT_APP_URL } from "@/lib/config";

export default function CTA() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl bg-navy-950 px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to understand your employability?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              Upload your CV, confirm your skills, and see how they compare
              with real career roles and job descriptions — then build your
              plan.
            </p>
            <a
              href={STREAMLIT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              Launch the Career Intelligence App
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-xs text-slate-500">
              The application opens in a new tab. The link is a placeholder
              until the Streamlit app is deployed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
