import RouteContentPageClient from "@/features/route-content/RouteContentPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("impactCongress");

export default function ImpactCongressPage() {
  return <RouteContentPageClient pageKey="impact/congress" />;
}
