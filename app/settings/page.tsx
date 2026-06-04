"use client";

import { Laptop, LogOut, Moon, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut } from "@/src/lib/auth/auth";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageContainer } from "@/components/layout/PageContainer";

export default function SettingsPage() {
  const router = useRouter();

  async function handleLogout() {
    await signOut();
    router.push("/");
  }

  return (
    <PageContainer maxWidth="sm" className="space-y-6">
      <header className="pt-4">
        <p className="text-base text-[#CBD5E1]">Settings</p>
        <h1 className="mt-2 text-3xl font-bold text-[#F8FAFC]">
          Keep the room secure.
        </h1>
      </header>

      <Card className="p-5">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-[rgba(15,82,186,0.12)] text-[#7DD3FC]">
            <Moon aria-hidden="true" className="size-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#F8FAFC]">Theme</h2>
            <p className="text-sm text-[#CBD5E1]">Sapphire Sky is active</p>
          </div>
        </div>
        <div className="rounded-2xl border border-[#1E293B] bg-[#0B1220] p-4">
          <div className="h-20 rounded-2xl bg-gradient-to-br from-[#0F52BA] to-[#38BDF8]" />
          <p className="mt-3 text-base font-medium text-[#F8FAFC]">
            Sapphire Sky
          </p>
        </div>
      </Card>

      <Card className="p-5">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-[rgba(15,82,186,0.12)] text-[#7DD3FC]">
            <ShieldCheck aria-hidden="true" className="size-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#F8FAFC]">Security</h2>
            <p className="text-sm text-[#CBD5E1]">Privacy-first defaults</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex min-h-12 items-center justify-between rounded-2xl border border-[#1E293B] bg-[#0B1220] px-4">
            <span className="text-base text-[#F8FAFC]">Secure session</span>
            <span className="text-sm font-medium text-[#22C55E]">Active</span>
          </div>
          <div className="flex min-h-12 items-center justify-between rounded-2xl border border-[#1E293B] bg-[#0B1220] px-4">
            <span className="text-base text-[#F8FAFC]">Two-person access</span>
            <span className="text-sm font-medium text-[#CBD5E1]">Planned</span>
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-[rgba(15,82,186,0.12)] text-[#7DD3FC]">
            <Laptop aria-hidden="true" className="size-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#F8FAFC]">Devices</h2>
            <p className="text-sm text-[#CBD5E1]">Device management is reserved for security work</p>
          </div>
        </div>
      </Card>

      <Card className="border-[#EF4444]/25 p-5">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-[#EF4444]/10 text-[#EF4444]">
            <LogOut aria-hidden="true" className="size-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#F8FAFC]">Logout</h2>
            <p className="text-sm text-[#CBD5E1]">End this session on this device</p>
          </div>
        </div>
        <Button
          type="button"
          onClick={handleLogout}
          variant="secondary"
          fullWidth
          className="border-[#EF4444]/40 text-[#F8FAFC] hover:bg-[#EF4444]/10"
        >
          Logout
        </Button>
      </Card>
    </PageContainer>
  );
}
