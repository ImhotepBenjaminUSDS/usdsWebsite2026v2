"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useMemo } from "react";
import styles from "./CTA.module.css";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { CtaLink } from "@/types/cta";


type CTABaseProps = {
  text: string;
  href?: string;
  backgroundColor?: string;
  textColor?: string;
  ariaLabel?: string;
  icon?: "arrowUpRight" | "arrowRight" | undefined;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export type CTAProps = CTABaseProps & Partial<CtaLink>;

export type ctaProps = CTAProps;

export default function CTA({
  text,
  href,
  backgroundColor,
  textColor,
  ariaLabel,
  icon,
  className,
  onClick,
  type,
}: CTAProps) {
  const reduceMotion = useReducedMotion();
  const displayText = useMemo(
    () => text.replace(/\b([a-z])/g, (char) => char.toUpperCase()),
    [text],
  );
  const chars = useMemo(() => Array.from(displayText), [displayText]);

  const iconOpts = {
    "arrowUpRight": <ArrowUpRight />,
    "arrowRight": <ArrowRight />,
  };
  const showAffordance = Boolean(icon && iconOpts[icon]);

  const renderChars = (side: "front" | "back") =>
    chars.map((char, index) => (
      <span
        key={`${side}-${index}-${char}`}
        className={styles.char}
        style={{ ["--char-index" as string]: index }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <motion.div
      className={`${styles.wrapper} ${className ?? ""}`}
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
    >
      {href ? (
        <Link
          href={href}
          className={`${styles.link} ${showAffordance ? styles.withAffordance : ""}`}
          aria-label={ariaLabel ?? displayText}
          onClick={onClick}
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
          }}
        >
          {showAffordance ? (
            <span className={styles.leftDot} aria-hidden="true" />
          ) : null}

          <span
            className={`${styles.text} ${reduceMotion ? styles.textReduced : ""}`}
            aria-hidden="true"
          >
            <span className={`${styles.line} ${styles.lineFront}`}>
              {renderChars("front")}
            </span>
            <span className={`${styles.line} ${styles.lineBack}`}>
              {renderChars("back")}
            </span>
          </span>

          {showAffordance ? (
            <span className={styles.rightIcon} aria-hidden="true">
              {iconOpts[icon!]}
            </span>
          ) : null}
        </Link>
      ) : (
        <button
          type={type ?? "button"}
          className={`${styles.link} ${styles.buttonControl} ${showAffordance ? styles.withAffordance : ""}`}
          aria-label={ariaLabel ?? displayText}
          onClick={onClick}
          style={{
            backgroundColor: backgroundColor ?? "transparent",
            color: textColor,
          }}
        >
          {showAffordance ? (
            <span className={styles.leftDot} aria-hidden="true" />
          ) : null}

          <span
            className={`${styles.text} ${reduceMotion ? styles.textReduced : ""}`}
            aria-hidden="true"
          >
            <span className={`${styles.line} ${styles.lineFront}`}>
              {renderChars("front")}
            </span>
            <span className={`${styles.line} ${styles.lineBack}`}>
              {renderChars("back")}
            </span>
          </span>

          {showAffordance ? (
            <span className={styles.rightIcon} aria-hidden="true">
              {iconOpts[icon!]}
            </span>
          ) : null}
        </button>
      )}
    </motion.div>
  );
}
