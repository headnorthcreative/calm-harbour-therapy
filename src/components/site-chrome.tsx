import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", hash: "how-it-works", label: "How it works" },
  { to: "/", hash: "why", label: "Why us" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
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
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" aria-label="Feel Better Therapy home"><img src="/logo.svg" alt="Feel Better Therapy" className="-my-5 h-20 w-auto md:h-28" /></Link>
        <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} {...("hash" in item ? { hash: item.hash } : {})} activeProps={{ className: "text-foreground" }}>{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/" hash="start" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground sm:inline-block">Match with a therapist</Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>
      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
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
              <Link to="/" hash="start" onClick={() => setOpen(false)} className={`${btn} w-full text-center`}>Match with a therapist</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:text-left">
        <span>© 2026 Feel Better Therapy Ireland. All rights reserved.</span>
        <Link to="/services" className="hover:text-foreground">Services</Link>
        <span>In crisis? Call Samaritans free on 116 123, any time.</span>
      </div>
    </footer>
  );
}
