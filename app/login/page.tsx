"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/src/lib/auth/auth";
import { AuthCard } from "@/components/ui/AuthCard";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Enter your email and password to continue.");
      return;
    }

    try {
      setLoading(true);

      const result = await signIn(email, password);

      if (result.error) {
        setError(result.error.message);
        return;
      }

      router.push("/home");
    } catch (loginError) {
      console.error(loginError);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      title="Welcome Back"
      description="Access your private DuoCrypt workspace with your verified account."
      footer={
        <>
          New to DuoCrypt?{" "}
          <Link
            href="/signup"
            className="font-semibold text-cyan-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            Create account
          </Link>
        </>
      }
    >
      <form onSubmit={handleLogin} className="space-y-5">
        {error ? (
          <div
            role="alert"
            className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-100"
          >
            {error}
          </div>
        ) : null}

        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          rightElement={
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((current) => !current)}
              className="rounded-md p-2 text-zinc-500 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            >
              {showPassword ? (
                <EyeOff aria-hidden="true" className="size-4" />
              ) : (
                <Eye aria-hidden="true" className="size-4" />
              )}
            </button>
          }
        />

        <Button type="submit" disabled={loading} fullWidth>
          {loading ? "Logging In..." : "Login"}
        </Button>
      </form>
    </AuthCard>
  );
}
