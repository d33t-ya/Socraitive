import React from 'react';
import Link from 'next/link';

import { ArrowLeftIcon } from 'lucide-react';
import { PersonIcon } from '@radix-ui/react-icons';

export const TherapyHeader = () => {
  return (
    <header className="flex items-center justify-between gap-8 py-3" suppressHydrationWarning>
      <Link href="/" className="flex items-center gap-1 rounded-2xl bg-[#4CAF50] px-3 py-1 text-sm text-white">
        <ArrowLeftIcon className="size-4" />
        Back to Home
      </Link>

      <h1 className="text-xl font-bold text-[#4CAF50]">AI Therapy</h1>

      <div className="flex items-center gap-1">
        <span className="flex aspect-square items-center justify-center rounded-full bg-[#4CAF50] p-1 text-white">
          <PersonIcon className="size-3.5" />
        </span>
        <span className="text-sm">Swanand Wagh</span>
      </div>
    </header>
  );
};
