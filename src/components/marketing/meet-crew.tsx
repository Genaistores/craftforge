"use client";

import * as React from "react";
import { X } from "lucide-react";

import { AuditDialog } from "@/components/audit/AuditDialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/* ─── Crew data ──────────────────────────────────────────────────────────── */

interface FeedMessage {
  time: string;
  speaker: string;
  text: string;
  action?: string;
}

interface CrewMember {
  name: string;
  role: string;
  team: "scout" | "titan";
  oneLiner: string;
  bio: string;
  feed: FeedMessage[];
}

const CREW: CrewMember[] = [
  {
    name: "Knox",
    role: "Scout Captain",
    team: "scout",
    oneLiner: "Optimistic captain, big-picture motivator.",
    bio: "Optimistic captain and big-picture motivator. He\u2019s the first voice you hear \u2014 loud, confident, and always scanning the horizon for opportunity. Knox gets you fired up about what\u2019s possible and hands you off to the right Scout so you can start seeing real money fast.",
    feed: [
      { time: "10:12 AM", speaker: "Captain Knox", text: "Captain Knox here, brother. Welcome to the crew." },
      { time: "10:13 AM", speaker: "Riley", text: "Riley here \u2014 dug into your vendors. Found $340/month sitting there." },
      { time: "10:14 AM", speaker: "Brick", text: "Brick here. Knox always says that. Numbers check out.", action: "Approve Switch" },
      { time: "10:15 AM", speaker: "Knox", text: "This is what we do. You\u2019re in good hands." }
    ]
  },
  {
    name: "Riley",
    role: "Scout \u2014 Detail Researcher",
    team: "scout",
    oneLiner: "Calm detail researcher. Thorough and precise.",
    bio: "Calm detail researcher. Thorough and precise, Riley is the one who quietly digs into the numbers and contracts that everyone else overlooks. She finds the hidden leaks and opportunities so the rest of the crew can act fast and clean.",
    feed: [
      { time: "10:12 AM", speaker: "Riley", text: "Riley here \u2014 dug into your vendors." },
      { time: "10:13 AM", speaker: "Jax", text: "Jax on it \u2014 your material prices are 14% under market." },
      { time: "10:14 AM", speaker: "Brick", text: "Brick here. Riley\u2019s right. Let\u2019s get you that money.", action: "View in Blueprint" },
      { time: "10:15 AM", speaker: "Riley", text: "Found $340/month sitting there. Captain Knox wants this in the Blueprint ASAP." }
    ]
  },
  {
    name: "Jax",
    role: "Scout \u2014 Data Hunter",
    team: "scout",
    oneLiner: "Aggressive data hunter. Fast and relentless.",
    bio: "Aggressive data hunter. Fast and relentless, Jax lives for beating market rates and spotting gaps before anyone else even looks. He moves quick, locks in the numbers, and hands off clean intel so the Titans can turn it into cash.",
    feed: [
      { time: "10:12 AM", speaker: "Jax", text: "Jax on it \u2014 market data locked." },
      { time: "10:13 AM", speaker: "Blake", text: "Blake running the comps." },
      { time: "10:14 AM", speaker: "Brick", text: "Brick here. Jax always moves fast. Numbers check out." },
      { time: "10:15 AM", speaker: "Jax", text: "Your material prices are 14% under market. Blueprint updated." }
    ]
  },
  {
    name: "Blake",
    role: "Scout \u2014 Big-Picture Analyst",
    team: "scout",
    oneLiner: "Big-picture analyst. Sees what others miss.",
    bio: "Big-picture analyst. Blake sees connections and opportunities that others miss. He connects the dots across your entire operation and delivers the clear, high-level view that turns raw data into a winning strategy.",
    feed: [
      { time: "10:12 AM", speaker: "Blake", text: "Blake running the comps." },
      { time: "10:13 AM", speaker: "Knox", text: "Captain Knox here. Blake\u2019s right \u2014 this gap is bigger than we thought." },
      { time: "10:14 AM", speaker: "Brick", text: "Brick here. Let\u2019s turn that gap into cash.", action: "Review Blueprint" },
      { time: "10:15 AM", speaker: "Blake", text: "Blueprint ready for Knox to review." }
    ]
  },
  {
    name: "Brick",
    role: "Titan Lead",
    team: "titan",
    oneLiner: "No-BS numbers foreman. Straight talk and real results.",
    bio: "No-BS numbers foreman. Straight talk and real results \u2014 Brick is the guy who tells you the truth with a smirk and a shoulder punch. He calls out waste, fixes it fast, and keeps the whole crew running like a well-oiled shop.",
    feed: [
      { time: "10:12 AM", speaker: "Brick", text: "Brick here. That supplier was robbing you blind. Switched it." },
      { time: "10:13 AM", speaker: "Sawyer", text: "Sawyer on costs \u2014 Brick\u2019s right. Switch is done." },
      { time: "10:14 AM", speaker: "Knox", text: "Captain Knox here. Good work, Brick." },
      { time: "10:15 AM", speaker: "Brick", text: "You\u2019re up $287 this week. Stay on the tools \u2014 I got the rest.", action: "Approve Switch" }
    ]
  },
  {
    name: "Sawyer",
    role: "Titan \u2014 Cost Negotiator",
    team: "titan",
    oneLiner: "Relentless cost negotiator. Saves real money.",
    bio: "Relentless cost negotiator. Sawyer attacks every bill and contract like it\u2019s personal. He saves real money month after month and loves proving that your old vendors were overcharging you all along.",
    feed: [
      { time: "10:12 AM", speaker: "Sawyer", text: "Sawyer on costs." },
      { time: "10:13 AM", speaker: "Brick", text: "Brick here. Sawyer\u2019s right. Insurance is down $112." },
      { time: "10:14 AM", speaker: "Sawyer", text: "Negotiated your insurance down another $112." },
      { time: "10:15 AM", speaker: "Brick", text: "Brick here. That\u2019s another win.", action: "Approve Savings" }
    ]
  },
  {
    name: "Morgan",
    role: "Titan \u2014 Revenue Specialist",
    team: "titan",
    oneLiner: "Creative revenue specialist. Finds new money.",
    bio: "Creative revenue specialist. Morgan is always looking for new ways to make money from the customers you already have. He finds simple, practical upsells and growth opportunities that turn existing work into extra profit.",
    feed: [
      { time: "10:12 AM", speaker: "Morgan", text: "Morgan on revenue." },
      { time: "10:13 AM", speaker: "Brick", text: "Brick here. Morgan found a simple upsell." },
      { time: "10:14 AM", speaker: "Morgan", text: "Added a simple upsell. +$460 this month." },
      { time: "10:15 AM", speaker: "Brick", text: "Brick here. Nice work, Morgan.", action: "Enable Upsell" }
    ]
  },
  {
    name: "Reese",
    role: "Titan \u2014 Systems Expert",
    team: "titan",
    oneLiner: "Quiet systems guy. Keeps everything running.",
    bio: "Quiet systems guy. Reese keeps everything running smoothly in the background. He cleans up the backend, fixes digital footprint issues, and makes sure the systems are tight so the rest of the crew can focus on the big wins.",
    feed: [
      { time: "10:12 AM", speaker: "Reese", text: "Reese on systems." },
      { time: "10:13 AM", speaker: "Brick", text: "Brick here. Reese cleaned up the backend." },
      { time: "10:14 AM", speaker: "Reese", text: "Your site now ranks first locally. Numbers climbing." }
    ]
  }
];

