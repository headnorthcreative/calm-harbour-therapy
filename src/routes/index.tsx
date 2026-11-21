import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ciúin Therapy — Online counselling in Ireland" },
      { name: "description", content: "Talk to accredited Irish therapists from home. Secure video sessions, matched to you within 48 hours." },
      { property: "og:title", content: "Ciúin Therapy — Online counselling in Ireland" },
      { property: "og:description", content: "Accredited Irish therapists, secure video sessions, from home." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  ["Tell us a little", "A short, private questionnaire about what you're going through."],
  ["Meet your match", "We pair you with an IACP or PSI accredited therapist within 48 hours."],
  ["Talk from anywhere", "Secure video, phone or chat sessions — evenings and weekends too."],
];
const areas = ["Anxiety", "Low mood", "Grief", "Relationships", "Stress & burnout", "Trauma", "Self-esteem", "Life transitions"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-2xl">ciúin<span className="text-primary">.</span></span>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#how">How it works</a><a href="#help">What we help with</a><a href="#pricing">Pricing</a>
        </nav>
        <a href="#start" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">Get started</a>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-calm" />
        <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-secondary animate-breathe blur-2xl" />
        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-20 md:pt-32">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">Online therapy · Ireland</p>
          <h1 className="max-w-3xl font-display text-5xl font-light leading-[1.05] md:text-7xl">
            A quiet space to <em className="text-primary">talk things through.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Accredited Irish therapists, from the comfort of home. No waiting lists — just a calm, confidential conversation when you need it.
          </p>
          <div id="start" className="mt-10 flex flex-wrap gap-4">
            <a href="#how" className="rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition hover:opacity-90">Find my therapist</a>
            <a href="#pricing" className="rounded-full border border-border bg-card px-7 py-3.5 font-medium transition hover:bg-muted">Free 15‑min call</a>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted-foreground">
            <span>✓ IACP & PSI accredited</span><span>✓ GDPR‑secure sessions</span><span>✓ Insurance receipts</span>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-4xl font-light">How it works</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <div key={t} className="rounded-3xl border border-border bg-card p-8">
              <span className="font-display text-4xl text-accent-foreground/40">0{i + 1}</span>
              <h3 className="mt-6 text-xl font-medium">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="help" className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="max-w-xl font-display text-4xl font-light">Whatever you're carrying, you don't have to carry it alone.</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {areas.map((a) => (
              <span key={a} className="rounded-full bg-card px-5 py-2.5 text-secondary-foreground">{a}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 rounded-[2rem] bg-primary p-10 text-primary-foreground md:grid-cols-2 md:p-16">
          <div>
            <h2 className="font-display text-4xl font-light">Simple, honest pricing</h2>
            <p className="mt-4 opacity-80">50‑minute sessions. No subscription, cancel any time. Reduced rates for students and those on social welfare.</p>
          </div>
          <div className="md:text-right">
            <p className="font-display text-6xl font-light">€65</p>
            <p className="opacity-80">per session</p>
            <a href="#start" className="mt-6 inline-block rounded-full bg-background px-7 py-3.5 font-medium text-foreground">Book a free intro call</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:justify-between">
          <span>© 2026 Ciúin Therapy · Dublin, Ireland</span>
          <span>In crisis? Call Samaritans free on 116 123 or text 50808.</span>
        </div>
      </footer>
    </div>
  );
}
