import { HardHat, LineChart, ShieldCheck } from "lucide-react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    step: "STEP 1",
    title: "Welcome! I'm Max, your friendly Discovery Expert.",
    description:
      "I love hearing about what you do and how you run your operation. Tell me a bit about your trade and I'll start building your custom path forward. You're in good hands from the first word.",
    icon: HardHat
  },
  {
    step: "STEP 2",
    title: "Max hands you off to Gauge — your Analysis Expert.",
    description:
      "I've got all the details from Max and I've crunched the real numbers using actual market data. This is your personalized 'Untapped Profit Potential' report — no fluff, just clear insights and a simple plan you can actually use.",
    icon: LineChart
  },
  {
    step: "STEP 3",
    title: "Gauge hands you off to Atlas — your Optimization Expert.",
    description:
      "I've taken everything Max and Gauge learned and built you the complete plan. Here's exactly which package fits you best and the real savings numbers you can expect. I'll handle the weekly work so you can stay focused on your craft.",
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
        <div className="max-w-xl text-sm leading-relaxed text-slate-300">
          Your frontier experts do all the thinking so you can stay completely
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

              <CardHeader className="relative z-10 flex flex-1 flex-col space-y-0 p-9 pb-9 sm:p-10 sm:pb-10">
                <div className="mb-7 flex min-h-[1.25rem] items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                  <span className="h-px w-12 shrink-0 bg-craftOrange" aria-hidden="true" />
                  <span className="text-slate-100">{s.step}</span>
                </div>
                <div className="flex flex-1 flex-col gap-7 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div className="min-w-0 flex-1 space-y-5">
                    <CardTitle className="text-balance text-lg font-semibold leading-snug tracking-tight text-slate-50 sm:text-xl">
                      {s.title}
                    </CardTitle>
                    <p className="text-balance text-[15px] leading-[1.7] text-slate-200">
                      {s.description}
                    </p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-xl border border-craftOrange/35 bg-[#0B1224] shadow-inner shadow-black/25 ring-1 ring-craftOrange/20 sm:mt-0.5">
                    <Icon className="h-5 w-5 text-craftOrange" aria-hidden="true" />
                  </div>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
