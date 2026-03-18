"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, Send, FileText, BarChart2, Settings } from "lucide-react";

const sidebarLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Contacts",
    href: "/dashboard/contacts",
    icon: Users,
  },
  {
    label: "Campaigns",
    href: "/dashboard/campaigns",
    icon: Send,
  },
  {
    label: "Templates",
    href: "/dashboard/templates",
    icon: FileText,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart2,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col gap-2 min-w-[220px] h-full bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 p-4">
      <Link
        href="/dashboard"
        className="block font-black text-xl text-primary mb-8 tracking-wide"
        style={{ letterSpacing: "0.04em" }}
      >
        LaunchSpark
      </Link>
      <nav className="flex flex-col gap-1">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname && (pathname === link.href || pathname.startsWith(link.href + "/"));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 transition font-medium",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
              )}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}