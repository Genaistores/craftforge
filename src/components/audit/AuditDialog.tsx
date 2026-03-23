"use client";

import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

const TRADE_OPTIONS = [
  "Electrical",
  "Plumbing",
  "HVAC",
  "Landscaping",
  "General Contracting",
  "Painting",
  "Roofing",
  "Masonry / Concrete",
  "Other"
] as const;

const REVENUE_OPTIONS = [
  "Under $10,000",
  "$10,000–$25,000",
  "$25,000–$50,000",
  "$50,000–$100,000",
  "$100,000+"
] as const;

const selectClassName = cn(
  "flex h-12 w-full appearance-none rounded-xl border border-white/15 bg-[#0B1224]/90 px-4 py-2 text-base text-slate-100",
  "shadow-sm transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-craftOrange focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]",
  "disabled:cursor-not-allowed disabled:opacity-50"
);

const profitPotentialSchema = z.object({
  trade: z
    .string()
    .min(1, "Select your trade")
    .refine(
      (v): v is (typeof TRADE_OPTIONS)[number] =>
        (TRADE_OPTIONS as readonly string[]).includes(v),
      { message: "Select your trade" }
    ),
  serviceArea: z.string().min(1, "Add your city or primary service area"),
  monthlyRevenue: z
    .string()
    .min(1, "Select a revenue range")
    .refine(
      (v): v is (typeof REVENUE_OPTIONS)[number] =>
        (REVENUE_OPTIONS as readonly string[]).includes(v),
      { message: "Select a revenue range" }
    ),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address")
});

/** Form state (includes empty selects before user picks an option). */
type ProfitPotentialFormValues = {
  trade: string;
  serviceArea: string;
  monthlyRevenue: string;
  email: string;
};

export function AuditDialog({
  trigger,
  defaultEmail
}: {
  trigger: React.ReactNode;
  defaultEmail?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "submitted"
  >("idle");

  const form = useForm<ProfitPotentialFormValues>({
    resolver: zodResolver(profitPotentialSchema),
    defaultValues: {
      trade: "",
      serviceArea: "",
      monthlyRevenue: "",
      email: defaultEmail ?? ""
    }
  });

  React.useEffect(() => {
    if (!open) return;
    setStatus("idle");
    form.reset({
      trade: "",
      serviceArea: "",
      monthlyRevenue: "",
      email: defaultEmail ?? ""
    });
  }, [defaultEmail, form, open]);

  async function onSubmit(values: ProfitPotentialFormValues) {
    setStatus("submitting");

    // Placeholder for production backend/API integration.
    await new Promise((r) => setTimeout(r, 750));

    setStatus("submitted");
    form.reset(values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-w-md gap-0 border-white/10 bg-[#0F172A] p-0 shadow-2xl sm:max-w-lg">
        <div className="border-b border-white/10 px-6 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
          <DialogHeader className="space-y-3 text-left">
            <DialogTitle className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Get My Free Profit Potential
            </DialogTitle>
            <DialogDescription className="text-[15px] leading-relaxed text-slate-400">
              Tell us a few quick details and we’ll email your personalized
              Untapped Profit Potential report. Takes under 60 seconds. No
              uploads. No spreadsheets.
            </DialogDescription>
          </DialogHeader>
        </div>

        {status !== "submitted" ? (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 px-6 py-8 sm:px-8 sm:py-10"
          >
            <div className="space-y-2">
              <Label
                htmlFor="profit-trade"
                className="text-sm font-medium text-slate-200"
              >
                Trade
              </Label>
              <select
                id="profit-trade"
                className={selectClassName}
                {...form.register("trade")}
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
              {form.formState.errors.trade ? (
                <p
                  className="text-sm text-orange-300"
                  role="alert"
                >
                  {form.formState.errors.trade.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="profit-area"
                className="text-sm font-medium text-slate-200"
              >
                City / Primary Service Area
              </Label>
              <Input
                id="profit-area"
                placeholder="e.g., Austin, TX"
                autoComplete="address-level2"
                className="h-12 rounded-xl border-white/15 bg-[#0B1224]/90 text-base text-slate-100 placeholder:text-slate-500"
                {...form.register("serviceArea")}
                aria-invalid={Boolean(form.formState.errors.serviceArea)}
              />
              {form.formState.errors.serviceArea ? (
                <p
                  className="text-sm text-orange-300"
                  role="alert"
                >
                  {form.formState.errors.serviceArea.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="profit-revenue"
                className="text-sm font-medium text-slate-200"
              >
                Rough Monthly Revenue
              </Label>
              <select
                id="profit-revenue"
                className={selectClassName}
                {...form.register("monthlyRevenue")}
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
              {form.formState.errors.monthlyRevenue ? (
                <p
                  className="text-sm text-orange-300"
                  role="alert"
                >
                  {form.formState.errors.monthlyRevenue.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="profit-email"
                className="text-sm font-medium text-slate-200"
              >
                Email Address
              </Label>
              <Input
                id="profit-email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                inputMode="email"
                className="h-12 rounded-xl border-white/15 bg-[#0B1224]/90 text-base text-slate-100 placeholder:text-slate-500"
                {...form.register("email")}
                aria-invalid={Boolean(form.formState.errors.email)}
                aria-required="true"
              />
              {form.formState.errors.email ? (
                <p
                  className="text-sm text-orange-300"
                  role="alert"
                >
                  {form.formState.errors.email.message}
                </p>
              ) : null}
            </div>

            <DialogFooter className="pt-2 sm:justify-stretch">
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="h-12 w-full rounded-xl text-base font-semibold shadow-lg shadow-craftOrange/15"
              >
                {status === "submitting" ? "Sending…" : "Get My Free Profit Potential"}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="space-y-8 px-6 py-8 sm:px-8 sm:py-10">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 sm:px-6 sm:py-7">
              <p className="text-[15px] leading-relaxed text-slate-200">
                Thanks! Max just received this and he’s already starting to
                build your custom path forward. Gauge will have your
                personalized Untapped Profit Potential report ready for you
                shortly. You’ll see it in your inbox soon — no spam, ever.
              </p>
            </div>

            <DialogFooter className="sm:justify-stretch">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  className="h-12 w-full rounded-xl border-white/15 bg-white/5 text-base hover:bg-white/10"
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
