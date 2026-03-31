"use client";

import SectionHeader from "@/components/general/SectionHeader";
import HorizontalCards from "@/components/general/sections/HorizontalCards";
import styles from "./ourValues.module.css";
import type { BasicTextCard } from "@/types/cards";

type Props = {
  items: readonly BasicTextCard[];
};

export default function OurValues({ items }: Props) {
  return (
    <section className={styles.wrapper} id="ourValues">
      <SectionHeader
        eyebrow="What Guides Us"
        title="Our Values"
        titleAs="h2"
        titleSize="large"
        titleAlignment="left"
        titleColor="primaryLight"
        titleHighlightColor="primaryColorLight"
        titleHighlightSlice={[4, 10]}
        subtitle="Our values shape how we partner, how we build, and how we deliver measurable outcomes for the public."
        subtitleAlignment="left"
        linkText="See how we work"
        linkHref="/how-we-work"
      />

      <HorizontalCards className={styles.grid} cards={items} />
    </section>
  );
}
