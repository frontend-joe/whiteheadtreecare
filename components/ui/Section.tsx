import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "paper";
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 ${
        tone === "paper" ? "bg-paper" : "bg-background"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {(eyebrow || title || intro) && (
          <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            {eyebrow && (
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
