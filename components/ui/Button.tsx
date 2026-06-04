import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#0F52BA] to-[#38BDF8] text-[#F8FAFC] shadow-xl shadow-[#0F52BA]/20 hover:brightness-105",
  secondary:
    "border border-[#1E293B] bg-[#111827] text-[#F8FAFC] hover:border-[#38BDF8]/50 hover:bg-[#0B1220]",
  ghost: "text-[#CBD5E1] hover:bg-[#111827] hover:text-[#F8FAFC]",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] disabled:cursor-not-allowed disabled:opacity-60";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: ReactNode;
};

export function Button({
  className = "",
  variant = "primary",
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    />
  );
}

export function ButtonLink({
  className = "",
  variant = "primary",
  fullWidth = false,
  href,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
