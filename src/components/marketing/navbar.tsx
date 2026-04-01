import Image from "next/image";
import Link from "next/link";

import { AuditDialog } from "@/components/audit/AuditDialog";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F172A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
            <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-soft sm:h-9 sm:w-9">
              <Image
                src="/craftforge-logo.svg"
                alt="CraftForge logo"
                width={36}
                height={36}
              />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-slate-100 sm:text-base">
                CraftForge
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-[11px]">
                by Genaistores
              </span>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <AuditDialog
            trigger={
              <Button className="h-9 bg-craftOrange px-3.5 text-[13px] text-white hover:bg-craftOrange/90 sm:h-10 sm:px-5 sm:text-sm">
                Get My Free CraftForge Blueprint
              </Button>
            }
          />
        </div>
      </div>
    </header>
  );
}

