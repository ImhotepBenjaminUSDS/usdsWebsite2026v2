import DispatchesPageClient from "./DispatchesPageClient";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("dispatches");

export default function DispatchesPage() {
  return <DispatchesPageClient />;
}
