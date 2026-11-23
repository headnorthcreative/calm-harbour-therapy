import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Clock3, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ageRanges, initialMatchingValues, matchingOptions, matchingSchema, matchingStepOneSchema, phoneCountries, supportReasons, therapyTypes, type MatchingValues } from "@/lib/therapist-matching";

type Field = keyof MatchingValues;
type Errors = Partial<Record<Field, string>>;

export function TherapistMatchingForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [values, setValues] = useState<MatchingValues>(initialMatchingValues);
  const [errors, setErrors] = useState<Errors>({});
  const heading = useRef<HTMLHeadingElement>(null);

  function update<K extends Field>(key: K, value: MatchingValues[K]) {
    setValues(current => ({ ...current, [key]: value }));
    setErrors(current => ({ ...current, [key]: "" }));
  }
  function changeStep(next: 1 | 2) {
    setStep(next);
    setErrors({});
    requestAnimationFrame(() => heading.current?.focus());
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = (step === 1 ? matchingStepOneSchema : matchingSchema).safeParse(values);
    if (!result.success) {
      const nextErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && key in values) nextErrors[key as Field] = issue.message;
      }
      setErrors(nextErrors);
      requestAnimationFrame(() => document.getElementById(`matching-${Object.keys(nextErrors)[0]}`)?.focus());
      return;
    }
    if (step === 1) changeStep(2);
  }

  function error(field: Field) {
    return errors[field] ? <p id={`matching-${field}-error`} role="alert" className="mt-2 text-sm text-destructive">{errors[field]}</p> : null;
  }
  function textField(field: "firstName" | "lastName" | "email" | "phone", label: string, required = true) {
    return <div key={field}><Label htmlFor={`matching-${field}`} className="mb-2.5 block leading-relaxed">{label}{required && <span className="ml-1 text-destructive" aria-hidden="true">*</span>}</Label>
      <Input id={`matching-${field}`} name={field} type={field === "email" ? "email" : field === "phone" ? "tel" : "text"} autoComplete={field === "firstName" ? "given-name" : field === "lastName" ? "family-name" : field === "phone" ? "tel-national" : "email"} value={values[field]} onChange={event => update(field, event.target.value)} maxLength={field === "email" ? 255 : field === "phone" ? 30 : 100} aria-required={required} aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `matching-${field}-error` : undefined} placeholder={field === "email" ? "you@example.com" : field === "phone" ? "123 456 7890" : undefined} className="h-12 rounded-lg bg-background px-4 text-base md:text-base" />{error(field)}</div>;
  }
  function selectField(field: "therapyType" | "age" | "therapistPreferences" | "country" | "appointmentFlexibility", label: string, options: readonly { value: string; text: string }[], required = true) {
    return <div key={field}><Label htmlFor={`matching-${field}`} className="mb-2.5 block leading-relaxed">{label}{required && <span className="ml-1 text-destructive" aria-hidden="true">*</span>}</Label>
      <Select name={field} value={values[field]} onValueChange={value => { if (options.some(option => option.value === value)) update(field, value); }}>
        <SelectTrigger id={`matching-${field}`} aria-required={required} aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `matching-${field}-error` : undefined} className="h-12 rounded-lg bg-background px-4 text-base"><SelectValue placeholder={field === "therapistPreferences" ? "Select a preference" : "Select an option"} /></SelectTrigger>
        <SelectContent>{options.map(option => <SelectItem key={option.value} value={option.value}>{option.text}</SelectItem>)}</SelectContent>
      </Select>{error(field)}</div>;
  }

  return <div className="home-mood rounded-lg border border-border bg-card p-6 sm:p-9">
    <div className="flex items-center justify-between gap-3 text-sm"><p aria-live="polite" className="text-muted-foreground">Step {step} of 2</p><span className="flex items-center gap-1.5 text-primary"><ShieldCheck className="size-4" aria-hidden="true" />Private & confidential</span></div>
    <div className="mt-4 grid grid-cols-2 gap-3" aria-label={`Step ${step} of 2`} role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={2}><span className="h-1 rounded-full bg-primary" /><span className={`h-1 rounded-full ${step === 2 ? "bg-primary" : "bg-border"}`} /></div>
    <h2 ref={heading} tabIndex={-1} className="mt-7 font-display text-3xl font-light outline-none">{step === 1 ? "A little about you." : "What would help you?"}</h2>
    <form noValidate onSubmit={handleSubmit} className="mt-7 space-y-6">
      {step === 1 ? <>
        <div className="grid gap-6 sm:grid-cols-2">{textField("firstName", "First name")}{textField("lastName", "Last name")}</div>
        {textField("email", "Email address")}
        <div><Label htmlFor="matching-phone" className="mb-2.5 block">Phone number <span className="font-normal text-muted-foreground">(optional)</span></Label><div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-3">
          <Select value={values.phoneCountryCode} onValueChange={value => { if (phoneCountries.some(option => option.value === value)) update("phoneCountryCode", value); }}><SelectTrigger aria-label="Phone country code" className="h-12 bg-background"><SelectValue /></SelectTrigger><SelectContent>{phoneCountries.map(option => <SelectItem key={option.value} value={option.value}>{option.text} ({option.value})</SelectItem>)}</SelectContent></Select>
          <Input id="matching-phone" name="phone" type="tel" autoComplete="tel-national" placeholder="123 456 7890" maxLength={30} value={values.phone} onChange={event => update("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "matching-phone-error" : undefined} className="h-12 bg-background text-base md:text-base" />
        </div>{error("phone")}</div>
        {selectField("therapyType", "What type of therapy are you looking for?", therapyTypes)}
        {selectField("age", "How old are you?", ageRanges.map(value => ({ value, text: value })))}
        <Button type="submit" className="h-auto w-full rounded-full py-4 text-base">Next step <ArrowRight aria-hidden="true" /></Button>
      </> : <>
        <fieldset><legend id="matching-reasons" tabIndex={-1} className="mb-4 text-sm leading-relaxed">Select all the options that apply to you so we can better understand your needs<span className="ml-1 text-destructive" aria-hidden="true">*</span></legend>
          <div className="space-y-3.5">{supportReasons.map((reason, index) => <div key={reason} className="flex items-start gap-3"><Checkbox id={`reason-${index}`} checked={values.reasons.includes(reason)} onCheckedChange={checked => update("reasons", checked === true ? [...values.reasons, reason] : values.reasons.filter(value => value !== reason))} className="mt-0.5 size-5" /><Label htmlFor={`reason-${index}`} className="cursor-pointer font-normal leading-relaxed">{reason}</Label></div>)}</div>{error("reasons")}
        </fieldset>
        {selectField("therapistPreferences", "Have you any specific preferences for your therapist?", matchingOptions.therapistPreferences, false)}
        {selectField("country", "What country are you located in?", matchingOptions.country)}
        {selectField("appointmentFlexibility", "What is your flexibility around possible appointment times?", matchingOptions.appointmentFlexibility)}
        <div className="flex items-start gap-3"><Checkbox id="matching-callback" checked={values.phoneCallback} onCheckedChange={checked => update("phoneCallback", checked === true)} className="mt-0.5 size-5" /><Label htmlFor="matching-callback" className="cursor-pointer font-normal leading-relaxed">If you would like to speak with us by phone, tick here and we'd be happy to arrange it for you.</Label></div>
        <p className="border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">By submitting this form, you agree to our <a href="https://feelbettertherapy.ie/privacy" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">Privacy Policy</a> and <a href="https://feelbettertherapy.ie/terms" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2">Terms & Conditions</a>.</p>
        <p className="flex items-start gap-2 text-sm text-muted-foreground"><Clock3 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />We typically match you with a therapist within 24 hours of receiving your form.</p>
        <div className="grid gap-3 sm:grid-cols-[0.7fr_1.3fr]"><Button type="button" variant="outline" onClick={() => changeStep(1)} className="h-auto rounded-full py-4"><ArrowLeft aria-hidden="true" />Back</Button><Button type="button" disabled aria-describedby="matching-preview-note" className="h-auto whitespace-normal rounded-full py-4">Match with a therapist <ArrowRight aria-hidden="true" /></Button></div>
        <p id="matching-preview-note" className="text-sm leading-relaxed text-muted-foreground">This form is not accepting requests yet. To send a matching request now, please use the <a className="text-primary underline underline-offset-4" href="https://feelbettertherapy.ie/get-started">current Feel Better Therapy form</a>. Your answers here have not been sent.</p>
      </>}
    </form>
  </div>;
}