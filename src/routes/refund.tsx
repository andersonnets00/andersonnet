import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Andersonnet" },
      { name: "description", content: "Andersonnet's refund policy for independent informational assistance services." },
    ],
  }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Refund Policy" updated="January 2026">
      <p>
        We aim to deliver clear, helpful informational guidance. If a paid
        assistance engagement does not meet expectations, you may request a
        refund subject to the conditions below.
      </p>
      <h2>Refund Window</h2>
      <p><strong>Refund requests are accepted within 7–15 days from the date of payment.</strong></p>
      <h2>Eligibility</h2>
      <ul>
        <li>Refund eligibility depends on the type of assistance and completion status</li>
        <li>Sessions that have been fully delivered may not be eligible for a full refund</li>
        <li>Refunds for partially delivered guidance are reviewed on a case-by-case basis</li>
      </ul>
      <h2>How to Request</h2>
      <p>Email hello@andersonnet.com with your order details and reason. Refunds, when approved, are processed to the original payment method within a reasonable timeframe.</p>
      <h2>Provider Charges</h2>
      <p>Any payments made to your internet, broadband, or cable provider are not refundable through Andersonnet, as those payments are between you and your provider.</p>
    </LegalLayout>
  ),
});
