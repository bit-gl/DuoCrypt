import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({ className = "", interactive = false, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[#1E293B] bg-[#111827] shadow-xl shadow-black/20 backdrop-blur-xl ${
        interactive
          ? "transition duration-300 hover:-translate-y-0.5 hover:border-[#38BDF8]/35 hover:bg-[#0B1220]"
          : ""
      } ${className}`}
      {...props}
    />
  );
}
