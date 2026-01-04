'use client';

import { auth } from '@/lib/firebase-client';
import { signOut } from 'firebase/auth';

export function UserDashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold dark:text-white">My Dashboard</h1>
          <button
            onClick={() => signOut(auth)}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            Sign Out
          </button>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder cards */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
            <h3 className="text-lg font-medium dark:text-white">My Forms</h3>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              You haven't created any forms yet.
            </p>
            <button className="mt-4 text-blue-600 hover:underline">Create New Form</button>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
            <h3 className="text-lg font-medium dark:text-white">Recent Responses</h3>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">No recent activity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
