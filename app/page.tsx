'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/auth-provider';
import { AdminDashboard } from '@/components/dashboard/admin-dashboard';
import { UserDashboard } from '@/components/dashboard/user-dashboard';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  const { user, status } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (status === 'success' && !user) {
      router.push('/get-started');
    }
  }, [user, status, router]);

  if (status === 'loading' || status === 'updating' || !user) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {user.role === 'admin' ? <AdminDashboard /> : <UserDashboard />}
      </main>

      <Footer />
    </div>
  );
}
