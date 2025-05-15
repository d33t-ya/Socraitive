import React from 'react';
import { cn } from '@/lib/utils';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'list' | 'small';
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export function Typography({
  variant = 'p',
  as,
  className,
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  const Component = as || getDefaultElement(variant);

  return (
    <Component className={cn(getVariantClasses(variant), className)} {...props}>
      {children}
    </Component>
  );
}

function getDefaultElement(variant: TypographyProps['variant']) {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'blockquote':
      return 'blockquote';
    case 'list':
      return 'ul';
    case 'small':
      return 'small';
    default:
      return 'p';
  }
}

function getVariantClasses(variant: TypographyProps['variant']) {
  switch (variant) {
    case 'h1':
      return 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl';
    case 'h2':
      return 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0';
    case 'h3':
      return 'scroll-m-20 text-2xl font-semibold tracking-tight';
    case 'h4':
      return 'scroll-m-20 text-xl font-semibold tracking-tight';
    case 'blockquote':
      return 'mt-6 border-l-2 border-border pl-6 italic';
    case 'list':
      return 'my-6 ml-6 list-disc [&>li]:mt-2';
    case 'small':
      return 'text-sm font-medium leading-none';
    default:
      return 'leading-7';
  }
}
