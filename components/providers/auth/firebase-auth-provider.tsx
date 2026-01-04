'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase-client';
import { AuthContext, AuthContextType } from './auth-context';
import { syncUser } from '@/app/actions/auth';
import { IUser } from '@/lib/types/models';

import { clientEnv } from '@/lib/env.client';

export const FirebaseAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authUser, setAuthUser] = useState<Record<string, unknown> | null>(null);
  const [dbUser, setDbUser] = useState<IUser | null>(null);
  const [status, setStatus] = useState<'loading' | 'updating' | 'success' | 'error'>('loading');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setStatus('updating');
        setAuthUser(JSON.parse(JSON.stringify(firebaseUser)));

        try {
          const syncedUser = await syncUser(firebaseUser.email, {
            uid: firebaseUser.uid,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
            providerId: firebaseUser.providerData[0]?.providerId,
          });

          if (syncedUser) {
            setDbUser(syncedUser);
            setStatus('success');
          } else {
            setDbUser(null);
            setStatus('error');
          }
        } catch (err) {
          console.error('User sync failed:', err);
          setDbUser(null);
          setStatus('error');
        }
      } else {
        setAuthUser(null);
        setDbUser(null);
        setStatus('success');
      }
    });

    return () => unsubscribe();
  }, []);

  const value: AuthContextType = {
    user: dbUser,
    dbUser,
    authUser,
    auth_provider: 'firebase',
    db_provider: clientEnv.NEXT_PUBLIC_DB_PROVIDER,
    status,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
