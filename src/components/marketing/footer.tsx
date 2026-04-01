export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1224]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href="https://genaistores.com"
              className="text-sm font-semibold text-slate-50 underline-offset-4 transition hover:text-orange-300 hover:underline"
            >
              Genaistores.com
            </a>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Built for independent tradesmen. Part of the Genaistores family of
              autonomy tools.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} CraftForge by Genaistores. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
