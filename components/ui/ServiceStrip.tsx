import { serviceTimes } from "@/content/site";

export function ServiceStrip() {
  return (
    <section
      aria-label="Gathering times"
      className="border-y border-line bg-surface"
    >
      <div className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {serviceTimes.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center gap-1 bg-surface px-5 py-6 text-center sm:py-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {item.label}
            </p>
            <p className="font-serif text-2xl font-semibold text-ink">{item.time}</p>
            <p className="text-sm text-muted">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
