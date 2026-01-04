'use client';

import { FirebaseLoginInterface } from './firebase-login-interface';
import { NullLoginInterface } from './null-login-interface';

export function LoginInterface() {
  const provider = process.env.NEXT_PUBLIC_AUTH_PROVIDER;

  if (provider === 'firebase') return <FirebaseLoginInterface />;

  return <NullLoginInterface />;
}
