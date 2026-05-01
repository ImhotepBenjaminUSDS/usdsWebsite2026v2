import PrivacyPageClient from "./PrivacyPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("privacy");

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
