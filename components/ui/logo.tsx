'use client';

import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/config/site';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-lg font-bold">
        M
      </div>
      {showText && <span className="text-lg font-bold tracking-tight">{siteConfig.name}</span>}
    </div>
  );
}
