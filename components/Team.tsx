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
            <article className="flex h-full flex-col rounded-card border border-line bg-background p-7">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-white">
                  {member.initials}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                {member.bio}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
