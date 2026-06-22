import { MapPin, CheckCircle2 } from "lucide-react";
import Reveal from "./ui/Reveal";
import { InstagramIcon } from "./ui/icons";
import { site, serviceAreas } from "@/lib/site";

const points = [
  "Family-run, built on honesty and integrity",
  "Over 20 years of hands-on experience",
  "Covering the Midlands within ~50 miles",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our story
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            A trusted local name since {site.foundedYear}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Whitehead Tree Care was founded by David Whitehead in {site.foundedYear}.
            What started as one climber with a passion for the trade has grown into a
            trusted, family-run business serving Birmingham and the wider Midlands.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We pride ourselves on doing the job right — safely, tidily and with honest
            advice every step of the way. No job is too big or too small.
          </p>

          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-ink">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span className="text-[15px]">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
          >
            <InstagramIcon size={18} />
            Follow our work on Instagram
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-card border border-line bg-paper p-8">
            <div className="flex items-center gap-2 text-ink">
              <MapPin size={20} className="text-accent" />
              <h3 className="font-display text-lg font-bold">Areas we cover</h3>
            </div>
            <p className="mt-2 text-sm text-muted">
              Based in {site.location}, working across the Midlands including:
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-line bg-background px-3.5 py-1.5 text-sm font-medium text-ink"
                >
                  {area}
                </span>
              ))}
              <span className="rounded-full bg-accent-soft px-3.5 py-1.5 text-sm font-medium text-accent">
                & surrounding areas
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
