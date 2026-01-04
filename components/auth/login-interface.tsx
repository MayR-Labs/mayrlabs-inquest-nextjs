'use client';

import { FirebaseLoginInterface } from './firebase-login-interface';
import { NullLoginInterface } from './null-login-interface';
import { clientEnv } from '@/lib/env.client';

export function LoginInterface() {
  const provider = clientEnv.NEXT_PUBLIC_AUTH_PROVIDER;

  if (provider === 'firebase') return <FirebaseLoginInterface />;

  return <NullLoginInterface />;
}
