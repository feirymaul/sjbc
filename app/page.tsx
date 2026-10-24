import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PhotoCard } from "@/components/ui/PhotoCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceStrip } from "@/components/ui/ServiceStrip";
import { about } from "@/content/about";
import { pastEvents } from "@/content/events";
import { home } from "@/content/home";
import { site } from "@/content/site";

export default function HomePage() {
  const moments = pastEvents.slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-deep text-white">
        <Image
          src="/hero-background.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/55 to-deep/90" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-32">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-soft">
              {home.hero.eyebrow}
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              {home.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {home.hero.subheading}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/visit" variant="onDark">
                Plan a visit
              </Button>
              <Button
                href="/beliefs"
                variant="ghost"
                className="border-white/25 text-white hover:bg-white/10 hover:text-white"
              >
                What we believe
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
              {home.hero.cardLabel}
            </p>
            <p className="mt-3 font-serif text-2xl font-semibold">{home.hero.cardTitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{home.hero.cardNote}</p>
            <Link
              href="/visit"
              className="mt-5 inline-flex text-sm font-semibold text-accent-soft underline-offset-4 hover:underline"
            >
              {home.hero.cardLinkText}
            </Link>
          </div>
        </div>
      </section>

      <ServiceStrip />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="First time"
            title={home.newHere.heading}
            intro={home.newHere.intro}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {home.newHere.cards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-ink/5"
              >
                <h3 className="font-serif text-xl font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 flex-1 text-muted">{card.body}</p>
                <Link
                  href={card.href}
                  className="mt-5 text-sm font-semibold text-accent hover:text-accent-hover"
                >
                  {card.linkText}
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6 sm:py-14">
          <Reveal>
            <SectionHeading
              title={home.lifeTeaser.heading}
              intro={home.lifeTeaser.intro}
            />
          </Reveal>
          <Button href="/life" variant="secondary" className="shrink-0">
            Church life →
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Moments"
              title="Recent highlights"
              intro="Glimpses of life together: gatherings, outreach, and celebrations."
            />
            <Button href="/events" variant="ghost" className="shrink-0 self-start md:self-auto">
              All events →
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {moments.map((event, i) => (
              <PhotoCard key={event.title} {...event} priority={i === 0} />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line bg-deep text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-20">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Doctrine"
              title={home.beliefsTeaser.heading}
              intro={home.beliefsTeaser.body}
            />
          </Reveal>
          <Button href="/beliefs" variant="onDark" className="shrink-0 self-start">
            Read our beliefs →
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-accent-soft">
              <Image
                src={about.shepherds.imageSrc}
                alt={`${about.shepherds.name} with his wife ${about.shepherds.wifeName}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {home.shepherd.label}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
                {home.shepherd.heading}
              </h2>
              <p className="mt-4 text-lg text-muted">{home.shepherd.body}</p>
              <div className="mt-8">
                <Button href="/about" variant="secondary">
                  About our church →
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
              Ready for your first Sunday?
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              We would love to welcome you in {site.location}. See directions and what to expect.
            </p>
          </div>
          <Button href="/visit">Plan a visit</Button>
        </div>
      </section>
    </>
  );
}
