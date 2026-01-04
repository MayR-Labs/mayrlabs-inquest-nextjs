'use client';

import { auth } from '@/lib/firebase-client';
import { signOut } from 'firebase/auth';

export function AdminDashboard() {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <span className="text-primary mb-1 block text-sm font-medium">Admin Portal</span>
            <h1 className="text-3xl font-bold">Overview</h1>
          </div>
          <button
            onClick={() => signOut(auth)}
            className="border-border bg-card text-card-foreground hover:bg-muted rounded-lg border px-4 py-2 text-sm font-medium"
          >
            Sign Out
          </button>
        </header>

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
