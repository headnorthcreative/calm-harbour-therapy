import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, ShieldCheck } from "lucide-react";
import { SiteHeader, SiteFooter, Eyebrow } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { AccreditationStrip, ClosingInvitation, MatchLink } from "@/components/page-details";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Feel Better Therapy | Online therapy from €80" },
      { name: "description", content: "Simple therapy rates with no hidden fees: €80 individual, €120 couples, bundles from €300. Receipts accepted by VHI, Laya and Irish Life Health." },
      { property: "og:title", content: "Pricing — Know the cost before you start" },
      { property: "og:description", content: "Online therapy from €80 per 50-minute session. Bundles save up to €30." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

const plans: { t: string; d: string; p: string; len: string; save?: [string, string] }[] = [
  { t: "Individual session", d: "A private, one-to-one video session with personalised notes. Book one session at a time, with no subscription.", p: "€80", len: "50 minutes" },
  { t: "Individual bundle", d: "Four 50-minute sessions, valid for six months, with priority scheduling.", p: "€300", len: "4 sessions", save: ["€80 for each session", "Save €20 with the bundle"] },
  { t: "Couples session", d: "A 60-minute joint video session for both partners, with practical relationship tools and room for each person to talk.", p: "€120", len: "60 minutes" },
  { t: "Couples bundle", d: "Four 60-minute joint sessions for consistent support and more time to work through what matters to you both.", p: "€450", len: "4 sessions", save: ["€120 for each session", "Save €30 with the bundle"] },
  { t: "Extended session", d: "An 80-minute individual session for EMDR or other focused therapeutic work, when this format is right for you.", p: "€110", len: "80 minutes" },
];
const faqs = [
  ["Do you accept medical cards?", "Currently, we are a private practice and do not directly accept medical cards. However, we offer competitive rates and bundles to help make therapy more accessible."],
  ["What is your cancellation policy?", "We require 24 hours notice for cancellations. Sessions cancelled with less than 24 hours notice will be charged at the full rate, as we are unable to fill the slot at short notice."],
  ["How do I claim money back from my insurance?", "After payment, you will receive an automated email receipt containing all necessary professional accreditation details. You can upload this directly to your insurer's app (VHI, Laya, Irish Life) to claim your refund according to your plan."],
  ["Are sessions secure and confidential?", "Absolutely. We use end-to-end encrypted video platforms specifically designed for telehealth. Your privacy is our utmost priority, and all notes are stored securely in compliance with GDPR."],
];


function Pricing() {
  return (
    <div className="home-page min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-calm" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-12 pt-10 md:grid-cols-[1.4fr_1fr] md:pt-12">
          <div>
            <p className="mb-5 flex items-center gap-2 text-sm text-primary"><span className="h-px w-8 bg-primary/40" />Feel Better Therapy · Rates</p>
            <h1 className="font-display text-5xl font-light leading-[1.12] lg:text-6xl">Transparent pricing <em className="text-primary">for your mental health.</em></h1>
            <p className="mt-6 max-w-lg text-muted-foreground">Simple, affordable rates with no hidden fees. All sessions include official receipts provided for insurance claims with VHI, Laya, and Irish Life Health.</p>
            <div className="mt-8"><MatchLink /></div>
          </div>
          <div className="home-mood rounded-lg border border-border bg-card p-8">
            <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground"><span>Individual therapy</span><ShieldCheck className="size-5 text-primary" strokeWidth={1.4} /></div>
            <p className="mt-6 font-display text-6xl font-light text-primary">€80</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><Clock3 className="size-4" />50 minutes, just for you</p>
            <div className="mt-6 border-t border-border pt-5 text-center text-sm"><strong className="block font-normal">Receipts accepted by</strong><span className="mt-2 block text-muted-foreground">VHI · Laya · Irish Life Health</span></div>
          </div>
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 border-t border-border px-6 py-8 text-sm text-muted-foreground md:grid-cols-3">
          <span className="block text-center">
            <strong className="block font-normal text-foreground">Therapists registered with</strong>
            <span className="mt-2 block">IACP · PSI · CORU · IAHIP</span>
          </span>
          <span className="block text-center">
            <strong className="block font-normal text-foreground">Receipts accepted by</strong>
            <span className="mt-2 block">VHI · Laya · Irish Life Health</span>
          </span>
          <span className="block text-center">
            <strong className="block font-normal text-foreground">Confidential by design</strong>
            <span className="mt-2 block">secure video, GDPR-compliant notes</span>
          </span>
        </div>
      </section>
      <AccreditationStrip />

      <section className="home-soft-band">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow n="01">Prices</Eyebrow>
          <h2 className="font-display text-4xl font-light">Session prices, in plain language.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Every option includes secure online therapy and a professional receipt after payment. What you can claim back depends on your own insurance plan.</p>
          <div className="mt-10 space-y-4">
            {plans.map((pl, i) => (
              <div key={pl.t} className="home-service grid gap-6 rounded-lg border border-border bg-card p-7 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
                <span className="text-sm text-muted-foreground">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-light">{pl.t}</h3>
                  <p className="mt-2 max-w-xl text-muted-foreground">{pl.d}</p>
                  {pl.save && <p className="mt-3 text-sm text-muted-foreground">One at a time: <strong className="text-foreground">{pl.save[0]}</strong> · <span className="text-primary">{pl.save[1]}</span></p>}
                </div>
                <div className="md:text-right">
                  <p className="font-display text-4xl text-primary">{pl.p}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{pl.len}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Insurance receipt included.</p>
                  <div className="mt-5"><MatchLink /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <Eyebrow n="02">What you are paying for</Eyebrow>
          <h2 className="font-display text-4xl font-light">Fifty minutes that are only about you.</h2>
          <p className="mt-6 text-muted-foreground">A session is fifty minutes with the same accredited therapist, in a private room, working on what you brought. Not an assessment queue, not a triage call, not a chatbot.</p>
          <p className="mt-4 text-muted-foreground">Some weeks that means talking something through. Other weeks it means learning a specific way to handle a feeling, a relationship or a memory. You can say which you need.</p>
          <Button asChild variant="outline" className="mt-8 h-auto rounded-full px-7 py-3.5"><Link to="/" hash="how-it-works">How it works <ArrowRight /></Link></Button>
        </div>
        <figure>
          <img src="/images/panel-when-therapy.webp" alt="Two calm scenes: a stack of papers and drooping plant, then two chairs and healthy plants" className="w-full rounded-[2rem]" />
          <figcaption className="mt-3 text-sm text-muted-foreground">A heavy week, or support for a relationship. Both are ordinary reasons to begin.</figcaption>
        </figure>
      </section>

      <section className="home-soft-band">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <figure className="md:order-first">
            <img src="/images/panel-cost-insurance.webp" alt="A blank receipt, sage envelope and unmarked card arranged on a table with a leafy sprig" className="w-full rounded-[2rem]" />
            <figcaption className="mt-3 text-sm text-muted-foreground">VHI, Laya and Irish Life Health. Cover varies by policy, so check your own plan. <span className="text-xs">Illustrative · Not a real receipt</span></figcaption>
          </figure>
          <div>
            <Eyebrow n="03">Insurance</Eyebrow>
            <h2 className="font-display text-4xl font-light">Your receipt makes claiming straightforward.</h2>
            <p className="mt-6 text-muted-foreground">We are fully recognised by major Irish health insurers: VHI Healthcare, Laya Healthcare and Irish Life Health are all approved. You will receive an automated professional receipt after every session via email, which you can submit directly for your claim.</p>
            <p className="mt-4 text-muted-foreground">You may be able to claim a portion back depending on your plan. We do not promise a figure, because the figure is your policy's, not ours.</p>
            <div className="mt-8"><MatchLink /></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <Eyebrow n="04">Questions</Eyebrow>
        <h2 className="font-display text-4xl font-light">Questions about cost and cover.</h2>
        <p className="mt-4 text-muted-foreground">Short answers to what people ask before paying. If yours is not here, the form takes two minutes.</p>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium">{q}<span className="shrink-0 text-xl text-primary transition group-open:rotate-45" aria-hidden="true">+</span></summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <ClosingInvitation title="Start with one clear step" description="Tell us what you need. We will match you with an accredited therapist, usually within 24 hours." />

      <SiteFooter />
    </div>
  );
}
