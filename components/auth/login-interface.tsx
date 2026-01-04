'use client';

import { FirebaseLoginInterface } from './firebase-login-interface';
import { NullLoginInterface } from './null-login-interface';
import { env } from '@/lib/env';

export function LoginInterface() {
  const provider = env.NEXT_PUBLIC_AUTH_PROVIDER;

  if (provider === 'firebase') return <FirebaseLoginInterface />;

  return <NullLoginInterface />;
}
