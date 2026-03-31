import { AuditDialog } from "@/components/audit/AuditDialog";
import { Button } from "@/components/ui/button";

const BEFORE = [
  "Digging through spreadsheets and invoices after a long day",
  "Guessing if your prices are right or if vendors are overcharging",
  "Losing money and leads you don\u2019t even know about"
];

const AFTER = [
  "Open the dashboard \u2014 your crew already found the wins",
  "One-tap approvals, real savings, new revenue lined up",
  "Stay on the tools while the crew handles the business side"
];

export function YourDayTomorrow() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
      {/* Divider */}
      <div className="mb-20 flex justify-center">
        <span className="h-px w-16 bg-white/10" aria-hidden="true" />
      </div>

      {/* Heading */}
      <div className="mx-auto mb-20 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Your Day Tomorrow
        </h2>
      </div>

      {/* Comparison grid */}
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Before */}
        <div className="rounded-2xl border border-white/[0.06] bg-[#0F1A2E] p-7 sm:p-8">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
            Before CraftForge
          </p>
          <ul className="space-y-4">
            {BEFORE.map((b) => (
              <li
                key={b}
                className="flex gap-3 text-[15px] leading-[1.7] text-slate-400"
              >
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="rounded-2xl border border-craftOrange/20 bg-[#0F1A2E] p-7 shadow-[0_0_40px_rgba(249,115,22,0.06)] sm:p-8">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.14em] text-craftOrange">
            With Your Crew
          </p>
          <ul className="space-y-4">
            {AFTER.map((a) => (
              <li
                key={a}
                className="flex gap-3 text-[15px] leading-[1.7] text-slate-200"
              >
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-craftOrange/70" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <AuditDialog
          trigger={
            <Button
              size="lg"
              className="h-13 bg-craftOrange px-8 text-base font-semibold text-white shadow-lg shadow-craftOrange/20 hover:bg-craftOrange/90"
            >
              Get My Free CraftForge Blueprint &mdash; Takes 30 Seconds
            </Button>
          }
        />
        <p className="mt-5 text-sm text-slate-500">
          No credit card. No commitment. Your crew starts working the moment
          you join.
        </p>
      </div>
    </section>
  );
}
