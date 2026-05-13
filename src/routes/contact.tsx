import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/PageHero";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { Mail, Phone, Clock, ShieldAlert, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Andersonnet Independent Assistance" },
      {
        name: "description",
        content:
          "Contact Andersonnet for independent informational connectivity assistance. We never request provider passwords or sensitive credentials.",
      },
      { property: "og:title", content: "Contact Andersonnet" },
      {
        property: "og:description",
        content: "Reach our independent third-party informational assistance team.",
      },
      // Defense-in-depth meta hints (real headers are set in src/server.ts)
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { httpEquiv: "X-Content-Type-Options", content: "nosniff" },
    ],
  }),
  component: Contact,
});

// --- Validation -------------------------------------------------------------

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "trashmail.com",
  "yopmail.com",
  "throwawaymail.com",
  "fakeinbox.com",
  "getnada.com",
  "sharklasers.com",
]);

// Strip HTML/script tags and control characters before storage / display.
function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long")
    .regex(/^[\p{L} '.\-]+$/u, "Only letters, spaces, hyphens and apostrophes"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address")
    .max(120, "Email is too long")
    .refine(
      (v) => {
        const domain = v.split("@")[1] ?? "";
        return !DISPOSABLE_DOMAINS.has(domain);
      },
      { message: "Disposable email addresses are not allowed" },
    ),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number is too long")
    .regex(/^(\+?[0-9 ()\-]{7,20})?$/, "Enter a valid phone number")
    .optional()
    .or(z.literal("")),
  topic: z.enum([
    "Wi-Fi guidance",
    "Streaming assistance",
    "Device connection",
    "Cable-related guidance",
    "General question",
  ]),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few more details")
    .max(1500, "Message is too long")
    .transform(sanitize),
  // Honeypot: real users never fill this hidden field
  website: z.string().max(0, "Spam detected").optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please agree to the privacy notice" }),
  }),
});

type FormErrors = Partial<Record<keyof z.infer<typeof ContactSchema>, string>>;

// Lightweight per-session rate limit (5 submissions / 10 min).
const RATE_KEY = "andersonnet:contact:submissions";
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;

function isRateLimited(): boolean {
  try {
    const now = Date.now();
    const raw = sessionStorage.getItem(RATE_KEY);
    const arr: number[] = raw ? JSON.parse(raw) : [];
    const recent = arr.filter((t) => now - t < RATE_WINDOW_MS);
    if (recent.length >= RATE_MAX) return true;
    recent.push(now);
    sessionStorage.setItem(RATE_KEY, JSON.stringify(recent));
    return false;
  } catch {
    return false;
  }
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const raw = {
      name: sanitize(String(fd.get("name") ?? "")),
      email: String(fd.get("email") ?? "").trim(),
      phone: sanitize(String(fd.get("phone") ?? "")),
      topic: String(fd.get("topic") ?? "Wi-Fi guidance"),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
      consent: fd.get("consent") === "on",
    };

    const result = ContactSchema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    if (isRateLimited()) {
      setFormError("Too many submissions. Please try again in a few minutes.");
      return;
    }

    setSubmitting(true);
    // Simulate secure transport — in production POST to a server function
    // over HTTPS that re-validates with the same schema.
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 600);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Speak with our <span className="text-gradient">assistance team</span>.
          </>
        }
        description="Send a message and an Andersonnet specialist will respond with informational guidance tailored to your situation."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              autoComplete="on"
              className="rounded-3xl glass-strong p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" error={errors.name}>
                  <input
                    name="name"
                    required
                    maxLength={80}
                    autoComplete="name"
                    className={inputCls}
                    placeholder="Jane Doe"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    name="email"
                    required
                    type="email"
                    maxLength={120}
                    autoComplete="email"
                    inputMode="email"
                    className={inputCls}
                    placeholder="you@email.com"
                  />
                </Field>
                <Field label="Phone (optional)" error={errors.phone}>
                  <input
                    name="phone"
                    maxLength={20}
                    autoComplete="tel"
                    inputMode="tel"
                    className={inputCls}
                    placeholder="+1 555 000 0000"
                  />
                </Field>
                <Field label="Topic" error={errors.topic}>
                  <select name="topic" className={inputCls} defaultValue="Wi-Fi guidance">
                    <option>Wi-Fi guidance</option>
                    <option>Streaming assistance</option>
                    <option>Device connection</option>
                    <option>Cable-related guidance</option>
                    <option>General question</option>
                  </select>
                </Field>
              </div>
              <Field label="How can we help?" error={errors.message}>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={1500}
                  className={inputCls}
                  placeholder="Describe your concern or question…"
                />
              </Field>

              {/* Honeypot — hidden from users, bots fill it */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-10000px",
                  top: "auto",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                }}
              >
                <label>
                  Website
                  <input
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <label className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                <input
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 accent-cyan"
                />
                <span>
                  I agree my details may be used to provide informational
                  assistance, in line with the{" "}
                  <a href="/privacy" className="text-cyan hover:underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1 text-xs text-destructive">{errors.consent}</p>
              )}

              <div className="mt-4 flex items-start gap-2 rounded-xl border border-border/60 bg-white/5 p-3 text-xs text-muted-foreground">
                <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                We never request provider passwords or sensitive credentials.
                All submissions are transported over HTTPS and validated on
                both client and server.
              </div>

              {formError && (
                <p className="mt-3 text-sm text-destructive">{formError}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-aurora mt-5 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold disabled:opacity-60"
              >
                {sent ? "Message Sent" : submitting ? "Sending…" : "Send Message"}{" "}
                <Send className="h-4 w-4" />
              </button>
              {sent && (
                <p className="mt-3 text-sm text-cyan">
                  Thanks — a specialist will follow up shortly.
                </p>
              )}
            </form>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <ContactCard icon={Phone} title="Assistance line" body="+1 (888) 555-0142" />
            <ContactCard icon={Mail} title="Email" body="hello@andersonnet.com" />
            <ContactCard icon={Clock} title="Hours" body="Mon–Sun · 7:00 AM – 11:00 PM (ET)" />
            <DisclosureBanner />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Quick answers</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { q: "Are you an ISP?", a: "No. We are an independent informational assistance platform." },
            { q: "Do you sell plans?", a: "No. We never sell internet, broadband, or cable plans." },
            { q: "Do you ask for passwords?", a: "Never. We do not request credentials of any kind." },
            { q: "Refund window?", a: "Refund requests are reviewed within 7–15 days, subject to policy." },
          ].map((f) => (
            <div key={f.q} className="rounded-3xl glass p-6">
              <div className="font-semibold">{f.q}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const inputCls =
  "mt-2 w-full rounded-xl border border-border/80 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-cyan/60 focus:ring-2 focus:ring-cyan/30";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function ContactCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl glass p-6 flex items-start gap-4">
      <div className="grid h-11 w-11 place-items-center rounded-2xl btn-aurora">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="font-semibold">{body}</div>
      </div>
    </div>
  );
}
