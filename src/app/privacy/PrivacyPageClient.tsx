"use client";

import { Fragment } from "react";
import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import SelectorRow from "@/components/general/SelectorRow";
import CTASection from "@/components/sections/CTASection";
import HeroFrame from "@/components/sections/PageHero";
import FaqItem from "@/app/hiring-faq/FaqItem";
import { PRIVACY_PAGE_CONTENT } from "@/text/privacy";
import styles from "@/app/hiring-faq/hiringFaq.module.css";

export default function PrivacyPageClient() {
  const { hero, quickLinksAriaLabel, quickLinks, sections, cta } =
    PRIVACY_PAGE_CONTENT;

  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <section className={`${styles.frame} ${styles.gapLg} ${styles.hero}`}>
        <HeroFrame
          className={styles.hero}
          headerClassName={styles.heroSectionHeader}
          variant="center"
          eyebrow={hero.eyebrow}
          title={hero.title}
          titleHighlightSlice={hero.titleHighlightSlice}
          subtitle={hero.subtitle}
          stats={hero.details.map((detail, index) => ({
            label: detail.label,
            value: detail.value,
            tone: (["blue", "teal", "gold"] as const)[index % 3],
          }))}
        />

        <SelectorRow
          ariaLabel={quickLinksAriaLabel}
          items={quickLinks.map((link) => ({
            key: link.href,
            label: link.label,
            href: link.href,
          }))}
        />
      </section>

      <DividerStars />

      {sections.map((section, index) => (
        <Fragment key={section.id}>
          <section
            id={section.id}
            className={`${styles.frame} ${styles.gapLg} ${
              index % 2 === 0 ? styles.panelTone : ""
            } ${styles.section}`}
          >
            <SectionHeader
              eyebrow={section.header.eyebrow}
              title={section.header.title}
              titleSize="large"
            />

            <div className={styles.faqList}>
              {section.faqs.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>
          </section>

          <DividerStars />
        </Fragment>
      ))}

      <CTASection {...cta} />
    </div>
  );
}
