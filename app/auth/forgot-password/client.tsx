"use client";
import * as React from "react";
import { useState } from "react";
import { forgotPasswordAction } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/navigation";

export default function ForgotPasswordClient() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const data = new FormData(event.currentTarget);

    const result = await forgotPasswordAction(data);

    setLoading(false);

    if (result?.error) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="w-full max-w-md mx-auto rounded-lg p-8 bg-white dark:bg-zinc-900">
      <h2 className="text-2xl font-bold text-center mb-2">Reset your LaunchSpark password</h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-center mb-6">
        Enter your email to receive reset instructions
      </p>
      {submitted ? (
        <div className="text-center text-green-600">
          If your email is in our system, we've sent you a reset link.
        </div>
      ) : (
        <Form onSubmit={onSubmit}>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
            className="mb-4"
          />
          <Button loading={loading} className="w-full">
            Send Reset Link
          </Button>
          {error && (
            <div className="text-sm text-red-500 mt-2 text-center">{error}</div>
          )}
        </Form>
      )}
      <div className="flex flex-col gap-2 items-center mt-6">
        <span className="text-sm">
          Remembered your password?{" "}
          <button
            type="button"
            className="text-primary underline hover:opacity-80"
            onClick={() => router.push("/auth#signin")}
          >
            Sign in.
          </button>
        </span>
      </div>
    </div>
  );
}