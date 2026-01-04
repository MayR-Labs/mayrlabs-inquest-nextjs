'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/auth-provider';
import { LoginInterface } from '@/components/auth/login-interface';
import { siteConfig } from '@/lib/config/site';
import { Logo } from '@/components/ui/logo';

export default function GetStartedPage() {
  const { user, status } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (status === 'success' && user) {
      router.push('/');
    }
  }, [user, status, router]);

  if (status === 'loading' || status === 'updating') {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="bg-background flex min-h-screen flex-col lg:flex-row">
      {/* Left Side - Branding/Info */}
      <div className="bg-muted/30 relative hidden flex-1 flex-col justify-center p-12 lg:flex">
        <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-5" />
        <div className="bg-primary/20 absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-accent/10 absolute right-0 bottom-0 h-96 w-96 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-lg">
          <div className="mb-8">
            <div className="mb-6 flex">
              <Logo className="origin-left scale-125" />
            </div>
            <p className="text-muted-foreground text-xl">{siteConfig.description}</p>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Easy form creation', color: 'green' },
              { title: 'Real-time response tracking', color: 'blue' },
              { title: 'Secure and reliable', color: 'purple' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-${item.color}-500/20 text-${item.color}-500`}
                >
                  ✓
                </div>

                <span className="font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex flex-1 flex-col items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:hidden">
            <h1 className="text-2xl font-bold">{siteConfig.name}</h1>
            <p className="text-muted-foreground mt-2 text-sm">Sign in to get started</p>
          </div>

          <div className="bg-card border-border rounded-2xl border p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-bold">Welcome back</h2>
            <LoginInterface />
          </div>

          <p className="text-muted-foreground text-center text-sm">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
