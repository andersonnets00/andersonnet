import { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { DisclosureBanner } from "./DisclosureBanner";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={`Last updated: ${updated}`}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <article className="prose prose-invert max-w-none rounded-3xl glass-strong p-8 sm:p-10
          [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground
          [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:my-3
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ul]:space-y-2 [&_ul]:my-3
          [&_strong]:text-foreground">
          {children}
        </article>
        <div className="mt-8">
          <DisclosureBanner />
        </div>
      </section>
    </>
  );
}
