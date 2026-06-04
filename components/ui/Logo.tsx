import { LockKeyhole } from "lucide-react";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="flex size-11 items-center justify-center rounded-2xl border border-[#38BDF8]/25 bg-[rgba(15,82,186,0.12)] shadow-xl shadow-[#0F52BA]/20">
        <LockKeyhole aria-hidden="true" className="size-5 text-[#7DD3FC]" />
      </div>
      <div>
        <span className="block text-lg font-semibold tracking-normal text-[#F8FAFC]">
          DuoCrypt
        </span>
        {!compact ? (
          <span className="block text-sm font-medium text-[#CBD5E1]">
            Sapphire Sky
          </span>
        ) : null}
      </div>
    </div>
  );
}
