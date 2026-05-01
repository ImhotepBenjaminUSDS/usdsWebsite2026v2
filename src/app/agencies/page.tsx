import AgenciesPageClient from "./AgenciesPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("agencies");

export default function AgenciesPage() {
  return <AgenciesPageClient />;
}
