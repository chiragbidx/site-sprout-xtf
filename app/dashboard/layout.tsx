import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { getAuthSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();
  if (!session) {
    redirect("/auth#signin");
  }
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <SidebarNav />
      <main className="flex-1 min-w-0 flex flex-col">{children}</main>
    </div>
  );
}