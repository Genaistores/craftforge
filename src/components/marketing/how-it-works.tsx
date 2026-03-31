const STEPS = [
  {
    number: "01",
    title: "Tell us a few basics",
    description:
      "Your trade, service area, and rough revenue \u2014 that\u2019s it. Takes 30 seconds."
  },
  {
    number: "02",
    title: "Get your CraftForge Blueprint",
    description:
      "Your crew analyzes your business and delivers a personalized Blueprint with exact savings and opportunities."
  },
  {
    number: "03",
    title: "One-tap approvals, crew handles the rest",
    description:
      "Open your dashboard each morning, approve the wins, and stay on the tools while your AI crew runs the back end."
  }
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32"
    >
      {/* Divider */}
      <div className="mb-20 flex justify-center">
        <span className="h-px w-16 bg-white/10" aria-hidden="true" />
      </div>

      {/* Heading */}
      <div className="mx-auto mb-20 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          How CraftForge Works for You
        </h2>
      </div>

      {/* Steps */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
        {STEPS.map((s) => (
          <div
            key={s.number}
            className="rounded-2xl border border-white/[0.08] bg-[#0F1A2E] p-7 shadow-[0_16px_48px_rgba(2,8,23,0.45)] ring-1 ring-white/[0.04] sm:p-8"
          >
            <span className="mb-4 inline-block text-2xl font-bold tabular-nums text-craftOrange">
              {s.number}
            </span>
            <h3 className="mb-3 text-lg font-bold text-slate-50">
              {s.title}
            </h3>
            <p className="text-[15px] leading-[1.7] text-slate-400">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
