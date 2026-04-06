import styles from "./projects.module.css";
import SectionHeader from "@/components/general/SectionHeader";
import DividerStars from "@/ui/DividerStars";
import CTASection from "@/components/sections/CTASection";
import { PROJECTS_PAGE_CONTENT, PROJECTS_PAGE_UI_TEXT } from "@/text/projects";
import ProjectCard from "@/components/cards/ProjectCard";


export default function ProjectsPage() {
  const { hero, section, projects, cta } = PROJECTS_PAGE_CONTENT;

  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <section className={`sectionFrameBase ${styles.hero}`}>
        <div className={styles.heroLayout}>
          <div className={styles.heroContent}>
            <SectionHeader
              eyebrow={hero.eyebrow}
              title={hero.title}
              isPageTitle
              titleHighlightSlice={[0, 8]}
              subtitle={hero.body}
              cta={[
                {
                  text: hero.primaryCta.text,
                  href: hero.primaryCta.href,
                  backgroundColor: "var(--primary-color)",
                  textColor: "var(--primary-light)",
                },
                {
                  text: hero.secondaryCta.text,
                  href: hero.secondaryCta.href,
                  backgroundColor: "var(--primary-dark-panel-muted)",
                  textColor: "var(--primary-light)",
                },
              ]}
            />
          </div>

          <aside
            className={styles.heroAside}
            aria-label={PROJECTS_PAGE_UI_TEXT.heroAsideAriaLabel}
          >
            <div className={styles.heroVisual} aria-hidden="true" />
            <ul className={styles.statGrid}>
              {hero.stats.map((stat) => (
                <li key={stat.label} className={styles.statCard}>
                  <div className={styles.statCardInner}>
                    <p className={styles.statValue}>{stat.value}</p>
                    <p className={styles.statLabel}>{stat.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.projectsSection}`}>
        <SectionHeader
          className={styles.headerSec}
          eyebrow={section.eyebrow}
          title={section.title}
          titleAlignment="left"
          titleHighlightSlice={[17, 23]}
          subtitle={section.subTitle}
          subtitleAlignment="left"
        />

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project}/>
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection {...cta} />
    </div>
  );
}
