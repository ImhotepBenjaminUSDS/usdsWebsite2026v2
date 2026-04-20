import LegacyPage, {
  generateMetadata as generateLegacyMetadata,
} from "@/features/legacy-pages/LegacyPage";

function getLegacyParams() {
  return Promise.resolve({ legacy: ["apply"] });
}

export async function generateMetadata() {
  return generateLegacyMetadata({ params: getLegacyParams() });
}

export default function Page() {
  return <LegacyPage params={getLegacyParams()} />;
}
