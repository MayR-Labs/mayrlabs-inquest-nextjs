'use client';

import { auth } from '@/lib/firebase-client';
export function AdminDashboard() {
  return (
    <div className="bg-background min-h-[calc(100vh-4rem)] p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <span className="text-primary mb-1 block text-sm font-medium">Admin Portal</span>
          <h1 className="text-3xl font-bold">Overview</h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-4">
          <div className="border-border bg-card rounded-xl border p-6 shadow-sm">
            <div className="text-muted-foreground text-sm font-medium">Total Users</div>
            <div className="mt-2 text-3xl font-bold">0</div>
          </div>
          <div className="border-border bg-card rounded-xl border p-6 shadow-sm">
            <div className="text-muted-foreground text-sm font-medium">Active Forms</div>
            <div className="mt-2 text-3xl font-bold">0</div>
          </div>
          <div className="border-border bg-card rounded-xl border p-6 shadow-sm">
            <div className="text-muted-foreground text-sm font-medium">Total Responses</div>
            <div className="mt-2 text-3xl font-bold">0</div>
          </div>
          <div className="border-border bg-card rounded-xl border p-6 shadow-sm">
            <div className="text-muted-foreground text-sm font-medium">System Status</div>
            <div className="mt-2 text-lg font-medium text-green-600">Healthy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
