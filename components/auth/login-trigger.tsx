'use client';

import { useState } from 'react';
import { LoginInterface } from './login-interface';

export function LoginTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary text-primary-foreground rounded-full px-6 py-2 font-medium transition hover:opacity-90"
      >
        Get Started
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-card text-card-foreground relative w-full max-w-md rounded-2xl p-6 shadow-xl">
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground absolute top-4 right-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="mb-6 text-center text-2xl font-bold">Sign In</h2>
            <LoginInterface />
          </div>
        </div>
      )}
    </>
  );
}
