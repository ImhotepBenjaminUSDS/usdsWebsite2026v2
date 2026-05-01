"use client";

import type { ReactNode } from "react";
import CTASection from "@/components/sections/CTASection";
import CardSurface from "@/components/cards/CardSurface";
import LongFeatureCard, { type SideTone } from "@/components/cards/LongFeatureCard";
import SectionHeader from "@/components/general/SectionHeader";
import HeroFrame from "@/components/sections/PageHero";
import ImpactCaseStudyCards, {
  type ImpactCaseStudyTone,
} from "@/components/sections/ImpactCaseStudyCards";
import DividerStars from "@/ui/DividerStars";
import caseStudies from "@/data/child/case-studies";
import agencyEngagements from "@/data/child/agency-engagements";
import type { AgencyEngagement } from "@/data/child/agency-engagements";
import milestones from "@/data/child/milestones";
import teamMembers, {
  alumniDestinations,
  beforeAfter,
  profiles,
} from "@/data/child/team-members";
import { objectives, values } from "@/data/child/values";
import { getImageBreakScene } from "@/text/imageBreaks";
import {
  ROUTE_CONTENT_PAGE_TEXT,
  type ImpactDetailSlug,
} from "@/text/routeContent";
import DataTable from "@/components/general/DataTable";
import styles from "./RouteContentPageClient.module.css";

const IMPACT_SHOWCASE_TONES: readonly ImpactCaseStudyTone[] =
  ROUTE_CONTENT_PAGE_TEXT.impactShowcaseTones;
const WIDE_CARD_TONES: readonly SideTone[] = ROUTE_CONTENT_PAGE_TEXT.wideCardTones;

type RouteContentPageKey =
  | "about"
  | "about/people"
  | "join"
  | "join/alumni"
  | "impact/congress"
  | "impact/fafsa"
  | "impact/va-ai"
  | "impact/state-visas"
  | "impact/passport";

type RouteContentPageClientProps = {
  pageKey: RouteContentPageKey;
};

type Stat = {
  value: string;
  label: string;
};

function toEngagementTableRows(entries: AgencyEngagement[]) {
  return entries.map((entry) => ({
    key: entry.name,
    cells: [
      entry.name,
      entry.domain,
      entry.teams,
      entry.people,
      entry.status,
      entry.highlights.join(", "),
    ],
  }));
}

function HeroSection({
  eyebrow,
  title,
  subtitle,
  stats,
  imageSrc,
  imageAlt,
  useCompactTitle,
  headerClassName,
  cta,
  variant,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  stats?: Stat[];
  imageSrc?: string;
  imageAlt?: string;
  useCompactTitle?: boolean;
  headerClassName?: string;
  cta?: { text: string; href: string }[];
  variant?: "left" | "center";
}) {
  const resolvedVariant = variant ?? (imageSrc ? "left" : "center");
  const isSplitHero = resolvedVariant === "left";
  const heroStats = stats?.map((stat) => ({
    label: stat.label,
    value: stat.value,
  }));
  const heroCtas = cta?.map((item, index) => ({
    text: item.text,
    href: item.href,
    backgroundColor:
      index === 0 ? "var(--primary-color)" : "var(--primary-dark-panel-muted)",
    textColor: "var(--primary-light)",
  }));

  return (
    <HeroFrame
      className={`${styles.hero} ${isSplitHero ? styles.heroSplit : ""}`}
      headerClassName={`${styles.heroHeader} ${
        isSplitHero ? styles.heroHeaderSplit : styles.heroHeaderCentered
      } ${useCompactTitle ? styles.heroHeaderCompact : ""} ${headerClassName ?? ""}`}
      statsClassName={isSplitHero ? styles.heroStatsGrid : undefined}
      variant={resolvedVariant}
      eyebrow={eyebrow}
      title={title}
      titleSize="heroChild"
      subtitle={subtitle}
      alignment={isSplitHero ? "left" : "center"}
      showTitleBorder={false}
      compactTitle={Boolean(useCompactTitle)}
      splitContentLayout={isSplitHero ? "stacked" : "default"}
      frameStyle={isSplitHero ? "frameless" : "framed"}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      stats={heroStats}
      statsPlacement={isSplitHero ? "content" : "bottom"}
      statsStyle={isSplitHero ? "frameless" : "framed"}
      cta={heroCtas}
      ctaPlacement={
        isSplitHero && heroCtas && heroCtas.length > 0 ? "afterStats" : "header"
      }
    />
  );
}

