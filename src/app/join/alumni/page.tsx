import RouteContentPageClient from "@/features/route-content/RouteContentPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("joinAlumni");

export default function JoinAlumniPage() {
  return <RouteContentPageClient pageKey="join/alumni" />;
}
