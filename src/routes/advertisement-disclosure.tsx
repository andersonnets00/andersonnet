import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/advertisement-disclosure")({
  head: () => ({
    meta: [
      { title: "Advertisement Disclosure — Andersonnet" },
      { name: "description", content: "How Andersonnet discloses advertising practices and marketing intent across its platform." },
    ],
  }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Advertisement Disclosure" updated="January 2026">
      <h2>Advertising Practices</h2>
      <p>Andersonnet may run digital advertising campaigns to inform users about our independent informational assistance services.</p>
      <h2>Marketing Disclosures</h2>
      <p>All advertising for Andersonnet is intended to clearly represent us as an independent third-party assistance platform. We do not advertise as a provider, official support center, or telecom partner.</p>
      <h2>Informational Advertising Intent</h2>
      <p>Our marketing communications focus on the informational and educational nature of our services. We do not make claims of guaranteed outcomes or affiliations we do not have.</p>
      <h2>Independent Operation</h2>
      <p><strong>Andersonnet is not affiliated with, authorized by, or endorsed by any internet, broadband, cable, or telecom provider.</strong></p>
      <h2>Questions</h2>
      <p>If you encounter an advertisement that appears unclear, please email hello@andersonnet.com so we can review it.</p>
    </LegalLayout>
  ),
});
