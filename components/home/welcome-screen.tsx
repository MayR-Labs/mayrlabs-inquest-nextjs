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
    <div className="bg-background text-foreground relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="bg-primary/20 absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-accent/10 absolute top-1/2 right-0 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-primary/20 absolute -bottom-40 left-1/3 h-96 w-96 rounded-full blur-3xl" />
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
            className="border-primary/20 bg-primary/10 text-primary mb-6 rounded-full border px-4 py-1.5 text-sm font-medium"
          >
            {welcome.hero.badge}
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            variants={itemVars}
            className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl"
          >
            {welcome.hero.title}{' '}
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              {welcome.hero.titleGradient}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVars}
            className="text-muted-foreground mb-10 max-w-2xl text-lg sm:text-xl"
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
                className="group border-border bg-card/50 hover:border-primary/50 hover:bg-card/80 relative overflow-hidden rounded-2xl border p-6 shadow-sm backdrop-blur-sm transition-colors"
              >
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
                  {iconMap[feature.icon as keyof typeof iconMap]}
                </div>
                <h3 className="dark:text-foreground mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer copyright */}
      <div className="text-muted-foreground absolute bottom-4 text-xs">
        &copy; {siteConfig.copyright.year} {siteConfig.copyright.organization}
      </div>
    </div>
  );
}
