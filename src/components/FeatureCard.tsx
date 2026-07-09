import { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm shadow-black/[0.03]">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-strong/10 text-accent-strong">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}
