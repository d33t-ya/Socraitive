import { cn } from '@/features/landing/lib/utils';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const accentButtonClassnames =
  'hover:bg-accent-hover mx-auto flex w-max items-center justify-center rounded-md bg-[#3a63ff] px-5 py-2.5 text-sm text-white shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3a63ff] focus-visible:ring-opacity-75';

export const AccentButton: React.FunctionComponent<Readonly<Props>> = ({
  children,
  className,
  ...props
}): React.ReactElement => {
  return (
    <button {...props} className={cn(accentButtonClassnames, className)}>
      {children}
    </button>
  );
};
