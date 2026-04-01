const TESTIMONIALS = [
  {
    quote:
      "Riley caught a $340/mo supplier overcharge I was completely missing. Brick switched it \u2014 I approved and went back to work. Finally.",
    name: "Mike T.",
    trade: "Electrician",
    city: "Kansas City",
    saved: "$340/mo saved"
  },
  {
    quote:
      "Jax showed my materials were 14% over market and Morgan found a simple upsell. Added $460 this month without lifting a finger.",
    name: "Carlos R.",
    trade: "HVAC Tech",
    city: "St. Louis",
    saved: "$460+/mo extra"
  },
  {
    quote:
      "Reese got my site to #1 locally \u2014 12 new leads this month. I check the dashboard once a day and stay on the tools.",
    name: "Derek P.",
    trade: "Plumber",
    city: "Overland Park",
    saved: "12 new leads"
  }
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
      {/* Divider */}
      <div className="mb-14 flex justify-center sm:mb-20">
        <span className="h-px w-16 bg-white/10" aria-hidden="true" />
      </div>

      {/* Heading */}
      <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Real Wins from Tradesmen Already in the Crew
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0F1A2E] p-6 shadow-[0_16px_48px_rgba(2,8,23,0.45)] ring-1 ring-white/[0.04] sm:p-8"
          >
            {/* Badge */}
            <div className="mb-5">
              <span className="inline-flex items-center rounded-full bg-craftOrange/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-craftOrange">
                Saved this month
              </span>
            </div>

            {/* Quote */}
            <blockquote className="mb-6 flex-1 text-base leading-[1.8] text-slate-300 sm:text-[15px] sm:leading-[1.75]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-between border-t border-white/[0.06] pt-5">
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {t.trade}, {t.city}
                </p>
              </div>
              <span className="text-sm font-bold text-craftOrange">
                {t.saved}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
