import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import iacpLogo from "@/assets/iacp.webp.asset.json";
import psiLogo from "@/assets/psi.avif.asset.json";
import coruLogo from "@/assets/coru.avif.asset.json";
import iahipLogo from "@/assets/iahip.webp.asset.json";

const logos = [
  { name: "IACP", asset: iacpLogo },
  { name: "The Psychological Society of Ireland", asset: psiLogo },
  { name: "CORU", asset: coruLogo },
  { name: "IAHIP", asset: iahipLogo },
];

export function AccreditationStrip() {
  return <div className="mx-auto max-w-6xl border-b border-border px-6 py-7" aria-label="Therapist accreditation bodies"><div className="mx-auto grid max-w-2xl grid-cols-4 items-center gap-5 sm:gap-12">{logos.map(({ name, asset }) => <img key={name} src={asset.url} alt={name} className="mx-auto h-12 w-full object-contain opacity-65 grayscale sm:h-14" />)}</div></div>;
}

export function MatchLink() {
  return <Button asChild className="h-auto rounded-full px-6 py-3.5"><Link to="/get-started">Match with a therapist <ArrowUpRight aria-hidden="true" /></Link></Button>;
}

export function ClosingInvitation({ title, description }: { title: string; description: string }) {
  return (
    <section id="start" className="home-closing bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
        <p className="mb-5 flex items-center justify-center gap-2 text-sm opacity-80"><Clock3 className="size-4" />A first step, in just two minutes</p>
        <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-lg leading-relaxed opacity-80">{description}</p>
        <Button asChild variant="secondary" className="mt-8 h-auto rounded-full bg-background px-7 py-4 text-foreground hover:bg-secondary"><Link to="/get-started">Match with a therapist <ArrowUpRight aria-hidden="true" /></Link></Button>
        <div className="mx-auto mt-9 grid max-w-2xl gap-5 text-sm opacity-85 sm:grid-cols-3">
          <span><strong className="block font-medium">From €80</strong><span className="mt-1 block text-xs">50-minute sessions</span></span>
          <span><strong className="block font-medium">100% confidential</strong><span className="mt-1 block text-xs">Secure online sessions</span></span>
          <span><strong className="block font-medium">No GP referral</strong><span className="mt-1 block text-xs">Come as you are</span></span>
        </div>
      </div>
    </section>
  );
}