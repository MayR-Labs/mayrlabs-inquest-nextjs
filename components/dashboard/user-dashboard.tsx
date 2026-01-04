'use client';

import { auth } from '@/lib/firebase-client';
import { signOut } from 'firebase/auth';

export function UserDashboard() {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <button
            onClick={() => signOut(auth)}
            className="border-border bg-card text-card-foreground hover:bg-muted rounded-lg border px-4 py-2 text-sm font-medium"
          >
            Sign Out
          </button>
        </header>

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
