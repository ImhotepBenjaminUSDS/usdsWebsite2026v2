"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import SectionHeader from "@/components/general/SectionHeader";
import type { Alignment, TitleSize } from "@/components/general/Title";
import CTA, { type CTAProps } from "@/components/buttons/CTA";
import HeroStats, {
  type HeroStat,
  type HeroStatTone,
  type HeroStatsVariant,
} from "@/components/general/HeroStats";
import HorizontalStatsList, {
  type HorizontalStatsLayout,
} from "@/components/general/HorizontalStatsList";
import { withBasePath } from "@/utils/basePath";
import styles from "./PageHero.module.css";

type HeroVariant = "left" | "center" | "image-left-details-right";

type HeroCta = CTAProps & {
  alignment?: Alignment;
};

type PageHeroProps = {
  as?: "section" | "div" | "article";
  className?: string;
  headerClassName?: string;
  statsClassName?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  titleHighlightSlice?: [number, number];
  titleLineBreakBefore?: string;
  cta?: HeroCta | HeroCta[];
  alignment?: Alignment;
  variant?: HeroVariant;
  imageSrc?: string;
  imageAlt?: string;
  compactTitle?: boolean;
  frameStyle?: "framed" | "frameless";
  splitContentLayout?: "default" | "stacked";
  titleSize?: TitleSize;
  showTitleBorder?: boolean;
  titleAlignment?: Alignment;
  subtitleAlignment?: Alignment;
  stats?: HeroStat[];
  statsPlacement?: "bottom" | "content";
  statsStyle?: HeroStatsVariant;
  centeredStatsLayout?: HorizontalStatsLayout;
  ctaPlacement?: "header" | "afterStats";
  topBottomGap?: CSSProperties["gap"];
  style?: CSSProperties;
  layout?: "centered" | "split";
  mediaPosition?: "left" | "right";
};

type HeroFrameProps = PageHeroProps;

export type { HeroFrameProps, PageHeroProps, HeroVariant, HeroCta, HeroStat, HeroStatTone };

function resolveHeroVariant({
  variant,
  layout,
  mediaPosition,
  imageSrc,
}: {
  variant?: HeroVariant;
  layout?: "centered" | "split";
  mediaPosition?: "left" | "right";
  imageSrc?: string;
}): HeroVariant {
  const byLegacyLayout: HeroVariant =
    layout === "centered"
      ? "center"
      : mediaPosition === "left"
        ? "image-left-details-right"
        : "left";
  const requestedVariant = variant ?? byLegacyLayout;

  if (requestedVariant === "center") {
    return requestedVariant;
  }

  return imageSrc ? requestedVariant : "center";
}

function HeroStatsBlock({
  shouldUseHorizontal,
  centeredLayout,
  className,
  statsStyle,
  stats,
}: {
  shouldUseHorizontal: boolean;
  centeredLayout: HorizontalStatsLayout;
  className: string;
  statsStyle: HeroStatsVariant;
  stats: HeroStat[];
}) {
  if (shouldUseHorizontal) {
    return (
      <HorizontalStatsList
        items={stats.map((stat) => ({
          id: stat.id,
          value: stat.value,
          label: stat.label,
          animateValue: stat.animateValue,
        }))}
        layout={centeredLayout}
        className={className}
      />
    );
  }

  return <HeroStats stats={stats} variant={statsStyle} className={className} />;
}

