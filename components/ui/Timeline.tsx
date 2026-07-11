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

export function Timeline({
  blocks,
  markerClassName = "bg-bg",
}: TimelineProps) {
  return (
    <ol className="relative m-0 list-none p-0">
      {blocks.map((block, index) => {
        const isLast = index === blocks.length - 1;
        return (
          <li key={block.title + block.range} className="relative flex gap-4">
            {/*
              Rail stretches to full row height (including content padding/gap)
              so the connector runs continuously between dots.
            */}
            <div className="relative flex w-4 shrink-0 flex-col items-center self-stretch">
              {!isLast && (
                <span
                  className="absolute bottom-0 left-1/2 top-4 w-px -translate-x-1/2 bg-accent/40"
                  aria-hidden
                />
              )}
              <span
                className={`relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-accent ${markerClassName}`}
                aria-hidden
              />
            </div>

            <div
              className={`min-w-0 flex-1 pt-0.5 ${isLast ? "pb-0" : "pb-10"}`}
            >
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
