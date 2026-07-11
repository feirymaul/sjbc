import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { life } from "@/content/life";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Life & Schedule",
  description: `Weekly rhythm at ${site.name} in ${site.location}.`,
};

export default function LifePage() {
  return (
    <>
      <PageHero title={life.title} intro={life.intro} eyebrow="Belong" />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <SectionHeading
                title="Weekly rhythm"
                intro="What a typical week looks like as we gather, pray, and grow together."
              />
              <Timeline blocks={life.schedule} markerClassName="bg-surface" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Also
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-ink">
              {life.mercy.title}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">{life.mercy.body}</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-bg p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink">Join us this week</h2>
            <p className="mt-2 text-muted">See map, contact, and what guests can expect.</p>
          </div>
          <Button href="/visit">Plan a visit</Button>
        </div>
      </section>
    </>
  );
}
