import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

type QuotePayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: QuotePayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim() || "Not provided";
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL || site.email;
  const from = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";

  // Allow local development without credentials: log instead of sending.
  if (!apiKey) {
    console.warn(
      "[quote] RESEND_API_KEY not set — logging submission instead of emailing.",
      { name, email, phone, message },
    );
    return NextResponse.json({ ok: true, simulated: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${site.name} Website <${from}>`,
      to,
      replyTo: email,
      subject: `New quote request from ${name}`,
      html: `
        <h2>New quote request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("[quote] Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try calling us." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[quote] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
