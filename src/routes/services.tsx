import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import {
  Wifi,
  Tv,
  Cable,
  Smartphone,
  Router,
  Zap,
  ArrowRight,
} from "lucide-react";
import smartHome from "@/assets/smart-home.jpg";
import streaming from "@/assets/streaming.jpg";
import workspace from "@/assets/workspace.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Andersonnet Independent Connectivity Assistance" },
      { name: "description", content: "Independent informational guidance for Wi-Fi setup, streaming, device connection, and cable concerns. Educational support only." },
      { property: "og:title", content: "Andersonnet Services — Independent Assistance" },
      { property: "og:description", content: "Wi-Fi, streaming, device connection, and cable informational guidance." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Wifi, title: "Internet Guidance Assistance", desc: "Informational guidance for general internet concerns and home network understanding." },
  { icon: Router, title: "Wi-Fi Setup Guidance", desc: "Step-by-step educational walkthroughs for configuring and optimizing home Wi-Fi networks." },
  { icon: Tv, title: "Streaming Assistance", desc: "Helpful informational support for streaming device setup and entertainment system guidance." },
  { icon: Smartphone, title: "Device Connection Help", desc: "Guidance for connecting modern devices, smart speakers, and connected home electronics." },
  { icon: Zap, title: "Connectivity Information Support", desc: "Educational information about connectivity-related concerns and general network behavior." },
  { icon: Cable, title: "Cable Assistance Guidance", desc: "Independent informational guidance related to general cable setup and home wiring concerns." },
];

const detailed = [
  { img: smartHome, title: "Connectivity guidance", body: "We help you understand your home network architecture, signal coverage patterns, device placement and modern connectivity considerations — all communicated in clear, jargon-free language." },
  { img: streaming, title: "Streaming assistance details", body: "From device pairing to platform-specific setup considerations, our team walks you through recommended steps so you can confidently configure your streaming environment." },
  { img: workspace, title: "Device setup guidance", body: "Independent guidance for laptops, phones, tablets, smart speakers and home-office gear — focused on helping you build a calm, reliable workspace." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Modern <span className="text-gradient">assistance</span> for every connected room.</>}
        description="A premium informational guidance experience covering Wi-Fi, streaming, devices, and cable-related concerns. We never sell plans or represent providers."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-aurora rounded-xl px-6 py-3 text-sm font-semibold">Get Assistance</Link>
          <Link to="/contact" className="rounded-xl border border-border/80 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">Speak With Support</Link>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-3xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:ring-glow">
              <div className="grid h-12 w-12 place-items-center rounded-2xl btn-aurora">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                Request Guidance <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHead eyebrow="Inside the experience" title={<>Crafted, <span className="text-gradient">human-led</span> guidance.</>} />
        <div className="mt-14 space-y-20">
          {detailed.map((d, i) => (
            <div key={d.title} className={`grid items-center gap-10 lg:grid-cols-12 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-3xl glass-strong">
                  <img src={d.img} alt={d.title} loading="lazy" width={1280} height={896} className="aspect-[16/10] w-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-3xl font-bold">{d.title}</h3>
                <p className="mt-4 text-muted-foreground">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <DisclosureBanner />
        <div className="mt-10 rounded-3xl glass-strong p-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready for <span className="text-gradient">clarity</span>?</h2>
          <p className="mt-3 text-muted-foreground">Independent informational assistance only.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/contact" className="btn-aurora rounded-xl px-6 py-3 text-sm font-semibold">Contact Assistance Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
