"use client";

import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/* ─── Constants ─────────────────────────────────────────────────────────── */

const TRADE_OPTIONS = [
  "Electrician",
  "Plumber",
  "HVAC Technician",
  "General Contractor",
  "Landscaper",
  "Carpenter",
  "Welder",
  "Roofer",
  "Other"
] as const;

const REVENUE_OPTIONS = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "Over $100k"
] as const;

const selectClassName = cn(
  "flex h-12 w-full appearance-none rounded-xl border border-white/15 bg-[#0B1224]/90 px-4 py-2 text-base text-slate-100",
  "shadow-sm transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-craftOrange focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]",
  "disabled:cursor-not-allowed disabled:opacity-50"
);

/* ─── Schema ─────────────────────────────────────────────────────────────── */

const profitPotentialSchema = z
  .object({
    trade: z.string().min(1, "Select your trade"),
    tradeOther: z.string().optional(),
    serviceArea: z.string().min(1, "Add your city or primary service area"),
    monthlyRevenue: z.string().min(1, "Select a revenue range"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Enter a valid email address")
  })
  .superRefine((data, ctx) => {
    if (
      data.trade === "Other" &&
      (!data.tradeOther || data.tradeOther.trim() === "")
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please describe your trade",
        path: ["tradeOther"]
      });
    }
  });

type ProfitPotentialFormValues = {
  trade: string;
  tradeOther?: string;
  serviceArea: string;
  monthlyRevenue: string;
  email: string;
};

/* ─── Component ──────────────────────────────────────────────────────────── */

