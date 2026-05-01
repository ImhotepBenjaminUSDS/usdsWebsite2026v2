import RouteContentPageClient from "@/features/route-content/RouteContentPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("impactVaAi");

export default function ImpactVaAiPage() {
  return <RouteContentPageClient pageKey="impact/va-ai" />;
}
