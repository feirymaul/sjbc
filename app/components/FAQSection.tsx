'use client';

import { useState } from "react";
import styles from "../home.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section} id="faq">
      <h2 className={styles.sectionHeading}>Questions Guests Often Ask</h2>
      <p className={styles.sectionText}>
        Whether you are new to faith or visiting from another church, here are a few short answers to
        help you understand who we are and what to expect.
      </p>
      <div className={styles.faqList}>
        {items.map((faq, idx) => {
          const isOpen = idx === openIndex;
          return (
            <article key={faq.question} className={styles.faqItem}>
              <button
                type="button"
                className={styles.faqTrigger}
                aria-expanded={isOpen}
                onClick={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
              >
                <span>{faq.question}</span>
                <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
              </button>
              <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
