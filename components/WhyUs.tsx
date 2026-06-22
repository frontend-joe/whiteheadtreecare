import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { features } from "@/lib/site";

export default function WhyUs() {
  return (
    <Section
      id="why-us"
      tone="paper"
      eyebrow="Why choose us"
      title="Reliable from first call to final sweep"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col items-start rounded-card bg-background p-7 ring-1 ring-line">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
