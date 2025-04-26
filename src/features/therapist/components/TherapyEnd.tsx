import React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { ArrowLeftIcon, CircleCheckBig, PlayIcon } from 'lucide-react';
import { AccentButton, accentButtonClassnames } from '@/components/custom';

type TherapyEndProps = {
  setTherapyStatus: (status: 'notStarted' | 'ongoing' | 'ended') => void;
};

export const TherapyEnd = ({ setTherapyStatus }: TherapyEndProps) => {
  const handleStartNewSession = () => {
    setTherapyStatus('notStarted');
  };

  return (
    <div className="my-auto flex flex-col items-center">
      <CircleCheckBig className="size-24 text-[#4CAF50]" />
      <p className="my-4 px-4 text-center font-medium">Therapy session has ended.</p>
      <p className="text-balance text-center text-sm text-muted-foreground">
        Thank you for participating in this therapy session. We hope it was beneficial for your mental wellness.
      </p>

      <AccentButton className="mt-6 w-full bg-[#4CAF50] hover:bg-[#3e8e41]" onClick={handleStartNewSession}>
        <PlayIcon className="mr-2 size-4" />
        Start New Session
      </AccentButton>
      <Link href="/" className={cn(accentButtonClassnames, 'mt-2 w-full bg-[#2e7d32]')}>
        <ArrowLeftIcon className="mr-2 size-4" />
        Back to Home
      </Link>
    </div>
  );
};
