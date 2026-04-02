// Hero.tsx
"use client";

import { useRef } from "react";
import styles from "./hero.module.css";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useBodyReveal } from "@/hooks/useSplitReveal/presets";
import Eyebrow from "@/components/general/Eyebrow";
import Title from "@/components/general/Title";
import { MISSION_HERO_CONTENT } from "@/text/mission";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const messageRef = useRef<HTMLParagraphElement | null>(null);

  useBodyReveal(sectionRef, messageRef, []);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div className={styles.inner}>
        <header className={styles.copy}>
          <Eyebrow text={MISSION_HERO_CONTENT.eyebrow} alignment="center" />

          <Title
            text={MISSION_HERO_CONTENT.title}
            highlightSlice={MISSION_HERO_CONTENT.titleHighlightSlice}
            className={styles.title}
          />

          <p ref={messageRef} className={styles.message}>
            {MISSION_HERO_CONTENT.message}
          </p>
        </header>
      </div>
    </section>
  );
}
