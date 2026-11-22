import { useState } from "react";
import { Leaf, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const moods = [
  { face: "😞", label: "Heavy", message: "You don’t have to carry it all on your own." },
  { face: "😕", label: "Struggling", message: "It’s okay to need a little support." },
  { face: "😐", label: "In between", message: "You don’t need to have it all figured out." },
  { face: "🙂", label: "Steadier", message: "There’s room to build on what feels good." },
  { face: "😊", label: "Lighter", message: "Good moments deserve a little space, too." },
] as const;

export function HomeMood() {
  const [mood, setMood] = useState(2);
  const [breathing, setBreathing] = useState(false);
  const current = moods[mood] ?? moods[2];

  return (
    <div className="home-mood rounded-lg border border-border bg-card p-6 sm:p-9">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium">Where you are right now</p>
        <Leaf className="size-5 shrink-0 text-primary" strokeWidth={1.4} aria-hidden="true" />
      </div>
      <div className="mt-8 min-h-28 text-center" aria-live="polite" aria-atomic="true">
        <p className="font-display text-4xl font-light text-primary">{current.label}</p>
        <p className="mx-auto mt-3 max-w-72 text-sm leading-relaxed text-muted-foreground">{current.message}</p>
      </div>
      <input type="range" min={0} max={4} step={1} value={mood} onChange={(e) => setMood(Number(e.target.value))} aria-label="Where you are right now" aria-valuetext={current.label} className="mood-range mt-4 w-full" />
      <div className="mt-5 grid grid-cols-5 gap-1">
        {moods.map(({ face, label }, i) => (
          <Button key={label} variant="ghost" aria-label={label} aria-pressed={i === mood} onClick={() => setMood(i)} className={`h-16 flex-col gap-1 rounded-lg px-0 ${i === mood ? "bg-secondary text-primary" : "text-muted-foreground"}`}>
            <span aria-hidden="true" className={`text-2xl transition-transform motion-reduce:transition-none ${i === mood ? "scale-110" : "opacity-60"}`}>{face}</span>
            <span className="hidden text-xs font-normal sm:block">{label}</span>
          </Button>
        ))}
      </div>
      <p className="mt-7 text-sm leading-relaxed text-muted-foreground">You don’t have to explain it well. We can start with how today feels.</p>
      <div className="mt-6 flex min-h-12 items-center justify-between gap-3 border-t border-border pt-5">
        <Button variant="ghost" size="sm" onClick={() => setBreathing((v) => !v)} aria-pressed={breathing} className="shrink-0 px-0 text-primary hover:bg-transparent">
          {breathing ? <Pause /> : <Leaf />} {breathing ? "Pause" : "A quiet moment"}
        </Button>
        {breathing ? <span className="breathing-cue text-sm text-muted-foreground"><span className="breathing-words" /><span className="breathing-line" /></span> : <span className="text-right text-[11px] text-muted-foreground">Private · Nothing saved</span>}
      </div>
      <p className="mt-4 text-center text-[10px] text-muted-foreground">A starting point, not a diagnosis</p>
    </div>
  );
}