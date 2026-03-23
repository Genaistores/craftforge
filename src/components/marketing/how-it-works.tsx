import { HardHat, LineChart, ShieldCheck } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    title: "Max hands you off to Gauge, your Analysis Expert.",
    description:
      "I've got all the details from Max and I've crunched the real numbers using actual market data. This is your personalized 'Untapped Profit Potential' report — no fluff, just clear insights and a simple plan you can actually use.",
    icon: LineChart
  },
  {
    step: "STEP 3",
    title: "Gauge hands you off to Atlas, your Optimization Expert.",
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
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Welcome to Your Frontier Experts — 3 Simple Steps
          </h2>
        </div>
        <div className="max-w-xl text-sm leading-relaxed text-slate-300">
          Your frontier experts do all the thinking so you can stay completely
          focused on your craft.
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.step}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] p-2 shadow-[0_18px_40px_rgba(2,8,23,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] opacity-20 [background-size:18px_18px]" />
              <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_0%,rgba(249,115,22,0.22)_0%,transparent_58%)]" />

              <CardHeader className="relative z-10 space-y-6 p-8 pb-6">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  <span className="h-px w-10 bg-craftOrange/70" aria-hidden="true" />
                  <span>{s.step}</span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-4">
                    <CardTitle className="text-xl font-semibold leading-snug text-slate-100">
                      {s.title}
                    </CardTitle>
                    <p className="text-[15px] leading-relaxed text-slate-300">
                      {s.description}
                    </p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-craftOrange/20 bg-[#0B1224] ring-1 ring-craftOrange/10">
                    <Icon className="h-5 w-5 text-craftOrange" aria-hidden="true" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 mt-auto p-8 pt-0" />
            </Card>
          );
        })}
      </div>
    </section>
  );
}

