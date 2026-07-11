import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { beliefs } from "@/content/beliefs";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "What We Believe",
  description: `The gospel, core convictions, and the 1689 London Baptist Confession at ${site.name}.`,
};

export default function BeliefsPage() {
  return (
    <>
      <PageHero title={beliefs.title} intro={beliefs.intro} eyebrow="Doctrine" />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                First things
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
                {beliefs.gospel.heading}
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
                {beliefs.gospel.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            title={beliefs.statementsHeading}
            intro={beliefs.statementsIntro}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beliefs.statements.map((item, i) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-ink/5"
              >
                <p className="font-serif text-3xl font-semibold text-accent/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionHeading
                  title={beliefs.confession.heading}
                  intro={beliefs.confession.body}
                />
                <p className="mt-4 text-sm text-muted">{beliefs.confession.linkNote}</p>
                <div className="mt-6">
                  <Button href={beliefs.confession.linkHref} external>
                    {beliefs.confession.linkText} →
                  </Button>
                </div>
              </div>
              <div className="grid gap-4">
                {beliefs.confession.points.map((point) => (
                  <article
                    key={point.title}
                    className="rounded-2xl border border-line bg-bg p-5"
                  >
                    <h3 className="font-serif text-lg font-semibold text-ink">{point.title}</h3>
                    <p className="mt-2 text-muted">{point.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            title={beliefs.practices.heading}
            intro={beliefs.practices.intro}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {beliefs.practices.items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-ink/5"
              >
                <h3 className="font-serif text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line bg-deep text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-20">
          <SectionHeading light title={beliefs.cta.heading} intro={beliefs.cta.body} />
          <div className="flex flex-wrap gap-3">
            <Button href="/visit" variant="onDark">
              Plan a visit
            </Button>
            <Button
              href={`mailto:${site.email}`}
              variant="ghost"
              className="border-white/25 text-white hover:bg-white/10 hover:text-white"
            >
              Email the pastor
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
