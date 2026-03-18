"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function DashboardClient() {
  const router = useRouter();
  // Simulated recent activity
  const [activity] = useState([
    {
      id: 1,
      text: "You invited sarah@acme.com to LaunchSpark.",
      time: "2 hours ago",
    },
    {
      id: 2,
      text: "Your campaign 'Spring Promo' was sent.",
      time: "1 day ago",
    },
  ]);
  useEffect(() => {
    // Fallback: can bring focus to main CTA if needed
    // (Effect intentionally left minimal for branding update)
  }, []);

  return (
    <section className="w-full pb-8 pt-4 px-2 sm:px-8 xl:px-16 flex flex-col gap-5">
      <h1 className="text-3xl font-bold mb-1">Welcome to LaunchSpark</h1>
      <p className="text-zinc-700 dark:text-zinc-300 mb-4 max-w-2xl">
        Get started by adding your contacts and launching your first campaign!
      </p>
      <div className="flex gap-4 flex-wrap mb-8">
        <Button className="px-8 py-3 text-base" onClick={() => router.push("/dashboard/campaigns/new")}>
          Create Campaign
        </Button>
        <Button
          variant="outline"
          className="px-8 py-3 text-base"
          onClick={() => router.push("/dashboard/contacts")}
        >
          Add Contacts
        </Button>
      </div>
      <Card className="mb-8 max-w-3xl">
        <div className="px-6 pt-6 flex flex-row justify-between items-center">
          <div className="text-lg font-semibold">Recent Activity</div>
          <Button size="sm" variant="ghost" onClick={() => router.push("/dashboard/team")}>
            Invite your team to LaunchSpark
          </Button>
        </div>
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-800 my-4">
          {activity.map((item) => (
            <li key={item.id} className="flex justify-between items-center px-6 py-3">
              <span>{item.text}</span>
              <span className="text-xs text-zinc-500">{item.time}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}