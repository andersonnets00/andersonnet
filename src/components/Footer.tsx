import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Andersonnet is an independent third-party informational assistance
              platform. We are not affiliated with, authorized by, or endorsed
              by any internet, broadband, cable, or telecom provider.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <a href="tel:8885515205" className="flex items-center gap-2 hover:text-cyan transition-colors"><Phone className="h-4 w-4 text-cyan"/> (888) 551-5205</a>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan"/> hello@andersonnet.com</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan"/> 1100 Connectivity Ave, Suite 400</div>
            </div>
          </div>
          <FooterCol
            title="Platform"
            items={[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Legal"
            items={[
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms & Conditions" },
              { to: "/refund", label: "Refund Policy" },
              { to: "/disclaimer", label: "Disclaimer" },
              { to: "/advertisement-disclosure", label: "Ad Disclosure" },
            ]}
          />
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Andersonnet. All rights reserved.</p>
          <p className="max-w-xl">
            Independent informational assistance only. No provider affiliation.
            We never request passwords or sensitive credentials.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-wide text-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="hover:text-foreground transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
