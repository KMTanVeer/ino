import { type ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassContainerProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export function GlassContainer({ children, className, hoverGlow = false }: GlassContainerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl glass transition-all duration-500",
        hoverGlow && "hover:[--glass-border:rgba(37,99,235,0.45)] dark:hover:[--glass-border:rgba(37,99,235,0.45)] hover:[--glass-bg:rgba(255,255,255,0.75)] dark:hover:[--glass-bg:rgba(15,15,18,0.72)] hover:shadow-[0_16px_40px_rgba(59,130,246,0.12)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent dark:from-white/10 dark:via-white/5 opacity-70 pointer-events-none" />
      {/* Liquid glass highlight effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-black/5 dark:via-white/10 to-transparent" />
      
      {children}
    </div>
  );
}
