import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Andersonnet" },
      { name: "description", content: "How Andersonnet collects, uses and protects information for our independent assistance platform." },
    ],
  }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="January 2026">
      <p>
        Andersonnet ("we", "our", "us") respects your privacy. This Privacy Policy
        explains how we collect, use, and protect information when you use our
        independent third-party informational assistance platform.
      </p>
      <h2>Information We Collect</h2>
      <p>We may collect basic contact information you provide voluntarily through forms, including name, email, and message content. We may also collect non-identifying analytics data such as page views and device type.</p>
      <h2>How We Use Information</h2>
      <ul>
        <li>To respond to inquiries and deliver informational guidance</li>
        <li>To improve our website experience and content</li>
        <li>To meet legal and regulatory obligations</li>
      </ul>
      <h2>No Password Collection</h2>
      <p><strong>We never request, collect or store provider account passwords, PINs, or sensitive credentials.</strong></p>
      <h2>Cookies</h2>
      <p>We use minimal cookies for analytics and basic site functionality. You can disable cookies through your browser settings.</p>
      <h2>Security</h2>
      <p>We use reasonable technical and organizational measures to protect the information you share with us.</p>
      <h2>Your Rights</h2>
      <p>You may request access, correction, or deletion of your personal data by contacting us at hello@andersonnet.com.</p>
      <h2>Contact</h2>
      <p>For privacy questions, contact hello@andersonnet.com.</p>
    </LegalLayout>
  ),
});
