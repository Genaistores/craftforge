import { HardHat, LineChart, ShieldCheck } from "lucide-react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    step: "STEP 1",
    title: "Welcome! I'm Max, your friendly Discovery Expert.",
    description:
      "Welcome! I'm Max, your Discovery Expert. Tell me about your trade and I'll build your personalized CraftForge Blueprint.",
    icon: HardHat
  },
  {
    step: "STEP 2",
    title: "Max hands you off to Gauge — our sharpest analyst.",
    description:
      "Max hands you off to Gauge — our sharpest analyst. He's pulling real local market data and building your personalized CraftForge Blueprint.",
    icon: LineChart
  },
  {
    step: "STEP 3",
    title: "Gauge hands you off to Atlas — our Optimization Expert.",
    description:
      "Gauge hands you off to Atlas — our Optimization Expert. He'll handle the weekly work so you can stay focused on your craft. You're in good hands.",
    icon: ShieldCheck
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Welcome to Your Frontier Experts — 3 Simple Steps
          </h2>
        </div>
        <div className="max-w-sm text-sm leading-relaxed text-slate-300">
          Your frontier experts handle the business side so you can stay
          focused on your craft.
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 auto-rows-fr gap-9 lg:grid-cols-3 lg:items-stretch">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.step}
              className="group relative flex h-full min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#0F1A2E] text-slate-100 shadow-[0_22px_56px_rgba(2,8,23,0.5)] ring-1 ring-white/[0.07] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_28px_64px_rgba(2,8,23,0.55)]"
            >
              <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] opacity-40 [background-size:22px_22px]" />
              <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_95%_55%_at_50%_-15%,rgba(249,115,22,0.2)_0%,transparent_58%)]" />

              <CardHeader className="relative z-10 flex flex-1 flex-col space-y-0 px-8 pb-8 pt-7 sm:px-9 sm:pb-9 sm:pt-8">
                {/* Icon badge — top-right, deliberately small and subtle */}
                <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-[#0B1224]">
                  <Icon className="h-[15px] w-[15px] text-craftOrange/60" aria-hidden="true" />
                </div>

                {/* Step label */}
                <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em]">
                  <span className="h-px w-10 shrink-0 bg-craftOrange" aria-hidden="true" />
                  <span className="text-slate-100">{s.step}</span>
                </div>

                {/* Text — pr clears the icon badge */}
                <div className="flex flex-1 flex-col space-y-5 pr-6">
                  <CardTitle className="text-balance text-lg font-semibold leading-snug tracking-tight text-slate-50 sm:text-xl">
                    {s.title}
                  </CardTitle>
                  <p className="text-balance text-[15px] leading-[1.75] text-slate-300">
                    {s.description}
                  </p>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
