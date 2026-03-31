const BLUEPRINT_WINS = [
  { label: "Supplier overcharge found", value: "$340/mo savings" },
  { label: "Material prices 14% under market", value: "" },
  { label: "Maintenance upsell identified", value: "+$460/mo extra revenue" },
  { label: "Local rankings improved", value: "12 new leads this month" }
];

export function DashboardPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
      {/* Divider */}
      <div className="mb-20 flex justify-center">
        <span className="h-px w-16 bg-white/10" aria-hidden="true" />
      </div>

      {/* Heading */}
      <div className="mx-auto mb-20 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          This Is Your New Command Center
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
          Every morning your crew updates you here. One-tap approvals.
          Real-time wins. Zero spreadsheets.
        </p>
      </div>

      {/* Dashboard mock — single centered card */}
      <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B1224]/80 shadow-[0_32px_80px_rgba(2,8,23,0.6)] ring-1 ring-white/[0.04]">
        {/* Top bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-6 py-4 sm:px-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-sm font-medium text-slate-300">
            Good morning, Electrician &mdash; Kansas City
          </span>
        </div>

        {/* Today's Blueprint */}
        <div className="p-6 sm:p-8">
          <h3 className="mb-5 text-xl font-bold tracking-tight text-craftOrange sm:text-2xl">
            Today&apos;s Blueprint
          </h3>
          <div className="space-y-3">
            {BLUEPRINT_WINS.map((w) => (
              <div
                key={w.label}
                className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3"
              >
                <span className="text-sm text-slate-400">{w.label}</span>
                {w.value && (
                  <span className="shrink-0 text-sm font-semibold text-craftOrange">
                    {w.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom action bar */}
        <div className="flex flex-col gap-3 border-t border-white/[0.06] px-6 py-5 sm:flex-row sm:justify-center sm:px-8">
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-craftOrange px-6 text-sm font-semibold text-white shadow-lg shadow-craftOrange/15 transition-colors hover:bg-craftOrange/90"
          >
            Approve All
          </button>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
          >
            Chat with Crew
          </button>
        </div>
      </div>

      {/* Confidence line */}
      <p className="mx-auto mt-8 max-w-xl text-center text-[13px] italic text-slate-600">
        This is what your dashboard will look like every single day &mdash;
        starting the moment you join the crew.
      </p>
    </section>
  );
}
