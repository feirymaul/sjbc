import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { about } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story of ${site.name}: established in 1983 in ${site.location}, reformed in 2004, and served by Pastor Ramir Quijada since 1993.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={about.title} intro={about.intro} eyebrow="Our church" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading title={about.story.heading} />
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
            {about.story.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <SectionHeading
                title="Key moments"
                intro="A few markers along the way, from the church's founding to the work God is still doing in Maite."
              />
              <Timeline blocks={about.milestones} markerClassName="bg-surface" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-accent-soft">
              <Image
                src={about.shepherds.imageSrc}
                alt={`${about.shepherds.name} with his wife ${about.shepherds.wifeName}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {about.shepherds.label}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
                {about.shepherds.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {about.shepherds.description}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <div className="rounded-2xl border border-line bg-bg p-8 sm:p-10">
              <SectionHeading title={about.belong.heading} intro={about.belong.body} />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/visit">Plan a visit</Button>
                <Button href={`mailto:${site.email}`} variant="secondary">
                  Email us
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
