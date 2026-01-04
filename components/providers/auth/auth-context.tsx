'use client';

import { createContext, useContext } from 'react';
import { User } from 'firebase/auth'; // We might want to abstract User type later, but for now Firebase User is fine or we create a generic one

// Abstracted User type if we want to be truly provider agnostic,
// but sticking to Firebase User for now as it's the current implementation detail
// If we switch providers, we might need a unified User interface.
export interface AuthContextType {
  user: User | null; // This might need to be generic if we support non-firebase
  loading: boolean;
  isAdmin: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAdmin: false,
});

export const useAuth = () => useContext(AuthContext);
