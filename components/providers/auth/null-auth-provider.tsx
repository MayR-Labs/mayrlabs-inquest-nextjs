'use client';

import { AuthContext } from './auth-context';

export const NullAuthProvider = ({ children }: { children: React.ReactNode }) => {
  // In a null state, we are never authenticated and potentially always loading or just not functional
  // For the purpose of "no provider configured", we can say we are not loading, but also not authenticated.
  // We might want to expose an error or warning state if needed, but the interface doesn't support it yet.

  // It effectively behaves like a logged-out user, but maybe we should log a warning.
  if (typeof window !== 'undefined') {
    console.warn(
      'AuthProvider: No authentication provider configured. Please set NEXT_PUBLIC_AUTH_PROVIDER.',
    );
  }

  return (
    <AuthContext.Provider value={{ user: null, loading: false, isAdmin: false }}>
      {children}
    </AuthContext.Provider>
  );
};
