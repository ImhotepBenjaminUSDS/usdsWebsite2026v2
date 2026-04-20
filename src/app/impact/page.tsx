import Link from "next/link";
import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import HeroFrame from "@/components/sections/PageHero";
import ImpactCaseStudyCards from "@/components/sections/ImpactCaseStudyCards";
import Eyebrow from "@/components/general/Eyebrow";
import DataTable from "@/components/general/DataTable";
import caseStudies from "@/data/child/case-studies";
import dispatches from "@/data/child/dispatches";
import { getImageBreakScene } from "@/text/imageBreaks";
import { IMPACT_PAGE_CONTENT, IMPACT_PAGE_UI_TEXT } from "@/text/impact";
import {
  generateMetadata as generateLegacyMetadata,
} from "@/features/legacy-pages/LegacyPage";
import styles from "./page.module.css";

const HERO_STAT_TONES = ["blue", "teal", "gold", "sky"] as const;
const SHOWCASE_TONES = ["blue", "sky", "gold", "teal"] as const;
const DISPATCH_DATE_FORMATTER = new Intl.DateTimeFormat(
  IMPACT_PAGE_UI_TEXT.dispatchDateLocale,
  {
  month: "short",
  day: "numeric",
  timeZone: "UTC",
},
);

function getLegacyParams() {
  return Promise.resolve({ legacy: ["impact"] });
}

export async function generateMetadata() {
  return generateLegacyMetadata({ params: getLegacyParams() });
}

function formatDispatchDate(dateValue: string): string {
  const parsed = new Date(`${dateValue}T00:00:00Z`);

  if (Number.isNaN(parsed.getTime())) {
    return dateValue;
  }

  return DISPATCH_DATE_FORMATTER.format(parsed);
}

function getDispatchCategoryClassName(
  category: (typeof dispatches)[number]["category"],
): string {
  switch (category) {
    case "Shipped":
      return styles.latestFieldCategoryShipped;
    case "Milestone":
      return styles.latestFieldCategoryMilestone;
    default:
      return styles.latestFieldCategoryOther;
  }
}

export default function Page() {
  const { hero, sections, cta } = IMPACT_PAGE_CONTENT;
  const heroImage = caseStudies[0]?.image ?? getImageBreakScene(0).src;
  const recentDispatches = dispatches.slice(0, 3);
  const latestFieldRows = recentDispatches.map((entry) => ({
    key: entry.id,
    cells: [
      (
        <div key={`${entry.id}-meta`} className={styles.latestFieldMeta}>
          <p className={styles.latestFieldDate}>{formatDispatchDate(entry.date)}</p>
          <span
            className={`${styles.latestFieldCategory} ${getDispatchCategoryClassName(
              entry.category,
            )}`}
          >
            {entry.category}
          </span>
        </div>
      ),
      (
        <div key={`${entry.id}-body`} className={styles.latestFieldBodyColumn}>
          {entry.agency ? <p className={styles.latestFieldAgency}>{entry.agency}</p> : null}
          <h3 className={styles.latestFieldItemTitle}>{entry.title}</h3>
          <p className={styles.latestFieldDescription}>{entry.body}</p>
        </div>
      ),
    ],
  }));

  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <HeroFrame
        className={styles.hero}
        headerClassName={styles.heroHeader}
        statsClassName={styles.heroStats}
        variant="left"
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleSize="heroChild"
        subtitle={hero.subtitle}
        titleHighlightSlice={hero.titleHighlightSlice}
        titleLineBreakBefore={hero.titleLineBreakBefore}
        splitContentLayout="stacked"
        frameStyle="frameless"
        imageSrc={heroImage}
        imageAlt={hero.imageAlt}
        statsPlacement="content"
        statsStyle="frameless"
        stats={hero.stats.map((item, index) => ({
          label: item.label,
          value: item.value,
          tone: HERO_STAT_TONES[index % HERO_STAT_TONES.length],
        }))}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={sections.caseStudies.eyebrow}
          title={sections.caseStudies.title}
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={sections.caseStudies.subtitle}
        />

        <ImpactCaseStudyCards
          studies={caseStudies}
          showcaseTones={SHOWCASE_TONES}
          filterMode="domain"
        />
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.latestFieldSection}`}>
        <div className={styles.latestFieldContentWrap}>
          <div className={styles.latestFieldEyebrowWrap}>
            <Eyebrow text={sections.latestFromField.eyebrow} alignment="center" />
          </div>
          <h2 className={styles.latestFieldTitle}>{sections.latestFromField.title}</h2>
          <DataTable
            headers={[
              sections.latestFromField.tableHeaders.date,
              sections.latestFromField.tableHeaders.update,
            ]}
            rows={latestFieldRows}
            size="sm"
            className={styles.latestFieldTableWrap}
            tableClassName={styles.latestFieldTable}
          />
          <div className={styles.latestFieldCtaRow}>
            <Link className={styles.latestFieldCtaLink} href="/dispatches">
              {sections.latestFromField.viewAllDispatchesLabel} &rarr;
            </Link>
          </div>
        </div>
      </section>

      <DividerStars />

      <CTASection {...cta} />
    </div>
  );
}
