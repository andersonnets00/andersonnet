import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/andersonnet-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 font-display font-bold ${className}`}
      aria-label="Andersonnet — Independent Connectivity Assistance"
    >
      <span className="relative inline-flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/40 to-violet/40 blur-lg" />
        <img
          src={logoMark}
          alt=""
          width={56}
          height={56}
          className="relative h-12 w-12 object-contain drop-shadow-[0_2px_12px_oklch(0.78_0.16_215/0.5)] sm:h-14 sm:w-14"
        />
      </span>
      <span className="tracking-tight text-xl leading-none sm:text-2xl">
        Anderson<span className="text-gradient">net</span>
      </span>
    </Link>
  );
}
