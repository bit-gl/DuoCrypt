import type { InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  rightElement?: ReactNode;
};

export function Input({
  id,
  label,
  error,
  rightElement,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");
  const errorId = `${inputId}-error`;

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium text-[#F8FAFC]">
        {label}
      </label>
      <div className="relative">
        <input
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`min-h-12 w-full rounded-xl border bg-[#0B1220] px-4 text-base text-[#F8FAFC] outline-none transition duration-300 placeholder:text-[#CBD5E1]/45 focus:border-[#38BDF8]/60 focus:ring-2 focus:ring-[#38BDF8]/15 ${
            rightElement ? "pr-12" : ""
          } ${
            error
              ? "border-[#EF4444]/60"
              : "border-[#1E293B] hover:border-[#2563EB]/50"
          } ${className}`}
          {...props}
        />
        {rightElement ? (
          <div className="absolute inset-y-0 right-2 flex items-center">
            {rightElement}
          </div>
        ) : null}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-[#EF4444]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
