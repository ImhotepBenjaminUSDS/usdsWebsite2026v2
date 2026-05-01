"use client";

import styles from "./CareerModal.module.css";
import { motion } from "motion/react";
import CTA from "@/components/buttons/CTA";
import {
  CAREERS_PAGE_CONTENT,
  CAREERS_PAGE_UI_TEXT,
  type CareersRole,
} from "@/text/careers";
import Eyebrow from "@/components/general/Eyebrow";

type Props = {
  closePositionModal: () => void;
  roleTitleIdFromTitle: (title: string) => string;
  activeRole: CareersRole;
};

export default function CareerModal({
  closePositionModal,
  roleTitleIdFromTitle,
  activeRole,
}: Props) {
  return (
    <div
      className={styles.roleModalOverlay}
      onClick={closePositionModal}
      role="presentation"
    >
      <motion.section
        className={styles.roleModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={roleTitleIdFromTitle(activeRole.title)}
        onClick={(event) => event.stopPropagation()}
        initial={{
          opacity: 0,
          y: 32,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.28,
          ease: "easeOut",
        }}
      >
        <div className={styles.inner} 
        id="careerRoleModal"
        >
          <div className={styles.roleModalHeader}>
            <div className={styles.roleModalTags}>
              <span className={styles.roleModalTag}>{activeRole.location}</span>
              <span className={styles.roleModalTag}>{activeRole.tour}</span>
            </div>
            <button
              type="button"
              className={styles.roleModalClose}
              onClick={closePositionModal}
              aria-label={`Close ${activeRole.title} position details`}
            >
              Close
            </button>
          </div>

          <div className={styles.roleModalTitleBlock}>
            <Eyebrow text={`Position overview`}/>
            <h2
              id={roleTitleIdFromTitle(activeRole.title)}
              className={styles.roleModalTitle}
            >
              {activeRole.title}
            </h2>
            <p className={styles.roleModalSummary}>{activeRole.summary}</p>
          </div>

          <div className={styles.roleModalHighlights}>
            <article className={styles.roleModalHighlightCard}>
              <h3>Mission</h3>
              <p>{activeRole.details.mission}</p>
            </article>
            <article className={styles.roleModalHighlightCard}>
              <h3>Impact</h3>
              <p>{activeRole.details.impact}</p>
            </article>
          </div>

          <div className={styles.roleModalColumns}>
            <section className={styles.roleModalColumn}>
              <h3>What you will lead</h3>
              <ul className={styles.roleModalList}>
                {activeRole.details.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className={styles.roleModalColumn}>
              <h3>Strong candidate profile</h3>
              <ul className={styles.roleModalList}>
                {activeRole.details.profile.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className={styles.roleModalSkillsSection}>
            <h3>Core skills</h3>
            <ul className={styles.roleModalSkills}>
              {activeRole.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <div className={styles.roleModalActions}>
            <CTA
              text="Apply for this role"
              href={activeRole.applyHref}
              icon="arrowUpRight"
              backgroundColor="var(--primary-color)"
              textColor="var(--primary-light)"
              ariaLabel={`Apply for ${activeRole.title}`}
            />
            <CTA
              text="Return to positions"
              className={styles.roleModalDismiss}
              backgroundColor="transparent"
              textColor="var(--primary-light-subtle)"
              onClick={closePositionModal}
              ariaLabel="Return to positions"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
