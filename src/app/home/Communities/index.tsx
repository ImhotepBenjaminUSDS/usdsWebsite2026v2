"use client";

import Link from "next/link";
import styles from "./communities.module.css";
import { COMMUNITY_DISCIPLINES } from "@/content/communities";
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
      <div className={styles.header}>Communities We Hire From</div>

      <HoverCursorPreview
        items={previewItems}
        cursorLabel="View"
        renderTriggers={({ getTriggerProps, isActive }) => (
          <div className={styles.body}>
            {communities.map((community, index) => (
              <Link
                key={community}
                href={hrefByCommunity.get(community) ?? "/how-we-work#who-we-hire"}
                className={`${styles.communityLink} ${isActive(index) ? styles.communityLinkActive : ""}`}
                {...getTriggerProps(index)}
              >
                <span>{community}</span>
                <span className={styles.linkMeta}>View details</span>
              </Link>
            ))}
          </div>
        )}
      />
    </div>
  );
}
