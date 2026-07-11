type Block = {
  range: string;
  title: string;
  description: string;
};

interface TimelineProps {
  blocks: readonly Block[] | Block[];
  /** Fill color for the marker so it matches the section background */
  markerClassName?: string;
}

/**
 * Timeline with a single continuous vertical line in a fixed-width rail.
 * Dots are centered on that line (same column), so alignment stays reliable.
 */
export function Timeline({
  blocks,
  markerClassName = "bg-bg",
}: TimelineProps) {
  return (
    <ol className="relative m-0 list-none p-0">
      {/* One continuous line through the rail (w-4 = 1rem, center at 0.5rem) */}
      <span
        className="pointer-events-none absolute bottom-3 left-[0.4375rem] top-3 w-px bg-accent/40"
        aria-hidden
      />

      {blocks.map((block, index) => {
        const isLast = index === blocks.length - 1;
        return (
          <li
            key={block.title + block.range}
            className={`relative flex gap-4 ${isLast ? "" : "pb-10"}`}
          >
            <div className="relative z-10 flex w-4 shrink-0 justify-center">
              <span
                className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-accent ${markerClassName}`}
                aria-hidden
              />
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {block.range}
              </p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-ink">
                {block.title}
              </h3>
              <p className="mt-2 text-muted">{block.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
