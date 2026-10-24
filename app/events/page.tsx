import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { PhotoCard } from "@/components/ui/PhotoCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getActiveUpcomingEvents, pastEvents } from "@/content/events";
import { site } from "@/content/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Events",
  description: `Upcoming gatherings and recent highlights at ${site.name}.`,
};

export default function EventsPage() {
  const upcoming = getActiveUpcomingEvents();

  return (
    <>
      <PageHero
        title="Events & highlights"
        intro="Special gatherings, outreach, and moments from life together at SJBC."
        eyebrow="Gatherings"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            title="Upcoming"
            intro={
              upcoming.length
                ? "Mark your calendar and invite a friend."
                : "No special events listed right now. Join us for our regular Sunday gatherings."
            }
          />
          {upcoming.length > 0 ? (
            <div className="mt-8 grid gap-4">
              {upcoming.map((event) => (
                <article
                  key={event.title + event.date}
                  className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm shadow-ink/5 sm:flex-row"
                >
                  {event.imageSrc && (
                    <a
                      href={event.imageSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open full-size ${event.title} flyer`}
                      className="relative block aspect-square w-full shrink-0 overflow-hidden bg-accent-soft sm:w-80"
                    >
                      <Image
                        src={event.imageSrc}
                        alt={`${event.title} flyer`}
                        fill
                        sizes="(max-width: 640px) 100vw, 320px"
                        className="object-cover"
                      />
                    </a>
                  )}
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {event.date}
                    </p>
                    <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">
                      {event.title}
                    </h2>
                    <p className="mt-2 text-muted">{event.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-line bg-surface p-8">
              <p className="text-muted">
                Sunday School 9:30am · Morning service 10:50am · Afternoon
                service 1:30pm (last Sunday) · Cottage prayer Wed 7:00pm.
              </p>
              <div className="mt-5">
                <Button href="/visit" variant="secondary">
                  Plan a visit →
                </Button>
              </div>
            </div>
          )}
        </Reveal>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <SectionHeading
              title="Recent highlights"
              intro="A look back at celebrations, camps, and outreach."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event, i) => (
                <PhotoCard key={event.title} {...event} priority={i < 2} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
