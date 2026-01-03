'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string; errorCode?: string; missingVar?: string; serviceName?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const isConfigError = error.errorCode || error.message.includes('Service Configuration Error');

  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-6 text-white">
        <div className="max-w-md text-center">
          <h1 className="mb-4 text-4xl font-bold text-red-500">
            {isConfigError ? 'Configuration Error' : 'System Error'}
          </h1>

          <p className="mb-6 text-gray-300">
            The application failed to start due to a configuration issue.
          </p>

          {isConfigError && (error.errorCode || error.message) && (
            <div className="mb-6 overflow-x-auto rounded-md border border-gray-700 bg-gray-800 p-4 text-left font-mono text-sm">
              <p className="text-yellow-400">
                Error Code: {error.errorCode || 'UNKNOWN_CONFIG_ERR'}
              </p>
              {error.serviceName && <p>Service: {error.serviceName}</p>}
              {error.missingVar && <p>Missing Variable: {error.missingVar}</p>}
              <p className="mt-2 text-gray-500">{error.message}</p>
            </div>
          )}

          <p className="mb-8 text-sm text-gray-400">
            Please check your <code className="rounded bg-gray-800 px-1 py-0.5">.env</code> file and
            ensure all required variables are set. Refer to{' '}
            <code className="rounded bg-gray-800 px-1 py-0.5">README.md</code> for setup
            instructions.
          </p>

          <button
            onClick={() => reset()}
            className="rounded-md bg-blue-600 px-6 py-2 transition-colors hover:bg-blue-500"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
