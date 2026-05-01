import RouteContentPageClient from "@/features/route-content/RouteContentPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("join");

export default function JoinPage() {
  return <RouteContentPageClient pageKey="join" />;
}
