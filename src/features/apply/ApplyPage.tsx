import Eyebrow from "@/components/general/Eyebrow";
import styles from "./ApplyPage.module.css";

const HIGHLIGHTS = [
  "A human reads every application",
  "No federal resume required",
  "5 minutes to complete",
] as const;

export default function ApplyPage() {
  return (
    <div className={`pageWrap ${styles.page}`}>
      <section className={styles.shell}>
        <Eyebrow text="Start your application" alignment="left" />

        <h1 className={styles.title}>
          Join the
          <span className={styles.titleAccent}>mission.</span>
        </h1>

        <div className={styles.rule} aria-hidden="true" />

        <p className={styles.lede}>
          This takes about 5 minutes. We&apos;ll review your background and
          reach out within two weeks if there&apos;s a fit.
        </p>

        <ul className={styles.highlights}>
          {HIGHLIGHTS.map((item) => (
            <li key={item} className={styles.highlightItem}>
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.stepTrack} aria-hidden="true">
          <div className={styles.stepFill} />
        </div>

        <p className={styles.stepLine}>
          <span className={styles.stepLabel}>Step 1 of 3 - About you</span>
          <span className={styles.stepSummary}>
            Basic contact info so we can reach you. Nothing formal.
          </span>
        </p>

        <form className={styles.form}>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>
              Full name <span aria-hidden="true">*</span>
            </span>
            <input
              className={styles.input}
              type="text"
              name="fullName"
              autoComplete="name"
              placeholder="Jane Smith"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>
              Email <span aria-hidden="true">*</span>
            </span>
            <input
              className={styles.input}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="jane@example.com"
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>LinkedIn or portfolio</span>
            <input
              className={styles.input}
              type="url"
              name="portfolio"
              autoComplete="url"
              placeholder="https://"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>
              Why do you want to serve at USDS? <span aria-hidden="true">*</span>
            </span>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="motivation"
              placeholder="Share a short note about the mission and the kind of work you want to do."
              required
            />
          </label>

          <div className={styles.actions}>
            <button className={styles.submit} type="button">
              Continue to step 2
            </button>
            <p className={styles.note}>
              You can apply once and we will route you to matching tracks.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
