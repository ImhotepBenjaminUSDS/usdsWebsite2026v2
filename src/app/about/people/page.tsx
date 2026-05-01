import RouteContentPageClient from "@/features/route-content/RouteContentPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("aboutPeople");

export default function AboutPeoplePage() {
  return <RouteContentPageClient pageKey="about/people" />;
}
