import type { CtaSectionContent } from "@/types/cta";

type ImpactHeroStat = {
  label: string;
  value: string;
};

type ImpactSectionHeader = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

type ImpactPageCtaContent = CtaSectionContent;

export const IMPACT_PAGE_CONTENT = {
  hero: {
    eyebrow: "Impact",
    title: "Less Process. More progress.",
    titleHighlightSlice: [14, 27] as [number, number],
    titleLineBreakBefore: "More",
    subtitle:
      "Measurable change across government. Concrete evidence of what happens when top technologists embed in federal agencies. Billions saved, millions served, systems transformed.",
    imageAlt: "Public-service impact delivery teams",
    stats: [
      { label: "Fraud identified", value: "$4B+" },
      { label: "Errors fixed daily", value: "1M" },
      { label: "Agencies", value: "30+" },
      { label: "Technologists", value: "70+" },
    ] as ImpactHeroStat[],
  },
  sections: {
    caseStudies: {
      eyebrow: "Case studies",
      title: "Systems we transformed",
      subtitle:
        "Long-form case studies from the child site, brought into parent-site card, spacing, and color conventions.",
    } satisfies ImpactSectionHeader,
    latestFromField: {
      eyebrow: "Latest from the Field",
      title: "Impact is ongoing",
      tableHeaders: {
        date: "Date",
        update: "Update",
      },
      viewAllDispatchesLabel: "View all dispatches",
    },
  },
  cta: {
    eyebrow: "Continue",
    title: "Explore deeper impact detail",
    body: "Open detailed case-study routes or review the full dispatch archive.",
    primary: {
      text: "Case-study routes",
      href: "/impact/fafsa",
    },
    secondary: {
      text: "Dispatches",
      href: "/dispatches",
    },
  } satisfies ImpactPageCtaContent,
};

export const IMPACT_PAGE_UI_TEXT = {
  dispatchDateLocale: "en-US",
};
