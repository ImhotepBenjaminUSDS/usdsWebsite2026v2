"use client";

import styles from "./WhyTheyServe.module.css";
import SectionHeader from "@/components/general/SectionHeader";
import HorizontalCards from "@/components/sections/HorizontalCards";
import type { Card } from "@/components/cards/ContentCard";
import { HOME_SECTION_ARIA_TEXT, HOME_WHY_THEY_SERVE_CONTENT } from "@/text/home";

export default function WhyTheyServe() {
  const { header, cards } = HOME_WHY_THEY_SERVE_CONTENT;

  const profileCards: Card[] = cards.map((card) => ({
    id: card.name,
    title: card.quote,
    surface: "background",
    titleAnimation: "body",
    titleColor: "var(--primary-light-subtle)",
    titleFontStyle: "italic",
    titleFontWeight: "var(--fw-regular)",
    footer: (
      <div className={styles.profileMeta}>
        <div className={styles.profileIdentity}>
          <p className={styles.profileName}>{card.name}</p>
          <p className={styles.profileRole}>{card.role}</p>
        </div>
        <p className={styles.profileShipped}>
          <span className={styles.profileShippedLabel}>
            {HOME_SECTION_ARIA_TEXT.whyTheyServeShippedLabel}
          </span>{" "}
          {card.shipped}
        </p>
      </div>
    ),
  }));

  return (
    <section
      className={`sectionFrameBase ${styles.wrapper}`}
      aria-label={HOME_SECTION_ARIA_TEXT.whyTheyServe}
    >
      <SectionHeader
        className={styles.header}
        eyebrow={header.eyebrow}
        title={header.title}
        subtitle={header.subTitle}
        titleAlignment="center"
        subtitleAlignment="center"
      />

      <HorizontalCards className={styles.cards} layout="grid" cards={profileCards} />
    </section>
  );
}
