'use client';

import { useState } from 'react';
import { useAuth } from '@/components/providers/auth-provider';
import { auth } from '@/lib/firebase-client';
import { signOut } from 'firebase/auth';
import { LogOut, User as UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function UserMenu() {
  const { user, authUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Use authUser for display properties (photo, name) as it comes from the provider (e.g. Google)
  // Fallback to dbUser (user) if needed, or defaults.
  const photoURL = (authUser?.photoURL as string) || null;
  const displayName = (authUser?.displayName as string) || user?.email || 'User';
  const initial = displayName[0]?.toUpperCase() || 'U';

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-border bg-card hover:bg-muted/50 flex items-center gap-2 rounded-full border p-1 pr-3 transition-colors"
      >
        <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
          {photoURL ? (
            <img src={photoURL} alt={displayName} className="h-full w-full object-cover" />
          ) : (
            <span className="text-sm font-medium">{initial}</span>
          )}
        </div>
        <span className="hidden max-w-[100px] truncate text-sm font-medium sm:block">
          {displayName}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className="border-border bg-card absolute top-full right-0 z-50 mt-2 w-56 rounded-xl border p-2 shadow-lg"
            >
              <div className="text-muted-foreground border-border/50 mb-1 border-b px-2 py-1.5 text-sm">
                <p className="text-foreground truncate font-medium">{displayName}</p>
                <p className="truncate text-xs">{user?.email}</p>
              </div>

              <button
                onClick={handleSignOut}
                className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-red-950/30"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
