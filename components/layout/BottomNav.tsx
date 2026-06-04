"use client";

import Link from "next/link";
import { Heart, Home, MessageCircle, Settings, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/chat", label: "Chat", icon: MessageCircle },
  { href: "/home", label: "Home", icon: Home },
  { href: "/profile", label: "Profile", icon: UserRound },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#1E293B] bg-[#050816]/92 px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 text-[#CBD5E1] shadow-xl shadow-black/30 backdrop-blur-xl"
    >
      <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]/70 ${
                active
                  ? "bg-[rgba(15,82,186,0.22)] text-[#F8FAFC]"
                  : "hover:bg-[#111827] hover:text-[#F8FAFC]"
              }`}
            >
              <Icon aria-hidden="true" className="size-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#38BDF8]/20 bg-[#0B1220] p-1 text-[#7DD3FC]">
        <Heart aria-hidden="true" className="size-3 fill-[#7DD3FC]/30" />
      </div>
    </nav>
  );
}
