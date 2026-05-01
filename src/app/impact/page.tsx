import ImpactPageClient from "./ImpactPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("impact");

export default function ImpactPage() {
  return <ImpactPageClient />;
}
