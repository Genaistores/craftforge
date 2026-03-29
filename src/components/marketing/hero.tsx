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

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:pb-36 lg:pt-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
            Your Craft. Your Control.
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-slate-300 sm:mt-8 sm:text-xl">
            We handle the business side. You focus on your craft. We got this.
          </p>

          <div className="mt-10">
            <AuditDialog
              trigger={
                <Button
                  size="lg"
                  className="bg-craftOrange text-white shadow-lg shadow-craftOrange/20 hover:bg-craftOrange/90"
                >
                  Get My Free Blueprint
                </Button>
              }
            />
            <p className="mt-5 text-sm text-slate-400">
              No uploads. No spreadsheets. No hassle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

