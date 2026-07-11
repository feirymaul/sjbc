"use client";

import { useState } from "react";

export type AccordionItem = {
  question: string;
  answer: string;
};

interface AccordionProps {
  items: readonly AccordionItem[] | AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left min-h-14 sm:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
            >
              <span className="font-medium text-ink">{item.question}</span>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-lg font-medium text-ink"
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-muted sm:px-6">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
