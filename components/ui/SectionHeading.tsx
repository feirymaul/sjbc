interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-accent-soft" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-deep-muted" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
