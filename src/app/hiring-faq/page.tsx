import type { Metadata } from "next";
import ClientHiringFaq from "./ClientHiringFaq";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.usds.gov";

export const metadata: Metadata = {
  title: "Hiring FAQ",
  description:
    "Frequently asked questions about USDS hiring, interviews, onboarding, relocation, and life at the U.S. DOGE Service.",
  keywords: [
    "USDS hiring FAQ",
    "U.S. DOGE Service application process",
    "USDS onboarding",
    "USDS background check",
    "federal tech hiring",
  ],
  alternates: {
    canonical: "/hiring-faq",
  },
  openGraph: {
    url: `${siteUrl}/hiring-faq`,
    title: "Hiring FAQ | U.S. DOGE Service (USDS)",
    description:
      "Learn what to expect in the USDS hiring process, interview stages, timelines, onboarding requirements, and relocation expectations.",
    images: [
      {
        url: "/usds-logo-cropped.svg",
        alt: "U.S. DOGE Service logo",
      },
    ],
  },
  twitter: {
    title: "Hiring FAQ | U.S. DOGE Service (USDS)",
    description:
      "Learn what to expect in the USDS hiring process, interview stages, timelines, onboarding requirements, and relocation expectations.",
    images: ["/usds-logo-cropped.svg"],
  },
};

export default function HiringFaqPage() {
  return <ClientHiringFaq />;
}
