import RouteContentPageClient from "@/features/route-content/RouteContentPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("impactFafsa");

export default function ImpactFafsaPage() {
  return <RouteContentPageClient pageKey="impact/fafsa" />;
}
