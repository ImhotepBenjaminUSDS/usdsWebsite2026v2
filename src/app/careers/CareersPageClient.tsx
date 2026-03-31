"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import styles from "./careers.module.css";
import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import CTA from "@/components/buttons/CTA";
import HorizontalCards from "@/components/general/sections/HorizontalCards";
import {
  CAREERS_PAGE_CONTENT,
  type CareersRole,
} from "@/content/careers";
import Subtitle from "@/components/general/Subtitle";

type RoleCardProps = CareersRole & {
  index: number;
};

function RoleCard({
  title,
  summary,
  skills,
  location,
  tour,
  applyHref,
  index,
}: RoleCardProps) {
  const isFeatured = index === 0;

  return (
    <motion.article
      className={`${styles.roleCard} ${isFeatured ? styles.roleCardFeatured : ""}`}
      layout
      initial={{
        y: 20,
        opacity: 0,
        scale: 0.97,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      exit={{
        y: 20,
        opacity: 0,
        scale: 0.97,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      viewport={{
        amount: 0.2,
      }}
    >
      <div className={styles.roleCardInner}>
        <div className={styles.roleTop}>
          <div className={styles.roleBadges}>
            <span className={styles.roleBadge}>{location}</span>
            {/* <span className={styles.roleBadge}>{tour}</span> */}
          </div>
        </div>
        <span className={styles.roleHeader}>
          <Subtitle text={title} className={styles.roleTitle} />
          <p className={styles.roleSummary}>{summary}</p>

        </span>

        <span className={styles.roleCardBottom}>

          <ul className={styles.skillList}>
            {skills.map((skill) => (
              <li key={skill} className={styles.skillItem}>
                {skill}
              </li>
            ))}
          </ul>

          <Link href={applyHref} className={styles.roleApply}>
            View position
            <ArrowUpRight size={16} />
          </Link>
        </span>
      </div>
    </motion.article>
  );
}

export default function CareersPageClient() {
  const { hero, rolesSection, roles, processSection, process, cta } =
    CAREERS_PAGE_CONTENT;
  const processCardGradients = [
    { x: "20%", y: "80%" },
    { x: "40%", y: "90%" },
    { x: "60%", y: "90%" },
    { x: "80%", y: "80%" },
  ] as const;
  const processCards = process.map((step, index) => ({
    id: `process-step-${index + 1}`,
    title: step.title,
    subtitle: step.timeline,
    body: step.body,
    gradientPosition:
      processCardGradients[index % processCardGradients.length],
  }));

  return (
    <div className={`pageWrapper ${styles.wrapper}`}>
      <div className="pageInnerWrapper">
        <section className={`sectionFrameBase ${styles.hero}`}>
          <div className={styles.heroLayout}>
            <SectionHeader
              className={styles.sectionHeader}
              eyebrow={hero.eyebrow}
              title={hero.title}
              titleAs="h1"
              titleSize="large"
              titleAlignment="center"
              titleColor="primaryLight"
              titleHighlightColor="primaryColorLight"
              titleHighlightSlice={[24, 38]}
              subtitle={hero.subTitle}
              subtitleAlignment="center"
              cta={[
                {
                  text: hero.primaryCta.text,
                  href: hero.primaryCta.href,
                  icon: "arrowRight",
                  backgroundColor: "var(--primary-color)",
                  textColor: "var(--primary-light)",
                },
                {
                  text: hero.secondaryCta.text,
                  href: hero.secondaryCta.href,
                  icon: "arrowRight",
                  backgroundColor: "var(--primary-dark-panel-muted)",
                  textColor: "var(--primary-light)",
                },
              ]}
            />
          </div>
        </section>

        <DividerStars />

        <section className={`sectionFrameBase ${styles.positionsSection}`}>
          <SectionHeader
            eyebrow={rolesSection.eyebrow}
            title={rolesSection.title}
            titleAs="h2"
            titleSize="large"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
            titleHighlightSlice={[0, 14]}
            subtitle={rolesSection.subTitle}
            subtitleAlignment="left"
          />

          <div className={styles.positionsLayout}>
            <div className={styles.roleGrid}>
              {roles.map((role, index) => (
                <RoleCard key={role.title} {...role} index={index} />
              ))}
            </div>

            <aside
              className={styles.positionsAside}
              aria-label="Application details"
            >
              <div className={styles.positionsAsideInner}>
                <span className={styles.asideInnerHeader}>
                  <Subtitle
                    text={"Focused tours. Real outcomes."}
                    size="large"
                    className={styles.asideTitle}
                  />
                  {/* <h3 className={styles.asideTitle}>Focused tours. Real outcomes.</h3> */}
                  <p className={styles.asideBody}>
                    Submit one application and we will evaluate you across
                    tracks where your skills are strongest.
                  </p>
                </span>

                <ul className={styles.asideFacts}>
                  {hero.facts.map((fact) => (
                    <li key={fact.label} className={styles.asideFact}>
                      <span className={styles.asideFactLabel}>
                        {fact.label}
                      </span>
                      <span className={styles.asideFactValue}>
                        {fact.value}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className={styles.asideActions}>
                  <Link
                    href={hero.secondaryCta.href}
                    className={styles.asideLink}
                  >
                    Read hiring FAQ
                    <ArrowUpRight size={16} />
                  </Link>
                  <CTA
                    text={cta.text}
                    href={cta.href}
                    icon="arrowRight"
                    backgroundColor="var(--primary-color)"
                    textColor="var(--primary-light)"
                  />
                </div>
              </div>
            </aside>
          </div>
        </section>

        <DividerStars />

        <section
          className={`sectionFrameBase sectionFrameToneSoft ${styles.processSection}`}
        >
          <SectionHeader
            eyebrow={processSection.eyebrow}
            title={processSection.title}
            titleAs="h2"
            titleSize="large"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
            titleHighlightSlice={[14, 30]}
            subtitle={processSection.subTitle}
            subtitleAlignment="left"
          />

          <HorizontalCards
            className={styles.processGrid}
            cards={processCards}
          />
        </section>
      </div>
    </div>
  );
}
