import { ReactNode } from "react";
import { Container } from "@/components/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-primary py-20 text-white sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
