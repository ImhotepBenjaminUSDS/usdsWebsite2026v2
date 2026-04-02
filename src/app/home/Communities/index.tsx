"use client";

import Link from "next/link";
import styles from "./communities.module.css";
import {
  COMMUNITY_DISCIPLINES,
} from "@/text/communities";
import { HOME_COMMUNITIES_CONTENT } from "@/text/home";
import HoverCursorPreview from "@/components/general/HoverCursorPreview";

type Props = {
  communities: string[];
};

export default function Communities({ communities }: Props) {
  const hrefByCommunity: Map<string, string> = new Map(
    COMMUNITY_DISCIPLINES.map((community) => [
      community.title,
      `/how-we-work#${community.id}`,
    ]),
  );

  const previewItems = communities.map((community) => ({
    id: community,
    preview: community,
  }));

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{HOME_COMMUNITIES_CONTENT.header}</div>

      <HoverCursorPreview
        items={previewItems}
        cursorLabel={HOME_COMMUNITIES_CONTENT.cursorLabel}
        renderTriggers={({ getTriggerProps, isActive }) => (
          <div className={styles.body}>
            {communities.map((community, index) => (
              <Link
                key={community}
                href={
                  hrefByCommunity.get(community) ??
                  HOME_COMMUNITIES_CONTENT.fallbackHref
                }
                className={`${styles.communityLink} ${isActive(index) ? styles.communityLinkActive : ""}`}
                {...getTriggerProps(index)}
              >
                <span>{community}</span>
                <span className={styles.linkMeta}>
                  {HOME_COMMUNITIES_CONTENT.linkMeta}
                </span>
              </Link>
            ))}
          </div>
        )}
      />
    </div>
  );
}