export function AuditDialog({
  trigger,
  defaultEmail
}: {
  trigger: React.ReactNode;
  defaultEmail?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "submitting">("idle");
  const [showSuccess, setShowSuccess] = React.useState(false);

  const form = useForm<ProfitPotentialFormValues>({
    resolver: zodResolver(profitPotentialSchema),
    defaultValues: {
      trade: "",
      tradeOther: "",
      serviceArea: "",
      monthlyRevenue: "",
      email: defaultEmail ?? ""
    }
  });

  const selectedTrade = form.watch("trade");

  /* Reset form each time the dialog opens */
  React.useEffect(() => {
    if (!open) return;
    setStatus("idle");
    form.reset({
      trade: "",
      tradeOther: "",
      serviceArea: "",
      monthlyRevenue: "",
      email: defaultEmail ?? ""
    });
  }, [defaultEmail, form, open]);

  async function onSubmit(values: ProfitPotentialFormValues) {
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 750));
    console.log("[CraftForge] Intake form submitted:", values);
    setOpen(false);
    setShowSuccess(true);
    form.reset();
    setStatus("idle");
  }

  return (
    <>
      {/* ── Dialog ── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>

        <DialogContent
          className={cn(
            "max-w-md gap-0 border-white/10 bg-[#0F172A] p-0 shadow-2xl sm:max-w-lg",
            "max-h-[90dvh] overflow-y-auto"
          )}
        >
          {/* Close (×) button */}
          <DialogClose
            className={cn(
              "absolute right-4 top-4 z-10 rounded-lg p-1.5 text-slate-400 transition-colors",
              "hover:bg-white/10 hover:text-slate-100",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-craftOrange"
            )}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </DialogClose>

          {/* Header */}
          <div className="border-b border-white/10 px-6 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
            <DialogHeader className="space-y-3 text-left">
              <DialogTitle className="pr-8 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Meet Max — Your Discovery Expert
              </DialogTitle>
              <DialogDescription className="text-[15px] leading-relaxed text-slate-400">
                I love hearing about what you do and how you run your operation.
                Tell me a bit about your trade and I&apos;ll start building your
                custom path forward.
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Form */}
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
            className="space-y-6 px-6 py-8 sm:px-8 sm:py-10"
          >
            {/* 1. Trade */}
            <div className="space-y-2">
              <Label
                htmlFor="profit-trade"
                className="text-sm font-medium text-slate-200"
              >
                Trade{" "}
                <span className="text-craftOrange" aria-hidden="true">
                  *
                </span>
              </Label>
              <select
                id="profit-trade"
                className={selectClassName}
                {...form.register("trade")}
                aria-required="true"
                aria-invalid={Boolean(form.formState.errors.trade)}
              >
                <option value="" disabled>
                  Choose one
                </option>
                {TRADE_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {form.formState.errors.trade && (
                <p className="text-sm text-orange-300" role="alert">
                  {form.formState.errors.trade.message}
                </p>
              )}

              {/* Conditional "Other" text field */}
              {selectedTrade === "Other" && (
                <div className="mt-2 space-y-1">
                  <Input
                    id="profit-trade-other"
                    placeholder="Describe your trade…"
                    className="h-12 rounded-xl border-white/15 bg-[#0B1224]/90 text-base text-slate-100 placeholder:text-slate-500"
                    {...form.register("tradeOther")}
                    aria-required="true"
                    aria-invalid={Boolean(form.formState.errors.tradeOther)}
                    aria-label="Describe your trade"
                  />
                  {form.formState.errors.tradeOther && (
                    <p className="text-sm text-orange-300" role="alert">
                      {form.formState.errors.tradeOther.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* 2. City / Service Area */}
            <div className="space-y-2">
              <Label
                htmlFor="profit-area"
                className="text-sm font-medium text-slate-200"
              >
                City / Service Area{" "}
                <span className="text-craftOrange" aria-hidden="true">
                  *
                </span>
              </Label>
              <Input
                id="profit-area"
                placeholder="e.g. Kansas City, Lawrence, or 50-mile radius around your shop"
                autoComplete="address-level2"
                className="h-12 rounded-xl border-white/15 bg-[#0B1224]/90 text-base text-slate-100 placeholder:text-slate-500"
                {...form.register("serviceArea")}
                aria-required="true"
                aria-invalid={Boolean(form.formState.errors.serviceArea)}
                aria-describedby="profit-area-hint"
              />
              <p id="profit-area-hint" className="text-xs text-slate-500">
                We&apos;ll use this to pull accurate local market data for your area.
              </p>
              {form.formState.errors.serviceArea && (
                <p className="text-sm text-orange-300" role="alert">
                  {form.formState.errors.serviceArea.message}
                </p>
              )}
            </div>

            {/* 3. Rough Monthly Revenue */}
            <div className="space-y-2">
              <Label
                htmlFor="profit-revenue"
                className="text-sm font-medium text-slate-200"
              >
                Rough Monthly Revenue{" "}
                <span className="text-craftOrange" aria-hidden="true">
                  *
                </span>
              </Label>
              <select
                id="profit-revenue"
                className={selectClassName}
                {...form.register("monthlyRevenue")}
                aria-required="true"
                aria-invalid={Boolean(form.formState.errors.monthlyRevenue)}
              >
                <option value="" disabled>
                  Choose a range
                </option>
                {REVENUE_OPTIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {form.formState.errors.monthlyRevenue && (
                <p className="text-sm text-orange-300" role="alert">
                  {form.formState.errors.monthlyRevenue.message}
                </p>
              )}
            </div>

            {/* 4. Email */}
            <div className="space-y-2">
              <Label
                htmlFor="profit-email"
                className="text-sm font-medium text-slate-200"
              >
                Email{" "}
                <span className="text-craftOrange" aria-hidden="true">
                  *
                </span>
              </Label>
              <Input
                id="profit-email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                inputMode="email"
                className="h-12 rounded-xl border-white/15 bg-[#0B1224]/90 text-base text-slate-100 placeholder:text-slate-500"
                {...form.register("email")}
                aria-required="true"
                aria-invalid={Boolean(form.formState.errors.email)}
              />
              {form.formState.errors.email && (
                <p className="text-sm text-orange-300" role="alert">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <DialogFooter className="pt-2 sm:justify-stretch">
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="h-12 w-full rounded-xl text-base font-semibold shadow-lg shadow-craftOrange/15"
              >
                {status === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                      aria-hidden="true"
                    />
                    Sending…
                  </span>
                ) : (
                  "Get My Free Profit Potential"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ── Full-screen success overlay ── */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F172A] px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-heading"
        >
          <div className="mx-auto w-full max-w-lg text-center">
            {/* Checkmark */}
            <div className="mb-8 flex justify-center">
              <CheckCircle2
                className="h-24 w-24 text-craftOrange drop-shadow-[0_0_24px_rgba(249,115,22,0.4)]"
                strokeWidth={1.25}
                aria-hidden="true"
              />
            </div>

            {/* Headline */}
            <h2
              id="success-heading"
              className="mb-5 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl"
            >
              Thanks! Max just received this.
            </h2>

            {/* Body */}
            <p className="mb-4 text-lg leading-relaxed text-slate-300 sm:text-xl">
              He&apos;s already handing everything off to Gauge. You&apos;ll
              receive your personalized Untapped Profit Potential report very
              soon.
            </p>

            {/* Crew line */}
            <p className="mb-10 text-sm font-medium tracking-wide text-slate-400 sm:text-base">
              You&apos;re now part of the CraftForge crew.
            </p>

            {/* CTA */}
            <Button
              size="lg"
              className="h-12 rounded-xl bg-craftOrange px-8 text-base font-semibold text-white shadow-lg shadow-craftOrange/20 hover:bg-craftOrange/90"
              onClick={() => setShowSuccess(false)}
            >
              Back to homepage
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
