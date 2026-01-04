'use client';

import { useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@/lib/firebase-client';
import { authConfig } from '@/lib/config/firebase';
import Image from 'next/image';

export function FirebaseLoginInterface() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {authConfig.providers.google && (
        <button
          onClick={handleGoogleLogin}
          className="border-border bg-card text-card-foreground hover:bg-muted flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 font-medium"
        >
          <Image src="/assets/icons/google.svg" alt="Google" width={20} height={20} />
          Continue with Google
        </button>
      )}

      {authConfig.providers.google && authConfig.providers.emailPassword && (
        <div className="relative flex items-center py-2">
          <div className="border-border grow border-t"></div>
          <span className="text-muted-foreground shrink-0 px-2 text-xs">OR</span>
          <div className="border-border grow border-t"></div>
        </div>
      )}

      {authConfig.providers.emailPassword && (
        <form onSubmit={handleEmailAuth} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-input bg-background focus:border-primary w-full rounded-lg border px-3 py-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-input bg-background focus:border-primary w-full rounded-lg border px-3 py-2 focus:outline-none"
              required
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="bg-primary text-primary-foreground w-full rounded-lg px-4 py-2 font-medium hover:opacity-90"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>

          <p className="text-muted-foreground text-center text-sm">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-medium hover:underline"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </form>
      )}
    </div>
  );
}
