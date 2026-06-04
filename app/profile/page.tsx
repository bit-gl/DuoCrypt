import { Heart, Palette, UserRound } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { PageContainer } from "@/components/layout/PageContainer";

const themes = ["Sapphire Sky", "Ocean", "Lavender", "Rose", "Midnight"];

export default function ProfilePage() {
  return (
    <PageContainer maxWidth="sm" className="space-y-6">
      <header className="pt-4">
        <p className="text-base text-[#CBD5E1]">Profile</p>
        <h1 className="mt-2 text-3xl font-bold text-[#F8FAFC]">
          Make it feel like yours.
        </h1>
      </header>

      <Card className="p-6 text-center">
        <div className="mx-auto flex size-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#0F52BA] to-[#38BDF8] text-4xl font-bold shadow-xl shadow-[#0F52BA]/25">
          A
        </div>
        <h2 className="mt-5 text-xl font-semibold text-[#F8FAFC]">My Love</h2>
        <p className="mt-2 text-base text-[#CBD5E1]">
          Private DuoCrypt profile
        </p>
      </Card>

      <Card className="p-5">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-[rgba(15,82,186,0.12)] text-[#7DD3FC]">
            <UserRound aria-hidden="true" className="size-5" />
          </div>
          <h2 className="text-xl font-semibold text-[#F8FAFC]">Nickname</h2>
        </div>
        <div className="rounded-2xl border border-[#1E293B] bg-[#0B1220] px-4 py-4 text-base text-[#F8FAFC]">
          My Love
        </div>
      </Card>

      <Card className="p-5">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-[rgba(15,82,186,0.12)] text-[#7DD3FC]">
            <Palette aria-hidden="true" className="size-5" />
          </div>
          <h2 className="text-xl font-semibold text-[#F8FAFC]">Theme Preview</h2>
        </div>

        <div className="rounded-2xl border border-[#1E293B] bg-[#050816] p-4">
          <div className="mb-4 flex gap-2">
            <span className="size-7 rounded-full bg-[#0F52BA]" />
            <span className="size-7 rounded-full bg-[#38BDF8]" />
            <span className="size-7 rounded-full bg-[#7DD3FC]" />
          </div>
          <p className="text-base font-medium text-[#F8FAFC]">Sapphire Sky</p>
          <p className="mt-1 text-sm text-[#CBD5E1]">
            Calm blue tones for a private room.
          </p>
        </div>
      </Card>

      <Card className="p-5">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-[rgba(15,82,186,0.12)] text-[#7DD3FC]">
            <Heart aria-hidden="true" className="size-5 fill-[#7DD3FC]/20" />
          </div>
          <h2 className="text-xl font-semibold text-[#F8FAFC]">Favorite Color</h2>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {themes.map((theme) => (
            <div
              key={theme}
              className={`min-h-12 rounded-2xl border ${
                theme === "Sapphire Sky"
                  ? "border-[#38BDF8] bg-[rgba(15,82,186,0.35)]"
                  : "border-[#1E293B] bg-[#0B1220]"
              }`}
              aria-label={theme}
              title={theme}
            />
          ))}
        </div>
      </Card>
    </PageContainer>
  );
}
