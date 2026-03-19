import { HandCoins, UploadCloud, WandSparkles } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    step: "Step 1",
    title: "Upload invoices, receipts, vendor quotes",
    description:
      "Drop in what you already run: QuickBooks exports, vendor statements, receipts, and your website/lead flow—no fantasy spreadsheets.",
    icon: UploadCloud
  },
  {
    step: "Step 2",
    title: "Get your Money Left on the Table number",
    description:
      "We quantify the overpaying gap, missed expense codes, and pricing leaks—then hand you a prioritized fix list you can execute on Monday.",
    icon: HandCoins
  },
  {
    step: "Step 3",
    title: "Let the agent run weekly job-site optimizations",
    description:
      "Weekly checklists automatically tighten vendor pricing, clean up expenses, and keep your digital lead flow working—so you stay on the job and get paid.",
    icon: WandSparkles
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-wide text-craftOrange">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Simple inputs. Real leverage.
          </h2>
        </div>
        <div className="max-w-lg text-sm text-slate-300">
          Built for independent tradesmen who don’t have time for guesswork:
          fast inputs, real outputs, and weekly action you can trust.
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.step} className="relative overflow-hidden bg-white/5">
              <div className="pointer-events-none absolute inset-0 opacity-20 z-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:18px_18px]" />
              <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_0%,rgba(249,115,22,0.22)_0%,transparent_58%)]" />

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-base font-semibold text-slate-100">
                      {s.title}
                    </CardTitle>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {s.description}
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-craftOrange/20 bg-[#0B1224] ring-1 ring-craftOrange/10">
                    <Icon className="h-5 w-5 text-craftOrange" aria-hidden="true" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  <span className="h-px w-10 bg-craftOrange/70" aria-hidden="true" />
                  <span>{s.step}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

