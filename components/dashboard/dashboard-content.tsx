"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardContent() {
  // Demo local CRUD data only; not persisted (acts as reference pattern)
  const [projects, setProjects] = useState<{ id: number; name: string }[]>([]);
  const [editing, setEditing] = useState<{ id: number; name: string } | null>(
    null
  );

  return (
    <section className="w-full flex flex-col gap-10 pt-4">
      <h2 className="text-2xl font-bold">Welcome to LaunchSpark</h2>
      <p className="max-w-2xl text-zinc-700 dark:text-zinc-300">
        Get started by adding your contacts and launching your first campaign!
      </p>
      <Card className="max-w-xl">
        <div className="flex flex-row justify-between items-center px-6 pt-6">
          <div className="font-semibold text-lg mb-1">Your Projects</div>
          <Button
            size="sm"
            onClick={() => setEditing({ id: 0, name: "" })}
          >
            Create Campaign
          </Button>
        </div>
        {/* This is a demo modal pattern; no DB/persistence */}
        {/* ...rest of local CRUD logic unchanged, omitted for brevity... */}
      </Card>
    </section>
  );
}