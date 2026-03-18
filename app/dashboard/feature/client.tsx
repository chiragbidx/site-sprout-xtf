"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function FeatureClient({
  features,
  onCreate,
  onUpdate,
  onDelete,
}: {
  features?: any[];
  onCreate?: (data: any) => void;
  onUpdate?: (data: any) => void;
  onDelete?: (id: string) => void;
}) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-2">Welcome to LaunchSpark Feature Explorer</h1>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300">
        Use this dashboard to manage features for your campaigns. Add contacts, design templates, and send with ease!
      </p>
      <Button onClick={() => setDialogOpen(true)} className="mb-8">
        Create Feature
      </Button>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        {/* Feature creation form content here */}
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-2">
            Create a new feature in LaunchSpark
          </h2>
          <Input placeholder="Feature name" className="mb-4" />
          <div className="flex gap-2">
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setDialogOpen(false)}>Create</Button>
          </div>
        </div>
      </Dialog>
      <Card className="mt-6">
        <div className="px-6 pt-6 flex flex-row justify-between items-center">
          <div className="text-lg font-semibold">Your Features</div>
        </div>
        {/* Table/list of features would go here */}
      </Card>
    </div>
  );
}