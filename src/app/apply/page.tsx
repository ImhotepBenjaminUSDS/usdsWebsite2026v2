import ApplyPage from "@/features/apply/ApplyPage";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("apply");

export default function Page() {
  return <ApplyPage />;
}
