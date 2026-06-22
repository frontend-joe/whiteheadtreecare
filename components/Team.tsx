import Image from "next/image";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { team } from "@/lib/site";

export default function Team() {
  return (
    <Section
      id="team"
      tone="paper"
      eyebrow="The crew"
      title="Meet the team"
      intro="Skilled, certified and genuinely good to have on site — the people behind every job."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.1} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-background">
              <div className="relative aspect-4/5 w-full overflow-hidden bg-paper">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-lg font-bold text-ink">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-accent">{member.role}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {member.bio}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
