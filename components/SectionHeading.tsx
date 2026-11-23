type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
