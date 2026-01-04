'use client';

import { auth } from '@/lib/firebase-client';
import { signOut } from 'firebase/auth';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <span className="mb-1 block text-sm font-medium text-blue-600">Admin Portal</span>
            <h1 className="text-3xl font-bold dark:text-white">Overview</h1>
          </div>
          <button
            onClick={() => signOut(auth)}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            Sign Out
          </button>
        </header>

        <div className="grid gap-6 sm:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-800">
            <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Users</div>
            <div className="mt-2 text-3xl font-bold dark:text-white">0</div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-800">
            <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Active Forms</div>
            <div className="mt-2 text-3xl font-bold dark:text-white">0</div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-800">
            <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Total Responses
            </div>
            <div className="mt-2 text-3xl font-bold dark:text-white">0</div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-800">
            <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              System Status
            </div>
            <div className="mt-2 text-lg font-medium text-green-600">Healthy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
