'use client';

import { FirebaseAuthProvider } from './auth/firebase-auth-provider';
import { NullAuthProvider } from './auth/null-auth-provider';
import { useAuth } from './auth/auth-context';
import { clientEnv } from '@/lib/env.client';

export { useAuth };

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const provider = clientEnv.NEXT_PUBLIC_AUTH_PROVIDER;

  if (provider === 'firebase') return <FirebaseAuthProvider>{children}</FirebaseAuthProvider>;

  return <NullAuthProvider>{children}</NullAuthProvider>;
};
