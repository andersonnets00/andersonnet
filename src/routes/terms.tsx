import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Andersonnet" },
      { name: "description", content: "Terms governing your use of Andersonnet's independent informational assistance platform." },
    ],
  }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Terms & Conditions" updated="January 2026">
      <p>
        These Terms & Conditions govern your use of Andersonnet, an independent
        third-party informational assistance platform. By using our website or
        services, you agree to these terms.
      </p>
      <h2>Independent Assistance Role</h2>
      <p>
        <strong>Andersonnet is not an internet service provider, telecom company, or authorized partner of any provider.</strong> We provide independent informational and educational guidance only.
      </p>
      <h2>Service Limitations</h2>
      <ul>
        <li>We do not sell internet, broadband, or cable plans</li>
        <li>We do not guarantee specific outcomes from suggested steps</li>
        <li>Provider billing, contracts, and account access remain solely between you and your provider</li>
      </ul>
      <h2>User Responsibilities</h2>
      <p>You agree to provide accurate information and to use our guidance lawfully and at your own discretion.</p>
      <h2>Transparency Policy</h2>
      <p>We disclose our independent status across this website. If anything appears unclear, please contact us.</p>
      <h2>Liability</h2>
      <p>To the extent permitted by law, Andersonnet is not liable for indirect or consequential damages arising from informational guidance.</p>
      <h2>Changes</h2>
      <p>We may update these terms periodically. Continued use indicates acceptance of revisions.</p>
    </LegalLayout>
  ),
});
