import type { ReactNode } from "react";
import { Card } from "./Card";
import { Logo } from "./Logo";

type AuthCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
};

export function AuthCard({ title, description, children, footer }: AuthCardProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-5 py-10 text-[#F8FAFC]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(15,82,186,0.18),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />

      <Card className="relative w-full max-w-md bg-[rgba(15,82,186,0.12)] p-6 sm:p-8">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <div className="mb-7 text-center">
          <h1 className="text-3xl font-bold text-[#F8FAFC] sm:text-4xl">{title}</h1>
          <p className="mt-3 text-base leading-7 text-[#CBD5E1]">{description}</p>
        </div>

        {children}

        <div className="mt-7 border-t border-[#1E293B] pt-5 text-center text-sm text-[#CBD5E1]">
          {footer}
        </div>
      </Card>
    </main>
  );
}
