import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceStrip } from "@/components/ui/ServiceStrip";
import { Timeline } from "@/components/ui/Timeline";
import { site } from "@/content/site";
import { visit } from "@/content/visit";

export const metadata: Metadata = {
  title: "Plan a Visit",
  description: `Plan your first Sunday at ${site.name} in ${site.location}. Times, map, and what to expect.`,
};

export default function VisitPage() {
  return (
    <>
      <PageHero title={visit.title} intro={visit.intro} eyebrow="Visit" />
      <ServiceStrip />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading title={visit.rhythm.heading} />
            <div className="mt-8">
              <Timeline blocks={visit.rhythm.blocks} />
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <SectionHeading title={visit.expect.heading} />
            <div className="mt-8 grid gap-4">
              {visit.expect.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-line bg-surface p-5"
                >
                  <h3 className="font-serif text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Location"
              title="Find us in Maite"
              intro={`${site.addressLine}. ${site.addressNote}.`}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={site.mapsUrl} external>
                Open in Maps
              </Button>
              <Button href="/faq" variant="ghost">
                Guest FAQ →
              </Button>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="overflow-hidden rounded-2xl border border-line bg-bg shadow-sm">
              <iframe
                title="San Juan Baptist Church map"
                src={site.mapEmbed}
                className="h-[280px] w-full border-0 sm:h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading title={visit.connect.heading} intro={visit.connect.body} />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Email
              </p>
              <p className="mt-2 font-medium text-ink break-all">{site.email}</p>
            </a>
            <a
              href={site.phoneHref}
              className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Call
              </p>
              <p className="mt-2 font-medium text-ink">{site.phone}</p>
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Social
              </p>
              <p className="mt-2 font-medium text-ink">Facebook</p>
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
