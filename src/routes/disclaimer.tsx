import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Andersonnet" },
      { name: "description", content: "Disclaimer regarding Andersonnet's independent third-party informational assistance role." },
    ],
  }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Disclaimer" updated="January 2026">
      <h2>Independent Service Disclosure</h2>
      <p>
        <strong>Andersonnet is an independent third-party informational assistance platform.</strong> We are not affiliated with, authorized by, or endorsed by any internet, broadband, cable, or telecom provider.
      </p>
      <h2>Brand References</h2>
      <p>Any brand, product, or service names referenced on this website are used solely for descriptive purposes. All trademarks belong to their respective owners and no affiliation is implied.</p>
      <h2>Informational Only</h2>
      <p>The information and guidance provided through Andersonnet is for general informational and educational purposes only. We do not guarantee specific outcomes.</p>
      <h2>No Professional Advice</h2>
      <p>Nothing on this website constitutes legal, financial, or technical advice from a licensed authority. Always exercise your own judgment.</p>
    </LegalLayout>
  ),
});
