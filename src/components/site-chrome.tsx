import irishIndependentLogo from "@/assets/irish-independent.svg.asset.json";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import iacpLogo from "@/assets/iacp.webp.asset.json";
import psiLogo from "@/assets/psi.avif.asset.json";
import coruLogo from "@/assets/coru.avif.asset.json";
import iahipLogo from "@/assets/iahip.webp.asset.json";

const accreditations = [
  { name: "Irish Association for Counselling and Psychotherapy (IACP)", asset: iacpLogo },
  { name: "The Psychological Society of Ireland (PSI)", asset: psiLogo },
  { name: "CORU — Ireland's health and social care regulator", asset: coruLogo },
  { name: "Irish Association of Humanistic and Integrative Psychotherapy (IAHIP)", asset: iahipLogo },
];

const navItems = [
  { to: "/", hash: "how-it-works", label: "How it works" },
  { to: "/", hash: "why", label: "Why us" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const btn = "inline-block rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition hover:opacity-90";
export const btnGhost = "inline-block rounded-full border border-border bg-card px-7 py-3.5 font-medium transition hover:bg-muted";

export function Eyebrow({ n, children }: { n: string; children: string }) {
  return <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground"><span className="text-primary">{n}</span> · {children}</p>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-primary py-2 text-center text-sm text-primary-foreground">
        In crisis? Call Samaritans anytime on <a className="underline" href="tel:116123">116 123</a> (free)
      </div>
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" aria-label="Feel Better Therapy home"><img src="/logo-trimmed.svg" alt="Feel Better Therapy" className="h-11 w-auto md:h-9" /></Link>
        <nav className="hidden gap-6 text-sm text-muted-foreground lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} {...("hash" in item ? { hash: item.hash } : {})} activeProps={{ className: "text-foreground" }}>{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/get-started" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground sm:inline-block">Match with a therapist</Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>
      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1 text-base">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  {...("hash" in item ? { hash: item.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 hover:bg-muted"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/get-started" onClick={() => setOpen(false)} className={`${btn} w-full text-center`}>Match with a therapist</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <section aria-labelledby="footer-accreditation" className="border-b border-border py-12 md:py-14">
          <h2 id="footer-accreditation" className="text-center text-sm font-medium text-muted-foreground">Fully registered &amp; accredited therapists from</h2>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 items-center gap-x-8 gap-y-7 sm:grid-cols-4 sm:gap-x-10">
            {accreditations.map(({ name, asset }) => (
              <div key={name} className="flex h-20 items-center justify-center md:h-24">
                <img src={asset.url} alt={name} loading="lazy" className="max-h-full w-full max-w-48 object-contain grayscale" />
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-muted-foreground">As featured in</p>
            <img src={irishIndependentLogo.url} alt="Irish Independent" loading="lazy" className="h-7 w-auto md:h-8" />
          </div>
        </section>
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          <div className="text-center md:text-left">
            <Link to="/" aria-label="Feel Better Therapy home" className="inline-block">
              <img src="/logo-trimmed.svg" alt="Feel Better Therapy" className="h-9 w-auto" />
            </Link>
            <p className="mx-auto mt-5 max-w-64 text-sm leading-relaxed text-muted-foreground md:mx-0">Online therapy in Ireland,<br />from the comfort of your home.</p>
          </div>
          <nav aria-label="Footer navigation" className="text-center md:text-left">
            <h2 className="mb-5 text-sm font-medium">Feel Better Therapy</h2>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.label}><Link to={item.to} {...("hash" in item ? { hash: item.hash } : {})} className="transition-colors hover:text-primary">{item.label}</Link></li>
              ))}
              <li><Link to="/get-started" className="transition-colors hover:text-primary">Match with a therapist <span aria-hidden="true">↗</span></Link></li>
            </ul>
          </nav>
          <div className="text-center md:text-left">
            <h2 className="mb-5 text-sm font-medium">Support when you need it</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">In crisis? Samaritans are here<br className="hidden md:block" /> any time, day or night.</p>
            <a href="tel:116123" className="mt-3 inline-block font-display text-3xl text-primary underline-offset-4 hover:underline">116 123</a>
            <p className="mt-2 text-xs text-muted-foreground">Free to call · 24 hours a day</p>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs leading-relaxed text-muted-foreground">
          © 2026 Feel Better Therapy Ireland. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
