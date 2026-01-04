'use client';

export function NullLoginInterface() {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-red-800 dark:border-red-900 dark:bg-red-900/20 dark:text-red-300">
      <h3 className="font-semibold">Configuration Error</h3>

      <p className="mt-1 text-sm">
        No authentication provider is configured. Please check your environment variables.
      </p>
    </div>
  );
}
