"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/src/lib/auth/auth";
import { AuthCard } from "@/components/ui/AuthCard";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

function getPasswordScore(password: string) {
  let score = 0;

  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  return score;
}

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const passwordScore = useMemo(() => getPasswordScore(password), [password]);
  const passwordStrength =
    passwordScore <= 1 ? "Weak" : passwordScore <= 3 ? "Good" : "Strong";
  const passwordMismatch = Boolean(confirmPassword && password !== confirmPassword);

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Complete all fields to create your account.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const result = await signUp(email, password);

      if (result.error) {
        setError(result.error.message);
        return;
      }

      if (!result.data.session) {
        alert("Account created. Check your email to confirm your account before logging in.");
        router.push("/login");
        return;
      }

      router.push("/home");
    } catch (signupError) {
      console.error("Signup Error:", signupError);
      setError("Unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      title="Create Account"
      description="Create one of the two private accounts allowed in this DuoCrypt workspace."
      footer={
        <>
          Already have access?{" "}
          <Link
            href="/login"
            className="font-semibold text-cyan-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            Login
          </Link>
        </>
      }
    >
      <form onSubmit={handleSignup} className="space-y-5">
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

        <div className="space-y-3">
          <Input
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            placeholder="Create a secure password"
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

          <div aria-live="polite" className="space-y-2">
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((step) => (
                <span
                  key={step}
                  className={`h-1.5 rounded-full transition ${
                    passwordScore >= step
                      ? "bg-cyan-200"
                      : "bg-white/10"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-zinc-500">
              Password strength:{" "}
              <span className="font-medium text-zinc-300">{passwordStrength}</span>
            </p>
          </div>
        </div>

        <Input
          label="Confirm Password"
          name="confirm-password"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={passwordMismatch ? "Passwords do not match." : undefined}
        />

        <Button type="submit" disabled={loading || passwordMismatch} fullWidth>
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
    </AuthCard>
  );
}