/* ─── Component ──────────────────────────────────────────────────────────── */

export function MeetCrew() {
  const [selected, setSelected] = React.useState<CrewMember | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
      {/* Divider */}
      <div className="mb-14 flex justify-center sm:mb-20">
        <span className="h-px w-16 bg-white/10" aria-hidden="true" />
      </div>

      <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Meet Your Crew
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
          These are the digital crew members who will run the business side for
          you. Click any to see how they talk and work.
        </p>
      </div>

      {/* Grid — 4 columns on lg, 2 on sm */}
      <div className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4">
        {CREW.map((c) => (
          <button
            key={c.name}
            type="button"
            onClick={() => setSelected(c)}
            className={cn(
              "group relative flex flex-col items-start rounded-2xl border bg-[#0F1A2E] p-4 text-left transition-all duration-200 sm:p-6",
              "hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(2,8,23,0.5)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-craftOrange",
              c.team === "scout"
                ? "border-craftOrange/20 hover:border-craftOrange/35"
                : "border-white/10 hover:border-white/20"
            )}
          >
            {/* Team badge */}
            <span
              className={cn(
                "mb-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em]",
                c.team === "scout"
                  ? "bg-craftOrange/10 text-craftOrange"
                  : "bg-white/5 text-slate-400"
              )}
            >
              {c.team === "scout" ? "Scout" : "Titan"}
            </span>

            {/* Name + role */}
            <p className="text-base font-bold text-slate-50 sm:text-lg">
              {c.name}
            </p>
            <p className="mt-0.5 text-xs font-medium text-slate-400">
              {c.role}
            </p>

            {/* One-liner */}
            <p className="mt-2 text-[13px] leading-relaxed text-slate-300 sm:mt-3 sm:text-sm">
              {c.oneLiner}
            </p>
          </button>
        ))}
      </div>

      {/* ── Detail modal ── */}
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        {selected && (
          <DialogContent
            className={cn(
              "max-w-md gap-0 border-white/10 bg-[#0F172A] p-0 shadow-2xl sm:max-w-lg",
              "max-h-[90dvh] overflow-y-auto"
            )}
          >
            <DialogClose
              className={cn(
                "absolute right-4 top-4 z-10 rounded-lg p-1.5 text-slate-400 transition-colors",
                "hover:bg-white/10 hover:text-slate-100",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-craftOrange"
              )}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </DialogClose>

            {/* Header */}
            <div className="border-b border-white/10 px-6 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
              <DialogHeader className="space-y-2 text-left">
                <span
                  className={cn(
                    "inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em]",
                    selected.team === "scout"
                      ? "bg-craftOrange/10 text-craftOrange"
                      : "bg-white/5 text-slate-400"
                  )}
                >
                  {selected.team === "scout" ? "Scout" : "Titan"}
                </span>
                <DialogTitle className="text-xl font-bold text-slate-50 sm:text-2xl">
                  {selected.name}
                </DialogTitle>
                <DialogDescription className="text-sm font-medium text-slate-400">
                  {selected.role}
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Body */}
            <div className="space-y-7 px-6 py-8 sm:px-8">
              {/* Bio */}
              <p className="text-[15px] leading-[1.7] text-slate-300">
                {selected.bio}
              </p>

              {/* Live Activity Feed */}
              <div>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-craftOrange opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-craftOrange" />
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Live Dashboard Activity Feed Preview
                  </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#0B1224]/80">
                  {selected.feed.map((msg, i) => {
                    const isOwner = msg.speaker === selected.name ||
                      (selected.name === "Knox" && msg.speaker === "Captain Knox");

                    return (
                      <div
                        key={i}
                        className={cn(
                          "flex gap-3 px-4 py-3.5 text-sm",
                          i > 0 && "border-t border-white/[0.04]",
                          isOwner && "bg-craftOrange/[0.04]"
                        )}
                      >
                        <span className="shrink-0 pt-px text-[11px] tabular-nums text-slate-600">
                          {msg.time}
                        </span>
                        <div className="min-w-0">
                          <span
                            className={cn(
                              "font-semibold",
                              isOwner ? "text-craftOrange" : "text-slate-400"
                            )}
                          >
                            {msg.speaker}
                          </span>
                          <span className="ml-1.5 text-slate-300">
                            {msg.text}
                          </span>
                          {msg.action && (
                            <span
                              className="ml-2 inline-flex items-center rounded-md bg-craftOrange/15 px-2 py-0.5 text-[11px] font-semibold text-craftOrange"
                              aria-label={`Action: ${msg.action}`}
                            >
                              {msg.action} &rarr;
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="text-center text-[13px] italic text-slate-600">
                This is what your dashboard will look like every day.
              </p>

              {/* Close */}
              <div className="pt-1">
                <Button
                  variant="secondary"
                  className="h-11 w-full rounded-xl border-white/15 bg-white/5 text-base hover:bg-white/10"
                  onClick={() => setSelected(null)}
                >
                  Back to crew
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Bottom CTA */}
      <div className="mt-14 text-center">
        <AuditDialog
          trigger={
            <Button
              size="lg"
              className="min-h-[52px] w-full bg-craftOrange text-white shadow-lg shadow-craftOrange/20 hover:bg-craftOrange/90 sm:w-auto"
            >
              Get My Free CraftForge Blueprint
            </Button>
          }
        />
      </div>
    </section>
  );
}
