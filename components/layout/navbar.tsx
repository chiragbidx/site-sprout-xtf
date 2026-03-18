"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
    { href: "/auth#signin", label: "Sign in" },
  ];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <Link
          href="/"
          className="font-bold text-xl text-primary tracking-tight mr-8"
          style={{ letterSpacing: "0.03em" }}
        >
          LaunchSpark
        </Link>
        <nav className="flex gap-4 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition hover:text-primary text-base",
                pathname === link.href ? "text-primary font-semibold" : "text-zinc-700 dark:text-zinc-200"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}