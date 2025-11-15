"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../home.module.css";

interface PastEvent {
  title: string;
  date: string;
  description: string;
  imageSrc: string;
}

interface PastEventsSectionProps {
  events: PastEvent[];
}

export function PastEventsSection({ events }: PastEventsSectionProps) {
  const [index, setIndex] = useState(0);
  const hasEvents = events.length > 0;

  if (!hasEvents) return null;

  const safeIndex = index % events.length;
  const current = events[safeIndex];

  const goPrev = () => setIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  const goNext = () => setIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));

  return (
    <section className={styles.section} id="past-events">
      <h2 className={styles.sectionHeading}>Recent Highlights</h2>
      <p className={styles.sectionText}>
        Glimpses from recent gatherings and outreach so you can see what life together looks like at SJBC.
      </p>
      <div className={styles.pastCarousel}>
        <button type="button" className={styles.pastNav} onClick={goPrev} aria-label="Previous event">
          ‹
        </button>
          <article key={current.title} className={styles.pastEventCard}>
            <Image
              src={current.imageSrc}
              alt={current.title}
              width={1200}
              height={750}
              className={styles.pastEventImage}
              loading="lazy"
          />
          <div className={styles.pastEventBody}>
            <p className={styles.pastEventDate}>{current.date}</p>
            <h3 className={styles.pastEventTitle}>{current.title}</h3>
            <p className={styles.pastEventText}>{current.description}</p>
          </div>
        </article>
        <button type="button" className={styles.pastNav} onClick={goNext} aria-label="Next event">
          ›
        </button>
      </div>
      <div className={styles.pastDots} role="tablist" aria-label="Past events">
        {events.map((event, idx) => (
          <button
            key={event.title}
            type="button"
            className={`${styles.pastDot} ${idx === index ? styles.pastDotActive : ""}`}
            onClick={() => setIndex(idx)}
            aria-label={`Show ${event.title}`}
          />
        ))}
      </div>
    </section>
  );
}
