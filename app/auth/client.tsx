"use client";
import React, { useState } from "react";
import { signInWithPassword, signUpWithPassword } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/navigation";

type AuthMode = "signin" | "signup";

export default function AuthClient() {
  const [mode, setMode] = useState<AuthMode>("signin");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      if (mode === "signin") {
        const result = await signInWithPassword(formData);
        if (result?.error) {
          setError(result.error);
        } else {
          router.push("/dashboard");
        }
      } else {
        const result = await signUpWithPassword(formData);
        if (result?.error) {
          setError(result.error);
        } else {
          router.push("/dashboard");
        }
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto rounded-lg p-8 bg-white dark:bg-zinc-900">
      <h2 className="text-2xl font-bold text-center mb-2">
        {mode === "signin"
          ? "Sign in to LaunchSpark"
          : "Create your LaunchSpark account"}
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-center mb-6">
        {mode === "signin"
          ? "Access your email marketing dashboard"
          : "Start sending email campaigns today"}
      </p>
      <Form onSubmit={handleSubmit}>
        {mode === "signup" && (
          <div className="flex gap-2 mb-4">
            <Input required name="firstName" placeholder="First name" />
            <Input required name="lastName" placeholder="Last name" />
          </div>
        )}
        <Input
          className="mb-4"
          required
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
        />
        <Input
          className="mb-4"
          required
          name="password"
          type="password"
          autoComplete={
            mode === "signin" ? "current-password" : "new-password"
          }
          placeholder="Password"
        />
        <Button className="w-full" loading={loading}>
          {mode === "signin" ? "Sign In" : "Create Account"}
        </Button>
        {error && (
          <div className="text-sm text-red-500 mt-2 text-center">{error}</div>
        )}
      </Form>
      <div className="flex flex-col gap-2 items-center mt-6">
        {mode === "signin" ? (
          <>
            <span className="text-sm">
              New to LaunchSpark?{" "}
              <button
                type="button"
                className="text-primary underline hover:opacity-80"
                onClick={() => setMode("signup")}
              >
                Create an account.
              </button>
            </span>
          </>
        ) : (
          <>
            <span className="text-sm">
              Already have an account?{" "}
              <button
                type="button"
                className="text-primary underline hover:opacity-80"
                onClick={() => setMode("signin")}
              >
                Sign in.
              </button>
            </span>
          </>
        )}
      </div>
    </div>
  );
}