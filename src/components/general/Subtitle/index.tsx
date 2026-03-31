"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";
import { useBodyReveal, useTitleReveal } from "@/hooks/useSplitReveal/presets";
import styles from "./Subtitle.module.css";

export type SubtitleSize = "body" | "small" | "medium" | "large";
export type SubtitleColor =
  | "primaryLight"
  | "primaryLightSubtle"
  | "primaryLightMuted"
  | "primaryColorLight";
export type SubtitleAlign = "left" | "center" | "right";
export type SubtitleTag = "h2" | "h3" | "h4" | "p";
export type AnimationMode = "title" | "body" | "none";

type Props = {
  text: string;
  as?: SubtitleTag;
  size?: SubtitleSize;
  color?: SubtitleColor;
  align?: SubtitleAlign;
  animation?: AnimationMode;
  className?: string;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

const sizeOpts: Record<SubtitleSize, string> = {
  body: "var(--fs-body)",
  small: "var(--fs-h5)",
  medium: "var(--fs-h4)",
  large: "var(--fs-h3)",
};

const colorOpts: Record<SubtitleColor, string> = {
  primaryLight: "var(--primary-light)",
  primaryLightSubtle: "var(--primary-light-subtle)",
  primaryLightMuted: "var(--primary-light-muted)",
  primaryColorLight: "var(--primary-color-light)",
};

export default function Subtitle({
  text,
  as = "h3",
  size = "medium",
  color = "primaryLightSubtle",
  align = "left",
  animation = "title",
  className,
  wrapperClassName,
  wrapperStyle,
}: Props) {
  const scopeRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | HTMLParagraphElement | null>(null);

  useTitleReveal(scopeRef, textRef, [animation], {
    enabled: animation === "title",
  });

  useBodyReveal(scopeRef, textRef, [animation], {
    enabled: animation === "body",
  });

  const Tag = as;
  const classes = `${styles.subtitle} ${animation === "none" ? styles.noAnimation : ""} ${className ?? ""}`.trim();
  const wrapperClasses =
    `${styles.wrapper} ${styles[align]} ${wrapperClassName ?? ""}`.trim();

  return (
    <section ref={scopeRef} className={wrapperClasses} style={wrapperStyle}>
      <Tag
        ref={textRef}
        className={classes}
        style={{
          fontSize: sizeOpts[size],
          color: colorOpts[color],
          textAlign: align,
        }}
      >
        {text}
      </Tag>
    </section>
  );
}
