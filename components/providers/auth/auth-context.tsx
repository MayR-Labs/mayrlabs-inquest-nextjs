'use client';

import { createContext, useContext } from 'react';
import { IUser } from '@/lib/types/models';
import { AuthProviderType, DBProviderType } from '@/lib/types/providers';

export interface AuthContextType {
  user: IUser | null;
  dbUser: IUser | null;
  authUser: Record<string, unknown> | null;
  auth_provider: AuthProviderType;
  db_provider: DBProviderType;
  status: 'loading' | 'updating' | 'success' | 'error';
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  dbUser: null,
  authUser: null,
  auth_provider: 'null',
  db_provider: 'null',
  status: 'loading',
});

export const useAuth = () => useContext(AuthContext);
