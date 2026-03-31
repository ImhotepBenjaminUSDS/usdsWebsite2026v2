import type { Metadata } from "next";
import styles from "./howWeWork.module.css";
import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import CTA from "@/components/buttons/CTA";
import ColorImageBlock from "@/components/general/ColorImageBlock";
import Link from "next/link";
import HorizontalCards from "@/components/general/sections/HorizontalCards";
import { COMMUNITY_DISCIPLINES } from "@/content/communities";
import { HOW_WE_WORK_PAGE_CONTENT } from "@/content/howWeWork";
import ContentScroller from "./ContentScroller";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.usds.gov";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Learn how U.S. DOGE Service (USDS) collaborates with agencies through short tours of service, cross-functional teams, and measurable delivery.",
  keywords: [
    "How USDS works",
    "U.S. DOGE Service hiring",
    "U.S. Digital Service disciplines",
    "federal digital service delivery",
    "government modernization approach",
  ],
  alternates: {
    canonical: "/how-we-work",
  },
  openGraph: {
    url: `${siteUrl}/how-we-work`,
    title: "How We Work | U.S. DOGE Service (USDS)",
    description:
      "See how USDS deploys mission-driven teams to improve critical government services with engineering, design, product, data, and procurement expertise.",
    images: [
      {
        url: "/usds-logo-cropped.svg",
        alt: "U.S. DOGE Service logo",
      },
    ],
  },
  twitter: {
    title: "How We Work | U.S. DOGE Service (USDS)",
    description:
      "See how USDS deploys mission-driven teams to improve critical government services with modern delivery practices.",
    images: ["/usds-logo-cropped.svg"],
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
    <div className={`pageWrapper ${styles.wrapper}`}>
      <div className="pageInnerWrapper">
        <section id="work" className={`sectionFrameBase ${styles.hero}`}>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <SectionHeader
                eyebrow={hero.eyebrow}
                title={hero.title}
                titleAs="h1"
                titleSize="large"
                titleAlignment="left"
                titleColor="primaryLight"
                titleHighlightColor="primaryColorLight"
                titleHighlightSlice={[36, 47]}
                subtitle={hero.body}
                subtitleAlignment="left"
              />
            </div>

            <ColorImageBlock tone={hero.visualTone} className={styles.heroVisual} />
          </div>
        </section>

        <DividerStars />

        <section
          className={`sectionFrameBase sectionFrameTonePanel ${styles.valuesSection}`}
        >
          <SectionHeader
            eyebrow={valuesSection.header.eyebrow}
            title={valuesSection.header.title}
            titleAs="h2"
            titleSize="large"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
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
            titleAs="h2"
            titleSize="large"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
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
            eyebrow={principlesSection.header.eyebrow}
            title={principlesSection.header.title}
            titleAs="h2"
            titleSize="large"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
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
    </div>
  );
}
