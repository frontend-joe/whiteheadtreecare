import { TreePine, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./ui/icons";
import { site, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white/70">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a
              href="#top"
              className="flex items-center gap-2 font-display text-lg font-bold text-white"
            >
              <TreePine size={24} className="text-accent" />
              {site.name}
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone size={16} className="text-accent" /> {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail size={16} className="text-accent" /> {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-white"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-white"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {site.foundedYear}–present {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
