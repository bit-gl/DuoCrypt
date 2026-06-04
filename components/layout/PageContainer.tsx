import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg";
};

const maxWidthClasses = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-5xl",
};

export function PageContainer({
  children,
  className = "",
  maxWidth = "md",
}: PageContainerProps) {
  return (
    <main className="min-h-screen bg-[#050816] text-[#F8FAFC]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_32%),linear-gradient(180deg,rgba(11,18,32,0.8),rgba(5,8,22,0))]" />
      <section
        className={`relative mx-auto min-h-screen w-full ${maxWidthClasses[maxWidth]} px-4 pb-28 pt-5 sm:px-6 ${className}`}
      >
        {children}
      </section>
      <BottomNav />
    </main>
  );
}
