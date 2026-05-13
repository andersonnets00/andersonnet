import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wifi,
  Tv,
  Cable,
  Smartphone,
  Router,
  HelpCircle,
  ArrowRight,
  Check,
  X,
  Sparkles,
  ShieldCheck,
  Headphones,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroNetwork from "@/assets/hero-network.jpg";

import smartHome from "@/assets/smart-home.jpg";
import streaming from "@/assets/streaming.jpg";
import workspace from "@/assets/workspace.jpg";
import family from "@/assets/family.jpg";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { SectionHead } from "@/components/SectionHead";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andersonnet — Independent Internet & Cable Assistance Platform" },
      {
        name: "description",
        content:
          "Receive independent informational guidance on Wi-Fi, streaming, connectivity and cable concerns. Transparent third-party assistance — not an ISP.",
      },
      { property: "og:title", content: "Andersonnet — Independent Connectivity Assistance" },
      { property: "og:description", content: "Transparent third-party Wi-Fi, streaming, and connectivity informational guidance." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <TransparencySection />
      <ServicesGrid />
      <ProcessTimeline />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative -mt-24 overflow-hidden pt-24">
      {/* Layered backdrop */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, oklch(0.68 0.18 295 / 0.35), transparent 60%), radial-gradient(900px 500px at 0% 30%, oklch(0.78 0.16 215 / 0.28), transparent 60%), linear-gradient(180deg, oklch(0.10 0.04 262), oklch(0.08 0.035 260))",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-25"
        style={{
          backgroundImage: `url(${heroNetwork})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "luminosity",
        }}
      />
      <div className="absolute inset-0 -z-10 grid-lines opacity-30" />
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-cyan/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-violet/25 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:pb-28 lg:pt-24">
        {/* Top compliance ribbon */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground animate-fade-in">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/5 px-2.5 py-1 text-cyan">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            Live · Independent platform
          </span>
          <span className="hidden sm:inline">Not an ISP</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Informational guidance only</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">No password requests</span>
        </div>

        {/* Editorial headline */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8 animate-fade-up">
            <h1 className="text-balance font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.25rem]">
              Connectivity,
              <br />
              <span className="relative inline-block">
                <span className="text-gradient">clearly explained</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 320 14"
                  className="absolute -bottom-2 left-0 h-3 w-full text-cyan/60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 80 2, 160 7 T 318 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="text-foreground/70">for the modern home.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Andersonnet is an independent third-party platform offering
              transparent, educational guidance for Wi-Fi, streaming, devices and
              cable-related setup concerns — without ever asking for credentials.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="btn-aurora group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold"
              >
                Get Free Guidance
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
              >
                Explore Services
              </Link>
              <span className="ml-1 inline-flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan" />
                Secured · No credentials collected
              </span>
            </div>
          </div>

          {/* Bento side panel */}
          <div className="lg:col-span-4 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="grid gap-4">
              {/* Live network card */}
              <div className="relative overflow-hidden rounded-3xl glass-strong p-5 ring-glow">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <Wifi className="h-3.5 w-3.5 text-cyan" />
                    Network signal
                  </div>
                  <span className="rounded-full bg-cyan/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan">
                    Stable
                  </span>
                </div>
                <div className="mt-4 flex items-end gap-1.5">
                  {[40, 65, 50, 80, 72, 92, 78, 88, 70, 95, 82, 90].map((h, i) => (
                    <span
                      key={i}
                      className="w-2 rounded-sm bg-gradient-to-t from-cyan/30 to-cyan animate-glow"
                      style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <div className="font-display text-3xl font-bold text-gradient">98%</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Clarity rate
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl font-bold">24/7</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Available
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust mini-card */}
              <div className="rounded-2xl glass p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl btn-aurora">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div className="text-sm">
                    <div className="font-semibold">Privacy-first</div>
                    <div className="text-xs text-muted-foreground">
                      Zero password collection
                    </div>
                  </div>
                </div>
              </div>

              {/* Topic chips */}
              <div className="rounded-2xl glass p-4">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  We help with
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {["Wi-Fi", "Streaming", "Routers", "Smart Home", "Cable Setup"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 bg-white/5 px-2.5 py-1 text-xs text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function ExperienceSection() {
  const items = [
    {
      img: smartHome,
      tag: "Smart Home",
      title: "Connected living, simplified.",
      desc: "Informational guidance for setting up and understanding the modern connected household.",
    },
    {
      img: streaming,
      tag: "Streaming",
      title: "Streaming environments, demystified.",
      desc: "Step-by-step informational support for streaming devices and home entertainment setups.",
    },
    {
      img: workspace,
      tag: "Workspaces",
      title: "Productive remote setups.",
      desc: "Guidance for laptop connectivity, conferencing readiness, and reliable home-office Wi-Fi.",
    },
    {
      img: family,
      tag: "Family Use",
      title: "Connectivity for everyone.",
      desc: "Helpful guidance tailored to multi-device households and shared home networks.",
    },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHead
        eyebrow="Digital Connectivity Experience"
        title={<>Editorial-grade <span className="text-gradient">guidance</span> for every modern environment.</>}
      />
      <div className="mt-16 space-y-24">
        {items.map((item, i) => (
          <div
            key={item.tag}
            className={`grid items-center gap-10 lg:grid-cols-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl glass-strong">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan">{item.tag}</p>
              <h3 className="mt-3 text-3xl font-bold sm:text-4xl">{item.title}</h3>
              <p className="mt-4 text-muted-foreground">{item.desc}</p>
              <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-cyan">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TransparencySection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHead
        eyebrow="Transparency First"
        title={<>Clear about <span className="text-gradient">who we are</span> — and who we are not.</>}
        description="We operate as an independent third-party platform offering informational guidance only. We never represent or sell on behalf of any provider."
      />
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="glass-strong rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan">What We Are</p>
          <h3 className="mt-2 text-2xl font-bold">An independent assistance platform</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Independent informational support provider",
              "Guidance-focused connectivity startup",
              "Transparent third-party assistance team",
              "Educational, non-affiliated platform",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-cyan/15 text-cyan">
                  <Check className="h-3 w-3" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card/40 p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-violet">What We Are Not</p>
          <h3 className="mt-2 text-2xl font-bold">Not a provider, not affiliated</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Not an internet service provider (ISP)",
              "Not an official telecom support center",
              "Not an authorized provider partner",
              "Not a seller of internet or cable plans",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-destructive/15 text-destructive">
                  <X className="h-3 w-3" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <DisclosureBanner />
      </div>
    </section>
  );
}

const services = [
  { icon: Wifi, title: "Internet Guidance Assistance", desc: "Informational guidance regarding general internet concerns and home network understanding." },
  { icon: Router, title: "Wi-Fi Setup Guidance", desc: "Step-by-step educational walkthroughs for configuring and optimizing home Wi-Fi networks." },
  { icon: Tv, title: "Streaming Assistance", desc: "Helpful informational support for streaming device setup and entertainment system guidance." },
  { icon: Smartphone, title: "Device Connection Help", desc: "Guidance for connecting modern devices, smart speakers, and connected home electronics." },
  { icon: Zap, title: "Connectivity Information Support", desc: "Educational information about connectivity-related concerns and general network behavior." },
  { icon: Cable, title: "Cable Assistance Guidance", desc: "Independent informational guidance related to general cable setup and home wiring concerns." },
];

function ServicesGrid() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const ActiveIcon = current.icon;
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHead
        eyebrow="Services / Index"
        title={<>An interactive <span className="text-gradient">assistance</span> directory.</>}
        description="Hover or tap any line to preview the informational guidance available."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-12">
        {/* Editorial index list */}
        <div className="lg:col-span-7">
          <ul className="divide-y divide-border/50 border-y border-border/50">
            {services.map((s, i) => {
              const isActive = i === active;
              const Icon = s.icon;
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group relative grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 py-5 text-left transition-all"
                  >
                    <span
                      className={`font-display text-sm tabular-nums transition-colors ${
                        isActive ? "text-cyan" : "text-muted-foreground"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex items-center gap-3">
                      <span
                        className={`grid h-9 w-9 place-items-center rounded-xl border transition-all duration-300 ${
                          isActive
                            ? "border-cyan/50 bg-cyan/10 text-cyan"
                            : "border-border/60 bg-white/5 text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span
                        className={`font-display text-xl font-semibold tracking-tight transition-all sm:text-2xl ${
                          isActive ? "text-foreground translate-x-1" : "text-foreground/70"
                        }`}
                      >
                        {s.title}
                      </span>
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 transition-all ${
                        isActive ? "text-cyan translate-x-1 opacity-100" : "opacity-40"
                      }`}
                    />
                    {/* Active accent bar */}
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-cyan to-violet transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Featured detail panel */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 overflow-hidden rounded-3xl glass-strong p-8 ring-glow">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-cyan/25 blur-3xl"
            />
            <div key={active} className="relative animate-fade-up">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan">
                  <Sparkles className="h-3 w-3" /> Featured
                </span>
                <span className="font-display text-xs tabular-nums text-muted-foreground">
                  {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-6 grid h-16 w-16 place-items-center rounded-2xl btn-aurora">
                <ActiveIcon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold leading-tight sm:text-3xl">
                {current.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {current.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Informational", "Independent", "No credentials", "24/7"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/60 bg-white/5 px-2.5 py-1 text-[11px] text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to="/services"
                className="btn-aurora mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
              >
                Explore this service <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Reach Out", d: "Connect with our team via the contact form or assistance line." },
  { n: "02", t: "Describe Your Concern", d: "Share what you're experiencing — device, environment, and goals." },
  { n: "03", t: "Receive Guidance", d: "Our specialists provide informational, step-by-step direction." },
  { n: "04", t: "Follow Suggested Steps", d: "Apply the recommended steps and confirm what works for your setup." },
];

function ProcessTimeline() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHead
        eyebrow="Process"
        title={<>An effortless, <span className="text-gradient">four-step</span> assistance flow.</>}
      />
      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent lg:block" />
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative glass-strong rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full btn-aurora text-xs font-bold">
                  {s.n}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden flex-1 lg:block">
                    <div className="h-px bg-gradient-to-r from-cyan/60 to-violet/40" />
                  </div>
                )}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const stats = [
    { k: 12500, suffix: "+", label: "Guidance sessions" },
    { k: 98, suffix: "%", label: "Clarity satisfaction" },
    { k: 24, suffix: "/7", label: "Assistance availability" },
    { k: 0, suffix: "", label: "Password requests, ever" },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="Trust & Support"
            title={<>A customer-first <span className="text-gradient">support philosophy</span>.</>}
            description="Our model is built on transparency, education, and respect for the user. We never collect provider passwords or sensitive credentials."
            align="left"
          />
          <ul className="mt-8 space-y-3 text-sm">
            {[
              { i: ShieldCheck, t: "Privacy-respecting assistance model" },
              { i: Headphones, t: "Friendly, knowledgeable specialists" },
              { i: Sparkles, t: "Clear, jargon-free informational guidance" },
            ].map((x) => (
              <li key={x.t} className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl glass">
                  <x.i className="h-4 w-4 text-cyan" />
                </span>
                {x.t}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <Counter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ k, suffix, label }: { k: number; suffix: string; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const dur = 1400;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setVal(Math.floor(k * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [k]);
  return (
    <div ref={ref} className="glass-strong rounded-3xl p-8">
      <div className="font-display text-4xl font-bold sm:text-5xl">
        <span className="text-gradient">{val.toLocaleString()}</span>
        <span className="text-foreground">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const faqs = [
  { q: "Are you an internet service provider (ISP)?", a: "No. Andersonnet is an independent third-party informational assistance platform. We do not provide internet, broadband, or telecom services." },
  { q: "Do you sell internet or cable plans?", a: "We do not sell, market, or activate internet, broadband, or cable plans on behalf of any provider." },
  { q: "Do you charge service fees?", a: "Where applicable, fees only cover the informational guidance services rendered, and these are clearly disclosed prior to engagement." },
  { q: "Will my provider still bill me separately?", a: "Yes. Any payments owed to your internet, broadband, or cable provider are separate and remain entirely between you and that provider." },
  { q: "Do you ever request passwords or credentials?", a: "Never. We do not request provider passwords, account PINs, or any sensitive credentials." },
  { q: "Am I eligible for a refund?", a: "Refund requests may be considered within 7–15 days of payment, subject to assistance type and completion status. See our Refund Policy for details." },
];

function FAQSection() {
  return (
    <section className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHead
        eyebrow="FAQ"
        title={<>Answers, with <span className="text-gradient">full transparency</span>.</>}
      />
      <div className="mt-12 space-y-3">
        {faqs.map((f, i) => (
          <FAQItem key={i} {...f} />
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-2xl">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium">{q}</span>
        <span
          className={`grid h-8 w-8 place-items-center rounded-full glass transition-transform ${open ? "rotate-45" : ""}`}
        >
          <HelpCircle className="h-4 w-4 text-cyan" />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-h-0 px-6 pb-5 text-sm text-muted-foreground">{a}</div>
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="relative overflow-hidden rounded-[2rem] p-10 sm:p-16 glass-strong">
        <div className="absolute inset-0 -z-10 aurora-bg opacity-90" />
        <div className="absolute -top-40 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-violet/30 blur-[120px]" />
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan">Ready when you are</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
            Need general <span className="text-gradient">connectivity assistance</span>?
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Reach out and a Andersonnet specialist will respond with informational
            guidance tailored to your environment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-aurora rounded-xl px-6 py-3 text-sm font-semibold">
              Contact Support
            </Link>
            <Link to="/contact" className="rounded-xl border border-border/80 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">
              Request Guidance
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Independent informational assistance only.
          </p>
        </div>
      </div>
    </section>
  );
}
