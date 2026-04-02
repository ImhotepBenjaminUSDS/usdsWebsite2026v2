import type { Metadata } from "next";
import styles from "./howWeWork.module.css";
import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import CTA from "@/components/buttons/CTA";
import ColorImageBlock from "@/components/general/ColorImageBlock";
import Link from "next/link";
import HorizontalCards from "@/components/general/sections/HorizontalCards";
import { COMMUNITY_DISCIPLINES } from "@/text/communities";
import { HOW_WE_WORK_PAGE_CONTENT } from "@/text/howWeWork";
import ContentScroller from "./ContentScroller";
import {
  ROUTE_METADATA_TEXT,
  SHARED_METADATA_TEXT,
  SITE_URL_FALLBACK,
} from "@/text/metadata";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || SITE_URL_FALLBACK;
const pageMeta = ROUTE_METADATA_TEXT.howWeWork;

export const metadata: Metadata = {
  title: pageMeta.title,
  description: pageMeta.description,
  keywords: [...pageMeta.keywords],
  alternates: {
    canonical: pageMeta.canonical,
  },
  openGraph: {
    url: `${siteUrl}${pageMeta.canonical}`,
    title: pageMeta.openGraphTitle,
    description: pageMeta.openGraphDescription,
    images: [
      {
        url: SHARED_METADATA_TEXT.logoImagePath,
        alt: SHARED_METADATA_TEXT.logoAlt,
      },
    ],
  },
  twitter: {
    title: pageMeta.twitterTitle,
    description: pageMeta.twitterDescription,
    images: [SHARED_METADATA_TEXT.logoImagePath],
  },
};

export default function HowWeWorkPage() {
  const {
    hero,
    valuesSection,
    disciplinesSection,
    principlesSection,
    spotlightsSection,
    ctaSection,
  } = HOW_WE_WORK_PAGE_CONTENT;

  const principleCards = principlesSection.cards.map((card) => ({
    id: card.id,
    title: card.title,
    body: card.body,
    gradientPosition: card.gradientPosition,
    image: <ColorImageBlock tone={card.tone} micro />,
  }));

  const spotlightCards = spotlightsSection.cards.map((card) => ({
    id: card.id,
    eyebrow: card.eyebrow,
    title: card.title,
    body: card.body,
    gradientPosition: card.gradientPosition,
    image: <ColorImageBlock tone={card.tone} micro />,
    footer: <Link href={card.linkHref}>{card.linkText}</Link>,
  }));

  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <section id="work" className={`sectionFrameBase ${styles.hero}`}>
        <div className={styles.heroLayout}>
          <div className={styles.heroContent}>
            <SectionHeader
              eyebrow={hero.eyebrow}
              title={hero.title}
              isPageTitle
              titleHighlightSlice={[7, 11]}
              subtitle={hero.body}
            />
          </div>
        </div>
      </section>

      <DividerStars />

      <section
        className={`sectionFrameBase sectionFrameTonePanel ${styles.valuesSection}`}
      >
        <SectionHeader
          eyebrow={valuesSection.header.eyebrow}
          title={valuesSection.header.title}
          titleAlignment="left"
          titleHighlightSlice={valuesSection.header.titleHighlightSlice}
        />

        <section className={styles.valuesGrid}>
          <HorizontalCards cards={valuesSection.cards} />
        </section>
      </section>

      <DividerStars />

      <section
        id="who-we-hire"
        className={`sectionFrameBase ${styles.disciplinesSection}`}
      >
        <SectionHeader
          eyebrow={disciplinesSection.header.eyebrow}
          title={disciplinesSection.header.title}
          titleHighlightSlice={[0,10]}
          linkText={disciplinesSection.header.linkText}
          linkHref={disciplinesSection.header.linkHref}
        />

        <ContentScroller disciplines={COMMUNITY_DISCIPLINES} />
      </section>

      <DividerStars />

      <section
        className={`sectionFrameBase sectionFrameTonePanel ${styles.principlesSection}`}
      >
        <SectionHeader
        className={styles.principleHeader}
          eyebrow={principlesSection.header.eyebrow}
          title={principlesSection.header.title}
          titleHighlightSlice={principlesSection.header.titleHighlightSlice}
        />

        <div className={styles.principlesGrid}>
          <HorizontalCards cards={principleCards} />
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase sectionFrameTonePanel ${styles.ctaSection}`}>
        <h2 className={styles.ctaTitle}>
          {ctaSection.titleLineOne}
          <br />
          {ctaSection.titleLineTwo}
        </h2>
        <div className={styles.ctaAction}>
          <CTA
            text={ctaSection.ctaText}
            href={ctaSection.ctaHref}
            icon="arrowRight"
            backgroundColor="var(--primary-color)"
            textColor="var(--primary-light)"
          />
        </div>
      </section>
    </div>
  );
}
