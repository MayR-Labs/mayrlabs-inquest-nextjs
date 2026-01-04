'use client';

import { auth } from '@/lib/firebase-client';
export function UserDashboard() {
  return (
    <div className="bg-background min-h-[calc(100vh-4rem)] p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Dashboard</h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder cards */}
          <div className="border-border bg-card rounded-xl border p-6 shadow-sm">
            <h3 className="text-lg font-medium">My Forms</h3>
            <p className="text-muted-foreground mt-2">You haven't created any forms yet.</p>
            <button className="text-primary mt-4 hover:underline">Create New Form</button>
          </div>

          <div className="border-border bg-card rounded-xl border p-6 shadow-sm">
            <h3 className="text-lg font-medium">Recent Responses</h3>
            <p className="text-muted-foreground mt-2">No recent activity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
