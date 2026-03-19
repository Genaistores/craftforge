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

const auditSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address")
});

type AuditFormValues = z.infer<typeof auditSchema>;

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

  const form = useForm<AuditFormValues>({
    resolver: zodResolver(auditSchema),
    defaultValues: { email: defaultEmail ?? "" }
  });

  React.useEffect(() => {
    if (!open) return;
    setStatus("idle");
    form.reset({ email: defaultEmail ?? "" });
  }, [defaultEmail, form, open]);

  async function onSubmit(values: AuditFormValues) {
    setStatus("submitting");

    // Placeholder for production backend/API integration.
    // We intentionally do not call external services from the landing page scaffold.
    await new Promise((r) => setTimeout(r, 750));

    setStatus("submitted");
    form.reset({ email: values.email });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Get My Free Audit</DialogTitle>
          <DialogDescription>
            Tell us where to send the audit playbook. We’ll follow up by email.
          </DialogDescription>
        </DialogHeader>

        {status !== "submitted" ? (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="audit-email">Email</Label>
              <Input
                id="audit-email"
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
                {status === "submitting" ? "Sending..." : "Send My Audit"}
              </Button>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Not now
                </Button>
              </DialogClose>
            </DialogFooter>

            <p className="text-xs text-slate-400">
              By requesting an audit, you agree to receive a single email with
              next steps. No spam.
            </p>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">
                Audit request received. We’ll email your playbook to{" "}
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
              Want faster results? You can run weekly optimizations once we
              have your setup.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

