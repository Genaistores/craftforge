import Image from "next/image";

import { AuditDialog } from "@/components/audit/AuditDialog";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/jobsite-hero.svg"
          alt=""
          fill
          priority
          className="opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/55 via-[#0F172A]/85 to-[#0F172A]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-craftOrange/40 bg-craftOrange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">
            Frontier Experts For Tradesmen
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Your Craft. Finally Free.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
            Max, Gauge, and Atlas handle the business side so you can stay
            completely focused on your craft. See your Untapped Profit
            Potential with almost zero effort.
          </p>

          <div className="mt-7">
            <AuditDialog
              trigger={
                <Button
                  size="lg"
                  className="bg-craftOrange text-white shadow-lg shadow-craftOrange/20 hover:bg-craftOrange/90"
                >
                  Get My Free Profit Potential
                </Button>
              }
            />
            <p className="mt-4 text-sm text-slate-400">
              No uploads. No spreadsheets. No hassle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

