import Image from "next/image";
import Link from "next/link";

import { AuditDialog } from "@/components/audit/AuditDialog";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/jobsite-hero.svg"
          alt=""
          fill
          priority
          className="opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-[#0F172A]/85 to-[#0F172A]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
            <span className="h-2 w-2 rounded-full bg-craftOrange" />
            Built for independent tradesmen
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-50 sm:mt-6 sm:text-5xl lg:text-6xl">
              Your Craft. Your Control.
            </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:mt-5 sm:text-lg">
              The AI Assistant that handles the entire business side so you can
              stay focused on your craft. Cost control, vendor optimization,
              digital footprint optimization, and powerful new revenue streams
              — all automatic with almost zero extra work from you.
            </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <AuditDialog
              trigger={
                <Button
                  size="lg"
                  className="bg-craftOrange text-white hover:bg-craftOrange/90"
                >
                  Get My Free Audit
                </Button>
              }
            />

            <Button
              size="lg"
              variant="outline"
              className="border-white/15 bg-transparent hover:bg-white/5"
              asChild
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-soft sm:mt-7 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-50">
                  Field outputs, not fluff.
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  You bring the real paperwork and day-to-day setup. We turn
                  it into a clean number and next actions you can run.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-craftOrange" />
                  <span className="text-xs font-semibold text-slate-100">
                    Money Left
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-craftOrange" />
                  <span className="text-xs font-semibold text-slate-100">
                    Vendor targets
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-craftOrange" />
                  <span className="text-xs font-semibold text-slate-100">
                    Weekly runs
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400 sm:mt-6">
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-craftOrange">24/7</span>
              Business optimization
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              Weekly playbooks, not reports
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

