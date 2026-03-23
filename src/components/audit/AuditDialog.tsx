"use client";

import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { useForm } from "react-hook-form";

const profitPotentialSchema = z.object({
  trade: z.string().min(1, "Trade is required"),
  serviceArea: z.string().min(1, "City/area is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address")
});

type ProfitPotentialFormValues = z.infer<typeof profitPotentialSchema>;

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
      email: defaultEmail ?? ""
    }
  });

  React.useEffect(() => {
    if (!open) return;
    setStatus("idle");
    form.reset({
      trade: "",
      serviceArea: "",
      email: defaultEmail ?? ""
    });
  }, [defaultEmail, form, open]);

  async function onSubmit(values: ProfitPotentialFormValues) {
    setStatus("submitting");

    // Placeholder for production backend/API integration.
    // We intentionally do not call external services from the landing page scaffold.
    await new Promise((r) => setTimeout(r, 750));

    setStatus("submitted");
    form.reset(values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Get My Free Profit Potential</DialogTitle>
          <DialogDescription>
            Tell us a few quick details and we’ll email your Untapped Profit
            Potential report. No uploads. No spreadsheets. Takes under 60
            seconds.
          </DialogDescription>
        </DialogHeader>

        {status !== "submitted" ? (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="profit-trade">Trade</Label>
              <Input
                id="profit-trade"
                placeholder="e.g., Plumbing, Electrical, HVAC"
                autoComplete="off"
                {...form.register("trade")}
                aria-invalid={Boolean(form.formState.errors.trade)}
              />
              {form.formState.errors.trade ? (
                <p
                  className={cn(
                    "text-sm text-orange-300",
                    "animate-in fade-in-0 duration-200"
                  )}
                  role="alert"
                >
                  {form.formState.errors.trade.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="profit-area">City / Service Area</Label>
              <Input
                id="profit-area"
                placeholder="e.g., Austin, TX"
                autoComplete="off"
                {...form.register("serviceArea")}
                aria-invalid={Boolean(form.formState.errors.serviceArea)}
              />
              {form.formState.errors.serviceArea ? (
                <p
                  className={cn(
                    "text-sm text-orange-300",
                    "animate-in fade-in-0 duration-200"
                  )}
                  role="alert"
                >
                  {form.formState.errors.serviceArea.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="profit-email">Email</Label>
              <Input
                id="profit-email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                {...form.register("email")}
                aria-invalid={Boolean(form.formState.errors.email)}
              />
              {form.formState.errors.email ? (
                <p
                  className={cn(
                    "text-sm text-orange-300",
                    "animate-in fade-in-0 duration-200"
                  )}
                  role="alert"
                >
                  {form.formState.errors.email.message}
                </p>
              ) : null}
            </div>

            <DialogFooter className="gap-2 sm:gap-2">
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="min-w-[160px]"
              >
                {status === "submitting"
                  ? "Sending..."
                  : "Get My Free Profit Potential"}
              </Button>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Not now
                </Button>
              </DialogClose>
            </DialogFooter>

            <p className="text-xs text-slate-400">
              We’ll send one email with your report. No spam.
            </p>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">
                You’re in. We’ll email your Untapped Profit Potential report to{" "}
                <span className="font-semibold text-slate-100">
                  {form.getValues("email")}
                </span>
                .
              </p>
            </div>

            <DialogFooter className="gap-2 sm:gap-2">
              <DialogClose asChild>
                <Button type="button">Close</Button>
              </DialogClose>
            </DialogFooter>

            <p className="text-xs text-slate-400">
              Your frontier experts do all the thinking so you can stay focused
              on your craft.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

