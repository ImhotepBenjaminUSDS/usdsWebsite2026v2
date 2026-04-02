import type { Metadata } from "next";
import ClientHiringFaq from "./ClientHiringFaq";
import {
  ROUTE_METADATA_TEXT,
  SHARED_METADATA_TEXT,
  SITE_URL_FALLBACK,
} from "@/text/metadata";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  SITE_URL_FALLBACK;
const pageMeta = ROUTE_METADATA_TEXT.hiringFaq;

export const metadata: Metadata = {
  title: pageMeta.title,
  description: pageMeta.description,
  keywords: [...pageMeta.keywords],
  alternates: {
    canonical: pageMeta.canonical,
  },
  openGraph: {
    url: `${siteUrl}${pageMeta.canonical}`,
    title: pageMeta.openGraphTitle,
    description: pageMeta.openGraphDescription,
    images: [
      {
        url: SHARED_METADATA_TEXT.logoImagePath,
        alt: SHARED_METADATA_TEXT.logoAlt,
      },
    ],
  },
  twitter: {
    title: pageMeta.twitterTitle,
    description: pageMeta.twitterDescription,
    images: [SHARED_METADATA_TEXT.logoImagePath],
  },
};

export default function HiringFaqPage() {
  return <ClientHiringFaq />;
}
