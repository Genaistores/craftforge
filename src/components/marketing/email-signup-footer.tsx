"use client";

import * as React from "react";

import { AuditDialog } from "@/components/audit/AuditDialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function EmailSignupFooter() {
  const [email, setEmail] = React.useState("");

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex-1">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="work@company.com"
            inputMode="email"
            autoComplete="email"
          />
        </div>

        <AuditDialog
          defaultEmail={email}
          trigger={
            <Button
              className="h-10 bg-craftOrange text-white hover:bg-craftOrange/90"
              disabled={!email.trim()}
            >
              Get My Free Audit
            </Button>
          }
        />
      </div>

      <p className="mt-2 text-xs text-slate-400">
        Enter your email to request the free audit playbook. We’ll send next
        steps by email. No spam.
      </p>
    </div>
  );
}

