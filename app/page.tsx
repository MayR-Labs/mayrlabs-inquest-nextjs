'use client';

import { useAuth } from '@/components/providers/auth-provider';
import { AdminDashboard } from '@/components/dashboard/admin-dashboard';
import { UserDashboard } from '@/components/dashboard/user-dashboard';
import { WelcomeScreen } from '@/components/home/welcome-screen';

export default function Home() {
  const { user, status } = useAuth();

  if (status === 'loading' || status === 'updating') {
    return (
      <div className="flex min-h-screen items-center justify-center dark:bg-black">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!user) return <WelcomeScreen />;

  if (user.role === 'admin') return <AdminDashboard />;

  return <UserDashboard />;
}
