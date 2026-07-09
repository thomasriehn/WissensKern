"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { CtaButton } from "@/components/CtaButton";
import { navigation } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
      <Container className="flex h-18 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-accent-strong ${
                  active ? "text-accent-strong" : "text-ink dark:text-white/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href="/kontakt">Demo anfragen</CtaButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden dark:text-white"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Menü öffnen"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-surface lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-ink hover:bg-surface-alt dark:text-white"
              >
                {item.label}
              </Link>
            ))}
            <CtaButton href="/kontakt" className="mt-3 w-full">
              Demo anfragen
            </CtaButton>
          </Container>
        </div>
      )}
    </header>
  );
}
