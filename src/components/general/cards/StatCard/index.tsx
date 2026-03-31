"use client";

import ImpactCard from "@/components/general/cards/ImpactCard";
import type { IconName } from "@/components/general/cards/ImpactCard";

type StatCardProps = {
  icon: IconName;
  value: string;
  title: string;
  subtitle: string;
};

export default function StatCard({
  icon,
  value,
  title,
  subtitle,
}: StatCardProps) {
  return (
    <ImpactCard
      variant="stat"
      icon={icon}
      value={value}
      title={title}
      // subtitle={subtitle}
    />
  );
}
