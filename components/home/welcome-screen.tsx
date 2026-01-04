'use client';

import { LoginTrigger } from '@/components/auth/login-trigger';

const features = [
  {
    title: 'Dynamic Forms',
    description: 'Create complex forms with conditional logic and real-time validation.',
  },
  {
    title: 'Secure Data',
    description: 'Enterprise-grade security with role-based access control.',
  },
  {
    title: 'Instant Insights',
    description: 'Visualize responses and gather actionable insights instantly.',
  },
];

export function WelcomeScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-zinc-100 px-4 text-center dark:from-zinc-900 dark:to-black">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl dark:text-white">
          Welcome to <span className="text-blue-600">MayR Labs InQuest</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          A powerful platform for managing forms, surveys, and data collection with ease. Dynamic,
          secure, and built for scale.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <LoginTrigger />
        </div>

        <div className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-800">
              <h3 className="mb-2 text-lg font-semibold dark:text-white">{feature.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
