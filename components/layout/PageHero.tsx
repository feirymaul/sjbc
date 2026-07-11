interface PageHeroProps {
  eyebrow?: string;
  title: string;
  intro?: string;
}

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
        )}
      </div>
    </section>
  );
}
