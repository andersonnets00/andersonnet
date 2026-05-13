import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import workspace from "@/assets/workspace.jpg";
import { ShieldCheck, Compass, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Andersonnet, Independent Connectivity Assistance" },
      { name: "description", content: "Andersonnet is an independent third-party informational assistance startup focused on transparency, education, and modern connectivity guidance." },
      { property: "og:title", content: "About Andersonnet" },
      { property: "og:description", content: "An independent third-party connectivity assistance platform built on transparency." },
    ],
  }),
  component: About,
});

const milestones = [
  { y: "2022", t: "Founded", d: "Andersonnet is founded as an independent assistance startup focused on educational guidance." },
  { y: "2023", t: "Transparency Charter", d: "We formalize a public transparency charter — no provider affiliation, no credential requests." },
  { y: "2024", t: "Specialist Team", d: "Our specialist team expands to cover Wi-Fi, streaming, device, and cable-related guidance." },
  { y: "2025", t: "Modern Platform", d: "We launch a modern assistance experience designed around clarity and trust." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Built on <span className="text-gradient">transparency</span>, designed for trust.</>}
        description="Andersonnet is an independent third-party informational assistance platform. We exist to demystify modern connectivity — without ever pretending to be something we are not."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl glass-strong">
              <img src={workspace} alt="Modern workspace" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <SectionHead align="left" eyebrow="Our Story" title={<>A startup focused on <span className="text-gradient">clear guidance</span>.</>} />
            <p className="mt-6 text-muted-foreground">
              We started Andersonnet after seeing how confusing the modern connectivity
              landscape had become. Households juggle dozens of devices,
              streaming subscriptions, and connectivity choices — yet most
              available "support" exists to upsell rather than explain.
            </p>
            <p className="mt-4 text-muted-foreground">
              Andersonnet exists to provide independent, educational guidance only.
              We do not sell plans, represent providers, or claim affiliation
              with any telecom company.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHead eyebrow="Mission" title={<>Our <span className="text-gradient">operating principles</span>.</>} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: ShieldCheck, t: "Transparency first", d: "Every service we offer is informational. We disclose what we are — and what we are not." },
            { i: Compass, t: "Educational approach", d: "We guide; we don't sell. Knowledge belongs in the hands of the user." },
            { i: Users, t: "Customer-led model", d: "Our specialists exist to listen first, advise second, and never pressure." },
            { i: Sparkles, t: "Modern experience", d: "A premium, calm, well-designed assistance experience — by design." },
          ].map((p) => (
            <div key={p.t} className="rounded-3xl glass p-6">
              <div className="grid h-11 w-11 place-items-center rounded-2xl btn-aurora">
                <p.i className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHead eyebrow="Timeline" title={<>How we got <span className="text-gradient">here</span>.</>} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m) => (
            <div key={m.y} className="rounded-3xl glass-strong p-6">
              <div className="font-display text-3xl font-bold text-gradient">{m.y}</div>
              <div className="mt-2 font-semibold">{m.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { k: "12k+", v: "Guidance sessions" },
            { k: "98%", v: "Satisfaction" },
            { k: "24/7", v: "Availability" },
          ].map((s) => (
            <div key={s.v} className="rounded-3xl glass-strong p-8">
              <div className="font-display text-4xl font-bold text-gradient">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <DisclosureBanner />
        <div className="mt-8 text-center">
          <Link to="/contact" className="btn-aurora rounded-xl px-6 py-3 text-sm font-semibold inline-block">
            Contact Assistance Team
          </Link>
        </div>
      </section>
    </>
  );
}
