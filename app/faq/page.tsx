import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { faq } from "@/content/faq";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Common questions for guests visiting ${site.name}.`,
};

export default function FaqPage() {
  return (
    <>
      <PageHero title={faq.title} intro={faq.intro} eyebrow="Help" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <Accordion items={faq.items} />
        </Reveal>
        <div className="mt-12 rounded-2xl border border-line bg-surface p-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-ink">Still have a question?</h2>
          <p className="mt-2 text-muted">
            Write us or come say hello after the service. We are glad to help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/visit">Plan a visit</Button>
            <Button href={`mailto:${site.email}`} variant="secondary">
              Email us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
