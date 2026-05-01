import RouteContentPageClient from "@/features/route-content/RouteContentPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("about");

export default function AboutPage() {
  return <RouteContentPageClient pageKey="about" />;
}
