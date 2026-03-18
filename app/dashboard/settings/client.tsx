"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SettingsClient({ user }: { user?: any }) {
  const [activeTab, setActiveTab] = useState<"profile" | "email" | "password" | "danger">("profile");
  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <div className="flex gap-4 mb-8">
        <Button onClick={() => setActiveTab("profile")} variant={activeTab === "profile" ? "default" : "outline"}>
          Profile
        </Button>
        <Button onClick={() => setActiveTab("email")} variant={activeTab === "email" ? "default" : "outline"}>
          Email
        </Button>
        <Button onClick={() => setActiveTab("password")} variant={activeTab === "password" ? "default" : "outline"}>
          Password
        </Button>
        <Button onClick={() => setActiveTab("danger")} variant={activeTab === "danger" ? "destructive" : "outline"}>
          Danger Zone
        </Button>
      </div>
      <div>
        {activeTab === "profile" && (
          <div>
            <h2 className="font-semibold mb-2">Profile Details</h2>
            {/* Profile form */}
          </div>
        )}
        {activeTab === "email" && (
          <div>
            <h2 className="font-semibold mb-2">Change Email</h2>
            {/* Email change form */}
          </div>
        )}
        {activeTab === "password" && (
          <div>
            <h2 className="font-semibold mb-2">Change Password</h2>
            {/* Password change form */}
          </div>
        )}
        {activeTab === "danger" && (
          <div>
            <h2 className="font-semibold mb-2">Delete Your LaunchSpark Account</h2>
            {/* Account deletion form */}
          </div>
        )}
      </div>
    </div>
  );
}