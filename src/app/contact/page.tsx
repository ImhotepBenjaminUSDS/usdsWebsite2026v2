import ContactPage from "@/features/contact/ContactPage";
import { buildRouteMetadata } from "@/features/route-content/routeMetadata";

export const metadata = buildRouteMetadata("contact");

export default function Page() {
  return <ContactPage />;
}
