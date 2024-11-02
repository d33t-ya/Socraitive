import React from 'react';
import Link from 'next/link';

import { cn } from '@/common/lib/utils';
import { ArrowLeftIcon, CircleCheckBig, PlayIcon } from 'lucide-react';
import { AccentButton, accentButtonClassnames } from '@/common/components';

type InterviewEndProps = {
  setInterviewStatus: (status: 'notStarted' | 'ongoing' | 'ended') => void;
};

export const InterviewEnd = ({ setInterviewStatus }: InterviewEndProps) => {
  return (
    <div className="my-auto flex flex-col items-center">
      <CircleCheckBig className="size-24 text-[#3a63ff]" />
      <p className="my-4 px-4 text-center font-medium">Interview has ended.</p>
      <p className="text-balance text-center text-sm text-muted-foreground">
        Congratulations! You have successfully completed the interview. You can view the feedback and results in the
        dashboard.
      </p>

      <AccentButton className="mt-6 w-full" onClick={() => setInterviewStatus('notStarted')}>
        <PlayIcon className="mr-2 size-4" />
        Start New Interview
      </AccentButton>
      <Link href="/" className={cn(accentButtonClassnames, 'mt-2 w-full bg-[#03216d]')}>
        <ArrowLeftIcon className="mr-2 size-4" />
        Back to Home
      </Link>
    </div>
  );
};
