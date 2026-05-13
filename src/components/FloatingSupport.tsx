import { Link } from "@tanstack/react-router";
import { LifeBuoy } from "lucide-react";

export function FloatingSupport() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 rounded-full glass-strong px-4 py-3 text-sm font-medium shadow-glow hover:translate-y-[-2px] transition-transform"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full btn-aurora">
        <LifeBuoy className="h-4 w-4" />
        <span className="absolute inset-0 rounded-full animate-ping bg-cyan/40" />
      </span>
      <span className="hidden sm:inline">Need Assistance?</span>
    </Link>
  );
}
