"use client";

import { useEffect, useState } from "react";
import { Menu, X, TreePine, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-background/60 shadow-[0_8px_30px_-12px_rgba(15,21,17,0.18)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between px-5 transition-[height] duration-300 sm:px-8 ${
          solid ? "h-22 sm:h-26" : "h-16 sm:h-20"
        }`}
      >
        <a
          href="#top"
          className={`flex items-center gap-2 font-display text-lg font-bold tracking-tight ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          <TreePine
            className={solid ? "text-accent" : "text-white"}
            size={24}
            strokeWidth={2}
          />
          <span>Whitehead Tree Care</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                solid ? "text-ink" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark"
          >
            Get a Quote
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${solid ? "text-ink" : "text-white"}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="bg-background/70 backdrop-blur-xl backdrop-saturate-150 md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-paper"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-1 flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-paper"
            >
              <Phone size={18} className="text-accent" /> {site.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-base font-semibold text-white"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
