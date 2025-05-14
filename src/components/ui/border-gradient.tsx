'use client';
import React from 'react';
import { cn } from '@/lib/utils';

export const BorderGradient = ({
  children,
  className,
  containerClassName,
  gradientClassName = 'from-[#4CAF50] via-[#7CB342] to-[#8BC34A]',
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  gradientClassName?: string;
}) => {
  return (
    <div className={cn('relative rounded-xl p-[1px]', containerClassName)}>
      <div
        className={cn('absolute inset-0 rounded-xl bg-gradient-to-r', gradientClassName)}
        style={{
          maskImage: 'linear-gradient(black, black)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
      />
      <div className={cn('relative rounded-xl bg-white', className)}>{children}</div>
    </div>
  );
};
