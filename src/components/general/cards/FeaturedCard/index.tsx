"use client";

import ImpactCard from "@/components/general/cards/ImpactCard";
import type { IconName } from "@/components/general/cards/ImpactCard";

type FeaturedCardProps = {
  icon?: IconName;
  tag: string;
  title: string;
  bullets: string[];
  pill?: string;
};

export default function FeaturedCard({
  icon,
  tag,
  title,
  bullets,
  pill,
}: FeaturedCardProps) {
  return (
    <ImpactCard
      variant="feature"
      icon={icon}
      status={pill}
      eyebrow={tag}
      title={title}
      bullets={bullets}
      animateWaves
    />
  );
}
