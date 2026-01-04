'use client';

import { siteConfig } from '@/lib/config/site';
import { Logo } from '@/components/ui/logo';
import { UserMenu } from '@/components/auth/user-menu';
import { useAuth } from '@/components/providers/auth-provider';

export function Header() {
  const { user } = useAuth();

  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {user && <UserMenu />}
      </div>
    </header>
  );
}
