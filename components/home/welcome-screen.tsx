'use client';

import { LoginTrigger } from '@/components/auth/login-trigger';
import { siteConfig } from '@/lib/config/site';
import { motion } from 'framer-motion';
import { FileText, Shield, Sparkles, Network } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Network: <Network className="h-6 w-6" />,
};

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function WelcomeScreen() {
  const { welcome } = siteConfig;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVars}
            className="mb-6 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 dark:border-blue-900/30 dark:bg-blue-900/10 dark:text-blue-400"
          >
            {welcome.hero.badge}
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            variants={itemVars}
            className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl"
          >
            {welcome.hero.title}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {welcome.hero.titleGradient}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVars}
            className="mb-10 max-w-2xl text-lg text-zinc-600 sm:text-xl dark:text-zinc-400"
          >
            {welcome.hero.description}
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVars} className="mb-20">
            <LoginTrigger />
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {welcome.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVars}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-200 hover:bg-white/80 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-blue-800 dark:hover:bg-zinc-900/80"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/20 dark:text-blue-400">
                  {iconMap[feature.icon as keyof typeof iconMap]}
                </div>
                <h3 className="mb-2 text-lg font-semibold dark:text-zinc-100">{feature.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer copyright */}
      <div className="absolute bottom-4 text-xs text-zinc-400">
        &copy; {siteConfig.copyright.year} {siteConfig.copyright.organization}
      </div>
    </div>
  );
}
