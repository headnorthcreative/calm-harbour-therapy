import { Link } from "@tanstack/react-router";

export const btn = "inline-block rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition hover:opacity-90";
export const btnGhost = "inline-block rounded-full border border-border bg-card px-7 py-3.5 font-medium transition hover:bg-muted";

export function Eyebrow({ n, children }: { n: string; children: string }) {
  return <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground"><span className="text-primary">{n}</span> · {children}</p>;
}

export function SiteHeader() {
  return (
    <>
      <div className="bg-primary py-2 text-center text-sm text-primary-foreground">
        In crisis? Call Samaritans anytime on <a className="underline" href="tel:116123">116 123</a> (free)
      </div>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" aria-label="Feel Better Therapy home"><img src="/logo.svg" alt="Feel Better Therapy" className="-my-5 h-28 w-auto" /></Link>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" hash="how-it-works">How it works</Link>
          <Link to="/" hash="why">Why us</Link>
          <Link to="/pricing" activeProps={{ className: "text-foreground" }}>Pricing</Link>
        </nav>
        <Link to="/" hash="start" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Match with a therapist</Link>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>© 2026 Feel Better Therapy Ireland. All rights reserved.</span>
        <span>In crisis? Call Samaritans free on 116 123, any time.</span>
      </div>
    </footer>
  );
}
