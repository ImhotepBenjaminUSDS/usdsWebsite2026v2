import RouteContentPageClient from "@/features/route-content/RouteContentPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("impactStateVisas");

export default function ImpactStateVisasPage() {
  return <RouteContentPageClient pageKey="impact/state-visas" />;
}
