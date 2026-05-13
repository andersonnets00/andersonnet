import { ShieldAlert } from "lucide-react";

export function DisclosureBanner({ variant = "default" }: { variant?: "default" | "compact" }) {
  if (variant === "compact") {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-glow" />
        Independent third-party assistance — not an ISP.
      </div>
    );
  }
  return (
    <div className="glass rounded-2xl p-4 sm:p-5 flex gap-3 items-start text-sm text-muted-foreground">
      <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
      <p>
        <span className="font-semibold text-foreground">Transparency Notice: </span>
        Andersonnet is an independent third-party service assistance provider. We
        are not affiliated with, authorized by, or endorsed by any internet,
        broadband, cable, or telecom provider.
      </p>
    </div>
  );
}
