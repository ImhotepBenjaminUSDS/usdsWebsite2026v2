import RouteContentPageClient from "@/features/route-content/RouteContentPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("impactPassport");

export default function ImpactPassportPage() {
  return <RouteContentPageClient pageKey="impact/passport" />;
}
