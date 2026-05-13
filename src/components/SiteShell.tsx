import { Outlet } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingSupport } from "./FloatingSupport";

export function SiteShell() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
      <FloatingSupport />
    </div>
  );
}