function PanelCard({
  eyebrow,
  title,
  body,
  footer,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  footer?: ReactNode;
}) {
  return (
    <CardSurface as="article" tone="background" className={styles.card}>
      {eyebrow ? <p className={styles.cardEyebrow}>{eyebrow}</p> : null}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardBody}>{body}</p>
      {footer ? footer : null}
    </CardSurface>
  );
}

function AboutPageContent() {
  const profileCount = profiles.length;
  const copy = ROUTE_CONTENT_PAGE_TEXT.about;

  return (
    <>
      <HeroSection
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        imageSrc={getImageBreakScene(0).src}
        imageAlt={copy.hero.imageAlt}
        stats={[
          { value: copy.stats.foundedValue, label: copy.stats.foundedLabel },
          { value: `${profileCount}`, label: copy.stats.profilesLabel },
          { value: `${milestones.length}`, label: copy.stats.milestonesLabel },
          { value: copy.stats.agenciesValue, label: copy.stats.agenciesLabel },
        ]}
        cta={copy.hero.cta.map((item) => ({ ...item }))}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={copy.sections.objectives.eyebrow}
          title={copy.sections.objectives.title}
          titleAlignment="left"
          subtitle={copy.sections.objectives.subtitle}
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {objectives.map((objective) => (
            <PanelCard
              key={objective.title}
              eyebrow={objective.stat}
              title={objective.title}
              body={objective.desc}
            />
          ))}
        </div>
      </section>
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={copy.sections.timeline.eyebrow}
          title={copy.sections.timeline.title}
          titleAlignment="left"
          subtitle={copy.sections.timeline.subtitle}
          subtitleAlignment="left"
        />

        <div className={styles.timeline}>
          {milestones.map((milestone) => (
            <article
              key={`${milestone.year}-${milestone.event}`}
              className={styles.timelineItem}
            >
              <p className={styles.timelineYear}>{milestone.year}</p>
              <p className={styles.timelineBody}>{milestone.event}</p>
            </article>
          ))}
        </div>
      </section>
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={copy.sections.values.eyebrow}
          title={copy.sections.values.title}
          titleAlignment="left"
          subtitle={copy.sections.values.subtitle}
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridThree}`}>
          {values.map((value) => (
            <PanelCard key={value.title} title={value.title} body={value.desc} />
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection {...copy.cta} />
    </>
  );
}

function AboutPeoplePageContent() {
  const featuredProfiles = profiles.slice(0, 6);
  const roleCount = new Set(featuredProfiles.map((profile) => profile.role)).size;
  const sharedProjectCount = featuredProfiles.filter(
    (profile) => profile.shipped.trim().length > 0,
  ).length;
  const copy = ROUTE_CONTENT_PAGE_TEXT.aboutPeople;

  return (
    <>
      <HeroSection
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        variant="left"
        imageSrc={getImageBreakScene(1).src}
        imageAlt={copy.hero.imageAlt}
        headerClassName={styles.peopleHeroHeader}
        stats={[
          { value: `${featuredProfiles.length}`, label: copy.stats.profilesShownLabel },
          { value: `${roleCount}`, label: copy.stats.rolePerspectivesLabel },
          {
            value: `${sharedProjectCount}`,
            label: copy.stats.projectHighlightsSharedLabel,
          },
          { value: copy.stats.participationValue, label: copy.stats.participationLabel },
        ]}
        cta={copy.hero.cta.map((item) => ({ ...item }))}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <p className={styles.participationNotice}>{copy.participationNotice}</p>

        <SectionHeader
          eyebrow={copy.sections.profiles.eyebrow}
          title={copy.sections.profiles.title}
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={copy.sections.profiles.subtitle}
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {featuredProfiles.map((profile) => (
            <article className={styles.card} key={profile.initials}>
              <p className={styles.cardEyebrow}>{profile.role}</p>
              <h3 className={styles.cardTitle}>{profile.name}</h3>
              <p className={styles.cardBody}>
                <strong>{copy.workedOnLabel}</strong> {profile.shipped}
              </p>
              <p className={styles.cardBody}>
                <strong>{copy.whyUsdsLabel}</strong> {profile.whyJoined}
              </p>
            </article>
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection {...copy.cta} />
    </>
  );
}

function ImpactCongressPageContent() {
  const totalTeams = agencyEngagements.reduce((sum, row) => sum + row.teams, 0);
  const totalPeople = agencyEngagements.reduce((sum, row) => sum + row.people, 0);
  const activeEngagements = agencyEngagements.filter(
    (engagement) => engagement.status === "active",
  ).length;
  const heroImage = getImageBreakScene(1).src;
  const copy = ROUTE_CONTENT_PAGE_TEXT.impactCongress;

  return (
    <>
      <HeroSection
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        imageSrc={heroImage}
        imageAlt={copy.hero.imageAlt}
        useCompactTitle
        stats={[
          { value: `${agencyEngagements.length}`, label: copy.stats.engagementsLabel },
          { value: `${activeEngagements}`, label: copy.stats.activeLabel },
          { value: `${totalTeams}`, label: copy.stats.teamsLabel },
          { value: `${totalPeople}`, label: copy.stats.peopleLabel },
        ]}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={copy.sections.caseStudies.eyebrow}
          title={copy.sections.caseStudies.title}
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <ImpactCaseStudyCards
          studies={caseStudies.slice(0, 6)}
          showcaseTones={IMPACT_SHOWCASE_TONES}
        />
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={copy.sections.portfolio.eyebrow}
          title={copy.sections.portfolio.title}
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={copy.sections.portfolio.subtitle}
        />

        <DataTable
          headers={[...ROUTE_CONTENT_PAGE_TEXT.tableHeaders]}
          rows={toEngagementTableRows(agencyEngagements)}
          size="sm"
          minWidth={740}
        />
      </section>

      <DividerStars />

      <CTASection {...copy.cta} />
    </>
  );
}

function ImpactDetailPageContent({ slug }: { slug: ImpactDetailSlug }) {
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return null;
  }

  const copy = ROUTE_CONTENT_PAGE_TEXT.impactDetail;
  const detail = copy.entries[slug];
  const relatedCaseStudies = caseStudies.filter(
    (entry): entry is (typeof caseStudies)[number] & { slug: string } =>
      Boolean(entry.slug) && entry.slug !== slug,
  );

  return (
    <>
      <HeroSection
        eyebrow={copy.heroEyebrow}
        title={study.title}
        subtitle={detail.subtitle}
        imageSrc={study.image}
        imageAlt={study.title}
        useCompactTitle
        stats={[
          {
            value: study.before,
            label: `${copy.stats.beforeLabelPrefix} (${study.metricLabel})`,
          },
          {
            value: study.after,
            label: `${copy.stats.afterLabelPrefix} (${study.metricLabel})`,
          },
          { value: study.agency, label: copy.stats.agencyLabel },
          { value: study.domain, label: copy.stats.domainLabel },
        ]}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={copy.sections.related.eyebrow}
          title={copy.sections.related.title}
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={copy.sections.related.subtitle}
        />

        <ImpactCaseStudyCards
          studies={relatedCaseStudies}
          showcaseTones={IMPACT_SHOWCASE_TONES}
        />
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={copy.sections.implementation.eyebrow}
          title={copy.sections.implementation.title}
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={study.result}
        />

        <div className={styles.wideCardStack}>
          {detail.highlights.map((highlight, index) => (
            <LongFeatureCard
              key={highlight}
              eyebrow={copy.cards.implementationEyebrow}
              title={copy.cards.implementationTitle}
              description={highlight}
              sideValue={`${index + 1}`.padStart(2, "0")}
              sideLabel={copy.cards.implementationSideLabel}
              sideTone={WIDE_CARD_TONES[index % WIDE_CARD_TONES.length] ?? "blue"}
              animateSideValue={false}
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={copy.sections.outcomes.eyebrow}
          title={copy.sections.outcomes.title}
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={styles.wideCardStack}>
          {detail.outcomes.map((outcome, index) => (
            <LongFeatureCard
              key={outcome}
              eyebrow={copy.cards.outcomesEyebrow}
              title={outcome}
              sideValue={`${index + 1}`.padStart(2, "0")}
              sideLabel={copy.cards.outcomesSideLabel}
              sideTone={WIDE_CARD_TONES[index % WIDE_CARD_TONES.length] ?? "blue"}
              animateSideValue={false}
            />
          ))}
          <LongFeatureCard
            eyebrow={copy.cards.measureEyebrow}
            title={study.metricLabel}
            description={`${copy.cards.measureDescriptionPrefix} ${study.before} to ${study.after}.`}
            sideText={`${study.before} -> ${study.after}`}
            sideLabel={copy.cards.measureSideLabel}
            sideTone={
              WIDE_CARD_TONES[detail.outcomes.length % WIDE_CARD_TONES.length] ?? "blue"
            }
          />
        </div>
      </section>

      <DividerStars />

      <CTASection {...copy.cta} />
    </>
  );
}

function JoinPageContent() {
  const disciplines = Array.from(new Set(teamMembers.map((member) => member.discipline)));
  const copy = ROUTE_CONTENT_PAGE_TEXT.join;

  return (
    <>
      <HeroSection
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        stats={[
          { value: copy.stats.tourRangeValue, label: copy.stats.tourRangeLabel },
          { value: `${disciplines.length}`, label: copy.stats.disciplinesLabel },
          { value: `${beforeAfter.length}`, label: copy.stats.journeysLabel },
          { value: copy.stats.operatingModelValue, label: copy.stats.operatingModelLabel },
        ]}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={copy.sections.roles.eyebrow}
          title={copy.sections.roles.title}
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridThree}`}>
          {disciplines.map((discipline) => {
            const disciplineMembers = teamMembers.filter(
              (member) => member.discipline === discipline,
            );

            return (
              <PanelCard
                key={discipline}
                eyebrow={`${disciplineMembers.length} ${copy.sections.roles.membersSuffix}`}
                title={discipline}
                body={`${copy.sections.roles.representativeRolesPrefix} ${disciplineMembers
                  .slice(0, 3)
                  .map((entry) => entry.role)
                  .join(", ")}.`}
              />
            );
          })}
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={copy.sections.journeys.eyebrow}
          title={copy.sections.journeys.title}
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {beforeAfter.map((entry) => (
            <PanelCard
              key={entry.name}
              eyebrow={entry.name}
              title={`${entry.before.title} to ${entry.now.title}`}
              body={`${copy.sections.journeys.beforePrefix} ${entry.before.company} - ${entry.before.work} ${copy.sections.journeys.nowPrefix} ${entry.now.agency} - ${entry.now.work}`}
            />
          ))}
        </div>
      </section>
      <DividerStars />

      <CTASection {...copy.cta} />
    </>
  );
}

