import type { Metadata } from "next";
import { SHARED_METADATA_TEXT, SITE_URL_FALLBACK } from "@/text/metadata";
import { toAbsoluteSiteUrl, withBasePath } from "@/utils/basePath";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || SITE_URL_FALLBACK;

const ROUTE_PAGE_METADATA = {
  about: {
    title: "About",
    canonical: "/about",
    description:
      "Learn how USDS operates, the mission timeline, and the principles that guide delivery teams.",
    keywords: ["USDS about", "USDS mission", "federal digital service"],
  },
  aboutPeople: {
    title: "People",
    canonical: "/about/people",
    description:
      "Read opt-in employee profiles sharing what they have shipped and why they like working at USDS.",
    keywords: ["USDS people", "USDS employee profiles", "USDS team stories"],
  },
  agencies: {
    title: "Agencies",
    canonical: "/agencies",
    description:
      "Browse active and completed USDS agency engagements across healthcare, defense, and benefits systems.",
    keywords: [
      "USDS agencies",
      "federal partnerships",
      "digital modernization",
    ],
  },
  apply: {
    title: "Apply",
    canonical: "/apply",
    description:
      "Application overview for USDS tours of service, including process steps and preparation guidance.",
    keywords: ["apply USDS", "USDS hiring", "federal technology application"],
  },
  contact: {
    title: "Contact",
    canonical: "/contact",
    description:
      "Ways to contact USDS for agency partnerships, media, and careers information.",
    keywords: ["contact USDS", "USDS partnerships", "USDS support"],
  },
  dispatches: {
    title: "Dispatches",
    canonical: "/dispatches",
    description:
      "Latest USDS delivery updates, milestones, field notes, and deployment signals.",
    keywords: ["USDS dispatches", "delivery updates", "federal tech"],
  },
  impact: {
    title: "Impact",
    canonical: "/impact",
    description:
      "Review measurable USDS outcomes, case studies, and active delivery dispatches.",
    keywords: ["USDS impact", "government modernization", "federal outcomes"],
  },
  impactCongress: {
    title: "Impact for Congress",
    canonical: "/impact/congress",
    description:
      "Agency-by-agency impact summary with workforce, cost, and delivery signals for oversight.",
    keywords: [
      "USDS congressional impact",
      "federal delivery metrics",
      "agency outcomes",
    ],
  },
  impactFafsa: {
    title: "FAFSA Modernization",
    canonical: "/impact/fafsa",
    description:
      "Case study on FAFSA modernization, from form redesign to completion gains.",
    keywords: ["FAFSA modernization", "Dept. of Education", "USDS case study"],
  },
  impactPassport: {
    title: "Passport Renewal System",
    canonical: "/impact/passport",
    description:
      "Case study on digital passport renewal and operational cycle-time improvements.",
    keywords: ["passport renewal", "Dept. of State", "USDS case study"],
  },
  impactStateVisas: {
    title: "Visa System Recovery",
    canonical: "/impact/state-visas",
    description:
      "Case study on restoring State Dept. visa throughput and platform stability.",
    keywords: ["visa system", "Dept. of State", "USDS case study"],
  },
  impactVaAi: {
    title: "VA AI Claims Processing",
    canonical: "/impact/va-ai",
    description:
      "Case study on AI-assisted disability claims processing at the Dept. of Veterans Affairs.",
    keywords: ["VA AI", "veterans claims", "USDS case study"],
  },
  join: {
    title: "Join",
    canonical: "/join",
    description:
      "Explore tours of service and role pathways for engineers, designers, and product leaders.",
    keywords: ["USDS join", "USDS careers", "public service tech"],
  },
  joinAlumni: {
    title: "Alumni",
    canonical: "/join/alumni",
    description:
      "See where USDS alumni lead next and how tours of service shape long-term career impact.",
    keywords: ["USDS alumni", "public service alumni", "tour of duty"],
  },
  privacy: {
    title: "Privacy",
    canonical: "/privacy",
    description:
      "USDS privacy principles and handling practices for digital services.",
    keywords: ["USDS privacy", "privacy policy", "government web privacy"],
  },
} as const;

export type RouteMetadataKey = keyof typeof ROUTE_PAGE_METADATA;

export function buildRouteMetadata(routeKey: RouteMetadataKey): Metadata {
  const routeMeta = ROUTE_PAGE_METADATA[routeKey];
  const canonicalPath = withBasePath(routeMeta.canonical);
  const logoPath = withBasePath(SHARED_METADATA_TEXT.logoImagePath);
  const fullTitle = `${routeMeta.title} | U.S. DOGE Service (USDS)`;

  return {
    title: routeMeta.title,
    description: routeMeta.description,
    keywords: [...routeMeta.keywords],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      url: toAbsoluteSiteUrl(routeMeta.canonical, siteUrl),
      title: fullTitle,
      description: routeMeta.description,
      images: [
        {
          url: logoPath,
          alt: SHARED_METADATA_TEXT.logoAlt,
        },
      ],
    },
    twitter: {
      title: fullTitle,
      description: routeMeta.description,
      images: [logoPath],
    },
  };
}
