"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Reveal from "./ui/Reveal";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const contactItems = [
  { icon: Phone, label: site.phone, href: site.phoneHref },
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  {
    icon: MessageCircle,
    label: "Message us on WhatsApp",
    href: site.whatsappHref,
  },
  { icon: MapPin, label: site.location, href: null },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Get in touch
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Request a free, no-obligation quote
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Tell us a little about the job and we'll get back to you quickly. Prefer
            to talk it through? Call, text or WhatsApp us any time.
          </p>

          <ul className="mt-8 space-y-4">
            {contactItems.map(({ icon: Icon, label, href }) => {
              const content = (
                <span className="flex items-center gap-3.5 text-ink">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon size={18} />
                  </span>
                  <span className="text-[15px] font-medium">{label}</span>
                </span>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="transition-opacity hover:opacity-70"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-card border border-line bg-paper p-7 sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 size={48} className="text-accent" />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  Thanks — message sent!
                </h3>
                <p className="mt-2 text-[15px] text-muted">
                  We've received your enquiry and will be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-accent hover:text-accent-dark"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about the trees and the work you need..."
                    className="w-full resize-y rounded-xl border border-line bg-background px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle size={16} /> {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    "Send enquiry"
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-ink"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-background px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
