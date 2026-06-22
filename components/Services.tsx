import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="What we do"
      title="Tree care, done properly"
      intro="From a single overgrown branch to a full site clearance, we handle every job with the same care, safety and tidy finish."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal
              key={service.title}
              delay={i * 0.1}
              className="group h-full"
            >
              <article className="flex h-full flex-col rounded-card border border-line bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon size={24} strokeWidth={2} />
                </span>
                <h3 className="font-display text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {service.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
