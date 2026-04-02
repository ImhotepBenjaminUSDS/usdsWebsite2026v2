"use client";

import styles from "./missionPage.module.css";
import Hero from "./Hero";
import InfoPanel from "@/components/general/sections/InfoPanel";
import DividerStars from "@/ui/DividerStars";
import StickyList from "@/components/general/sections/StickyList";
import WhoWeHelp from "./WhoWeHelp";
import OurValues from "./OurValues";
import OriginStory from "./OriginStory";
import { MISSION_PAGE_CONTENT } from "@/text/mission";

export default function MissionPage() {
  const { infoCards, objectives, whoWeHelp, values } = MISSION_PAGE_CONTENT;

  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <Hero />

      <DividerStars />

      <InfoPanel cards={infoCards} />

      <DividerStars />

      <StickyList header={objectives.header} list={objectives.items} />

      <DividerStars />

      <WhoWeHelp cards={whoWeHelp.cards} content={whoWeHelp.content} />

      <DividerStars />

      <OurValues items={values} />

      <DividerStars />

      <OriginStory />
    </div>
  );
}