function JoinAlumniPageContent() {
  const totalTracked = alumniDestinations.reduce((sum, entry) => sum + entry.count, 0);
  const copy = ROUTE_CONTENT_PAGE_TEXT.joinAlumni;

  return (
    <>
      <HeroSection
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        stats={[
          {
            value: `${alumniDestinations.length}`,
            label: copy.stats.destinationCategoriesLabel,
          },
          { value: `${totalTracked}`, label: copy.stats.trackedOutcomesLabel },
          { value: copy.stats.networkEstimateValue, label: copy.stats.networkEstimateLabel },
          { value: copy.stats.careerPathsValue, label: copy.stats.careerPathsLabel },
        ]}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={copy.sections.destinations.eyebrow}
          title={copy.sections.destinations.title}
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridThree}`}>
          {alumniDestinations.map((destination) => (
            <PanelCard
              key={destination.company}
              eyebrow={`${destination.count}`}
              title={destination.company}
              body={copy.sections.destinations.destinationBody}
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={copy.sections.stories.eyebrow}
          title={copy.sections.stories.title}
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {profiles.slice(0, 6).map((profile) => (
            <PanelCard
              key={`${profile.initials}-alumni`}
              eyebrow={profile.role}
              title={profile.name}
              body={`${profile.whyJoined} ${profile.shipped}`}
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection {...copy.cta} />
    </>
  );
}

function PageContent({ pageKey }: { pageKey: RouteContentPageKey }) {
  switch (pageKey) {
    case "about":
      return <AboutPageContent />;
    case "about/people":
      return <AboutPeoplePageContent />;
    case "join":
      return <JoinPageContent />;
    case "join/alumni":
      return <JoinAlumniPageContent />;
    case "impact/congress":
      return <ImpactCongressPageContent />;
    case "impact/fafsa":
      return <ImpactDetailPageContent slug="fafsa" />;
    case "impact/va-ai":
      return <ImpactDetailPageContent slug="va-ai" />;
    case "impact/state-visas":
      return <ImpactDetailPageContent slug="state-visas" />;
    case "impact/passport":
      return <ImpactDetailPageContent slug="passport" />;
    default:
      return null;
  }
}

export default function RouteContentPageClient({
  pageKey,
}: RouteContentPageClientProps) {
  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <PageContent pageKey={pageKey} />
    </div>
  );
}
