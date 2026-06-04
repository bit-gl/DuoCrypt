import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050816] px-5 text-[#F8FAFC]">
      <header className="mx-auto flex w-full max-w-md items-center justify-between py-5">
        <Link
          href="/"
          className="text-base font-semibold text-[#F8FAFC] transition hover:text-[#7DD3FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]/70"
        >
          DuoCrypt
        </Link>

        <ButtonLink href="/login" variant="ghost" className="min-h-12 px-4">
          Login
        </ButtonLink>
      </header>

      <section className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center pb-16 text-center">
        <h1 className="text-5xl font-bold leading-tight text-[#F8FAFC]">
          DuoCrypt
        </h1>

        <p className="mt-5 max-w-sm text-base leading-7 text-[#CBD5E1]">
          A private space for secure conversations between two people.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3">
          <ButtonLink href="/signup" fullWidth>
            Create Account
          </ButtonLink>
          <ButtonLink href="/login" variant="secondary" fullWidth>
            Login
          </ButtonLink>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-md items-center justify-between border-t border-[#1E293B] py-5 text-sm text-[#CBD5E1]">
        <p>© DuoCrypt</p>
        <nav aria-label="Footer" className="flex items-center gap-4">
          <Link
            href="/"
            className="transition hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]/70"
          >
            Privacy
          </Link>
          <Link
            href="/"
            className="transition hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]/70"
          >
            Terms
          </Link>
          <Link
            href="/"
            className="transition hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]/70"
          >
            Security
          </Link>
        </nav>
      </footer>
    </main>
  );
}
