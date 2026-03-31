"use client";

import styles from "./SectionHeader.module.css";
import Title from "@/components/general/Title";
import type { TitleColor, TitleSize, Alignment } from "@/components/general/Title";
import Eyebrow from "@/components/general/Eyebrow";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useBodyReveal } from "@/hooks/useSplitReveal/presets";
import Subtitle from "../Subtitle";
import CTA, { type ctaProps as CTAProps } from "@/components/buttons/CTA";

type SectionHeaderCTA = CTAProps & {
  alignment?: Alignment;
};

type Props = {
  className?: string;
  eyebrow?: string;
  title: string;
  titleSize?: TitleSize;
  titleAlignment?: Alignment;
  titleColor?: TitleColor;
  titleHighlightColor?: TitleColor;
  titleHighlightSlice?: [number, number];
  titleAs?: "h1" | "h2" | "h3";
  subtitle?: string;
  subtitleSize?: "small" | "medium" | "large";
  subtitleAlignment?: Alignment;
  subTitle?: string;
  subTitleSize?: "small" | "medium" | "large";
  subTitleAlignment?: Alignment;
  linkText?: string;
  linkHref?: string;
  cta?: SectionHeaderCTA | SectionHeaderCTA[];
};

export default function SectionHeader({
  className,
  eyebrow,
  title,
  titleSize: _titleSize = "large",
  titleAlignment = "center",
  titleColor = "primaryLight",
  titleHighlightColor = "primaryColorLight",
  titleHighlightSlice,
  titleAs = "h2",
  subtitle,
  subtitleSize,
  subtitleAlignment,
  subTitle,
  subTitleSize = "medium",
  subTitleAlignment = "center",
  linkText,
  linkHref,
  cta,
}: Props) {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const linkRef = useRef<HTMLParagraphElement | null>(null);
  const resolvedTitleSize: TitleSize = "large";
  const resolvedCtas = cta ? (Array.isArray(cta) ? cta : [cta]) : [];
  const ctaAlignment = resolvedCtas[0]?.alignment ?? titleAlignment;

  const subTitleSizeOpts = {
    small: "body" as const,
    medium: "small" as const,
    large: "medium" as const,
  };

  const alignmentOpts = {
    left: {
      alignSelf: "flex-start",
      textAlign: "left" as const,
    },
    center: {
      alignSelf: "center",
      textAlign: "center" as const,
    },
    right: {
      alignSelf: "flex-end",
      textAlign: "right" as const,
    },
  };

  const resolvedSubtitle = subtitle ?? subTitle;
  const resolvedSubtitleSize = subtitleSize ?? subTitleSize;
  const resolvedSubtitleAlignment = subtitleAlignment ?? subTitleAlignment;

  useBodyReveal(wrapperRef, linkRef, [linkText, linkHref]);

  return (
    <header className={`${styles.wrapper} ${className ? className: ""}`} ref={wrapperRef}>
      {eyebrow ? (
        <div className={styles.eyebrowWrap}>
          <Eyebrow text={eyebrow} alignment={titleAlignment} />
        </div>
      ) : null}

      <Title
        text={title}
        size={resolvedTitleSize}
        alignment={titleAlignment}
        color={titleColor}
        highlightColor={titleHighlightColor}
        highlightSlice={titleHighlightSlice}
        as={titleAs}
        className={styles.title}
      />

      {resolvedSubtitle ? (
        <Subtitle
          text={resolvedSubtitle}
          as="p"
          size="medium"
          // color="primaryLightMuted"
          align={resolvedSubtitleAlignment}
          animation="body"
          className={styles.subTitle}
        />
      ) : null}

      {linkText && linkHref ? (
        <p
          className={styles.linkWrap}
          ref={linkRef}
          style={{
            alignSelf: alignmentOpts[titleAlignment].alignSelf,
            textAlign: alignmentOpts[titleAlignment].textAlign,
          }}
        >
          <Link href={linkHref} className={styles.link}>
            {linkText}
            <ArrowRight size={18} />
          </Link>
        </p>
      ) : null}

      {resolvedCtas.length > 0 ? (
        <div
          className={styles.ctaWrap}
          style={{
            alignSelf: alignmentOpts[ctaAlignment].alignSelf,
          }}
        >
          {resolvedCtas.map((ctaItem, index) => (
            <CTA
              key={`${ctaItem.href}-${ctaItem.text}-${index}`}
              text={ctaItem.text}
              href={ctaItem.href}
              backgroundColor={ctaItem.backgroundColor}
              textColor={ctaItem.textColor}
              ariaLabel={ctaItem.ariaLabel}
              icon={ctaItem.icon}
              className={ctaItem.className}
            />
          ))}
        </div>
      ) : null}
    </header>
  );
}
