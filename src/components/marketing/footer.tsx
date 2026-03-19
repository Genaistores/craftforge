import Link from "next/link";

import { EmailSignupFooter } from "@/components/marketing/email-signup-footer";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1224]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <div className="text-sm font-semibold text-slate-50">genaistores.com</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Built for independent tradesmen. Part of the Genaistores family of
              autonomy tools.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="text-sm font-semibold text-slate-50">
              Get your free audit
            </div>
            <div className="mt-3">
              <EmailSignupFooter />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} CraftForge by Genaistores LLC
          </div>
          <Link
            href="https://genaistores.com"
            className="text-xs font-medium text-craftOrange hover:text-craftOrange/90"
          >
            Visit Genaistores
          </Link>
        </div>
      </div>
    </footer>
  );
}

