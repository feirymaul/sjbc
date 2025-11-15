import styles from "../home.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <section className={styles.section} id="faq">
      <h2 className={styles.sectionHeading}>Questions Guests Often Ask</h2>
      <p className={styles.sectionText}>
        Whether you are new to faith or visiting from another church, here are a few short answers to
        help you understand who we are and what to expect.
      </p>
      <div className={styles.faqList}>
        {items.map((faq) => (
          <article key={faq.question} className={styles.faqCard}>
            <h3 className={styles.cardTitle}>{faq.question}</h3>
            <p className={styles.cardBody}>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