function HeroCtaRow({
  className,
  justifyContent,
  ctas,
}: {
  className: string;
  justifyContent: CSSProperties["justifyContent"];
  ctas: HeroCta[];
}) {
  return (
    <div className={className} style={{ justifyContent }}>
      {ctas.map((ctaItem, index) => (
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
  );
}

export default function PageHero({
  as = "section",
  className,
  headerClassName,
  statsClassName,
  eyebrow,
  title,
  subtitle,
  titleHighlightSlice,
  titleLineBreakBefore,
  cta,
  alignment,
  variant,
  imageSrc,
  imageAlt,
  compactTitle = false,
  frameStyle = "framed",
  splitContentLayout = "default",
  titleSize = "large",
  showTitleBorder = false,
  titleAlignment,
  subtitleAlignment,
  stats = [],
  statsPlacement = "bottom",
  statsStyle = "framed",
  centeredStatsLayout = "auto",
  ctaPlacement = "header",
  topBottomGap,
  style,
  layout,
  mediaPosition = "right",
}: HeroFrameProps) {
  const Tag = as;
  const resolvedImageSrc = imageSrc ? withBasePath(imageSrc) : "";
  const resolvedVariant = resolveHeroVariant({
    variant,
    layout,
    mediaPosition,
    imageSrc: resolvedImageSrc,
  });
  const isSplitLayout = resolvedVariant !== "center";
  const isImageLeft = resolvedVariant === "image-left-details-right";
  const isFrameless = frameStyle === "frameless";
  const isStackedSplitContent = splitContentLayout === "stacked";
  const shouldRenderStats = stats.length > 0;
  const useContentStats = isSplitLayout && statsPlacement === "content";
  const useBottomStats = shouldRenderStats && !useContentStats;
  const resolvedBaseAlignment = alignment ?? (isSplitLayout ? "left" : "center");
  const resolvedTitleAlignment = titleAlignment ?? resolvedBaseAlignment;
  const resolvedSubtitleAlignment = subtitleAlignment ?? resolvedTitleAlignment;
  const resolvedCtas = cta ? (Array.isArray(cta) ? cta : [cta]) : [];
  const hasCtas = resolvedCtas.length > 0;
  const enforceStatsBeforeCtas = isSplitLayout && hasCtas;
  const showCtaInHeader = hasCtas && !enforceStatsBeforeCtas && ctaPlacement === "header";
  const showCtaAfterStats = hasCtas && (enforceStatsBeforeCtas || ctaPlacement === "afterStats");
  const showCtaAfterContent = showCtaAfterStats && !useBottomStats;
  const showCtaAfterBottom = showCtaAfterStats && useBottomStats;
  const ctaAlignment = resolvedCtas[0]?.alignment ?? resolvedTitleAlignment;
  const ctaJustifyContent: CSSProperties["justifyContent"] =
    ctaAlignment === "left"
      ? "flex-start"
      : ctaAlignment === "right"
        ? "flex-end"
        : "center";
  const statsClassNames = [
    useContentStats ? styles.statsGridContent : "",
    useBottomStats ? styles.statsGridBottom : "",
    useBottomStats && !isSplitLayout ? styles.statsGridBottomCentered : "",
    statsClassName ?? "",
  ]
    .filter(Boolean)
    .join(" ");
  const useHorizontalStats = !isSplitLayout;
  const resolvedCenteredStatsLayout: HorizontalStatsLayout =
    !isSplitLayout && centeredStatsLayout === "auto"
      ? "long"
      : centeredStatsLayout;

  return (
    <Tag
      className={`${styles.wrapper} sectionFrameBase pageHeroSection ${
        isSplitLayout ? styles.split : styles.centered
      } ${isImageLeft ? styles.mediaLeft : ""} ${isFrameless ? styles.frameless : ""} ${
        isSplitLayout && isStackedSplitContent ? styles.splitStackedContent : ""
      } ${className ?? ""}`}
      style={{
        ...(topBottomGap ? { gap: topBottomGap } : {}),
        ...style,
      }}
    >
      <div className={`${styles.top} ${styles.topRow}`}>
        <div className={styles.headerColumn}>
          <SectionHeader
            wrapperClassName={`${styles.header} ${
              compactTitle ? styles.headerCompact : ""
            } ${headerClassName ?? ""}`}
            eyebrow={eyebrow}
            title={title}
            titleSize={titleSize}
            titleHighlightSlice={titleHighlightSlice}
            titleLineBreakBefore={titleLineBreakBefore}
            subtitle={subtitle}
            subtitleSize="small"
            titleAlignment={resolvedTitleAlignment}
            subtitleAlignment={resolvedSubtitleAlignment}
            showLeftBorder={showTitleBorder}
            cta={showCtaInHeader ? cta : undefined}
            isPageTitle
          />

          {useContentStats ? (
            <div className={styles.splitContentStatsInline}>
              <HeroStatsBlock
                shouldUseHorizontal={useHorizontalStats}
                centeredLayout={resolvedCenteredStatsLayout}
                className={statsClassNames}
                statsStyle={statsStyle}
                stats={stats}
              />
              {showCtaAfterContent ? (
                <HeroCtaRow
                  className={styles.ctaAfterStats}
                  justifyContent={ctaJustifyContent}
                  ctas={resolvedCtas}
                />
              ) : null}
            </div>
          ) : null}
        </div>

        {isSplitLayout ? (
          <div className={styles.mediaColumn}>
            <div
              className={`${styles.imageFrame} ${
                isFrameless ? styles.imageFrameFrameless : ""
              }`}
            >
              <Image
                src={resolvedImageSrc}
                alt={imageAlt ?? `${title} hero image`}
                className={styles.image}
                fill
              />
            </div>
          </div>
        ) : null}

        {isSplitLayout && useContentStats ? (
          <div className={styles.splitContentAfterMedia}>
            <HeroStatsBlock
              shouldUseHorizontal={useHorizontalStats}
              centeredLayout={resolvedCenteredStatsLayout}
              className={statsClassNames}
              statsStyle={statsStyle}
              stats={stats}
            />
            {showCtaAfterContent ? (
              <HeroCtaRow
                className={styles.ctaAfterStats}
                justifyContent={ctaJustifyContent}
                ctas={resolvedCtas}
              />
            ) : null}
          </div>
        ) : null}
      </div>

      {useBottomStats ? (
        <div className={styles.bottom}>
          <HeroStatsBlock
            shouldUseHorizontal={useHorizontalStats}
            centeredLayout={resolvedCenteredStatsLayout}
            className={statsClassNames}
            statsStyle={statsStyle}
            stats={stats}
          />
          {showCtaAfterBottom ? (
            <HeroCtaRow
              className={styles.ctaAfterStats}
              justifyContent={ctaJustifyContent}
              ctas={resolvedCtas}
            />
          ) : null}
        </div>
      ) : null}
    </Tag>
  );
}

export { PageHero as HeroFrame };
