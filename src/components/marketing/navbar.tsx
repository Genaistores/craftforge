import Image from "next/image";
import Link from "next/link";

import { AuditDialog } from "@/components/audit/AuditDialog";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F172A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-soft">
              <Image
                src="/craftforge-logo.svg"
                alt="CraftForge logo"
                width={36}
                height={36}
              />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-semibold text-slate-100">
                CraftForge
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
                by Genaistores
              </span>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <AuditDialog
            trigger={
              <Button className="h-10 bg-craftOrange px-5 text-white hover:bg-craftOrange/90">
                Get My Free Profit Potential
              </Button>
            }
          />
        </div>
      </div>
    </header>
  );
}

