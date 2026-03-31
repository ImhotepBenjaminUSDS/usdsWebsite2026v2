"use client";

import ImpactCard from "@/components/general/cards/ImpactCard";
import type { IconName } from "@/components/general/cards/ImpactCard";

type GradientCardProps = {
  icon: IconName;
  tag: string;
  title: string;
  bullets: string[];
  pill?: string;
  variant: "blue" | "teal";
};

export default function GradientCard({
  icon,
  tag,
  title,
  bullets,
  pill,
  variant,
}: GradientCardProps) {
  return (
    <ImpactCard
      variant={variant === "teal" ? "gradientTeal" : "gradientBlue"}
      icon={icon}
      status={pill}
      eyebrow={tag}
      title={title}
      bullets={bullets}
    />
  );
}
