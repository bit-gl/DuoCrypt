import {
  EyeOff,
  LockKeyhole,
  MessagesSquare,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Logo } from "@/components/ui/Logo";

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description: "Messages are encrypted before they leave the browser.",
    icon: LockKeyhole,
  },
  {
    title: "Private 1-to-1 Messaging",
    description: "Built for one conversation between exactly two trusted users.",
    icon: MessagesSquare,
  },
  {
    title: "Zero-Knowledge Architecture",
    description: "The service stores ciphertext, never readable message content.",
    icon: EyeOff,
  },
  {
    title: "Secure Session Management",
    description: "Protected routes and cookie-backed Supabase sessions.",
    icon: ShieldCheck,
  },
];

const privacyPrinciples = [
  "Only 2 trusted users",
  "No public chat",
  "No groups",
  "No advertising",
  "Privacy-first design",
];

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(16,185,129,0.12),transparent_26%),linear-gradient(180deg,rgba(15,23,42,0.24),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5">
        <header className="flex items-center justify-between py-6">
          <Logo />
          <ButtonLink href="/login" variant="ghost" className="hidden sm:inline-flex">
            Login
          </ButtonLink>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-xl">
            <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
            Security-focused private messaging
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Private Conversations. Zero Compromise.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            DuoCrypt is a private messaging workspace for two trusted users,
            designed around encrypted communication, strict access control, and
            a calm interface that stays out of the way.
          </p>

          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="/login" fullWidth className="sm:w-auto">
              Login
            </ButtonLink>
            <ButtonLink href="/signup" variant="secondary" fullWidth className="sm:w-auto">
              Create Account
            </ButtonLink>
          </div>
        </section>

        <section aria-labelledby="security-features" className="pb-16">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <h2 id="security-features" className="text-2xl font-semibold text-white">
                Security Features
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                A small, deliberate feature set for high-trust communication.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card key={feature.title} interactive className="p-5">
                  <div className="mb-5 flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <Icon aria-hidden="true" className="size-5 text-cyan-200" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="why-duocrypt" className="pb-16">
          <Card className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 flex size-11 items-center justify-center rounded-lg border border-emerald-300/20 bg-emerald-300/10">
                <UserRoundCheck aria-hidden="true" className="size-5 text-emerald-200" />
              </div>
              <h2 id="why-duocrypt" className="text-2xl font-semibold text-white">
                Why DuoCrypt
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                DuoCrypt is intentionally narrow. It avoids the sprawl of public
                messaging platforms and focuses on a single private connection:
                no discovery, no broadcasts, no monetized attention loops.
              </p>
            </div>

            <div className="grid gap-3">
              {privacyPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-200"
                >
                  <span className="size-1.5 rounded-full bg-cyan-200" />
                  {principle}
                </div>
              ))}
            </div>
          </Card>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>DuoCrypt v0.1.0</p>
          <p>Security Notice: protect your credentials and encryption keys.</p>
        </footer>
      </div>
    </main>
  );
}
