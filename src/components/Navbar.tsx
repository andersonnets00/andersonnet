import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "border-transparent"
          }`}
        >
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="tel:8885515205"
              className="btn-aurora rounded-xl px-4 py-2 text-sm font-semibold"
            >
              Call (888) 551-5205
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg p-2 hover:bg-white/5"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl glass-strong p-4 md:hidden animate-fade-in">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  activeProps={{ className: "bg-white/5 text-foreground" }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:8885515205"
                onClick={() => setOpen(false)}
                className="btn-aurora mt-2 rounded-xl px-4 py-2 text-center text-sm font-semibold"
              >
                Call (888) 551-5205
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
