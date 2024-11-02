import { AccentButton } from '@/common/components';
import { PlayIcon } from 'lucide-react';
import React from 'react';

type InterviewStartProps = {
  setInterviewStatus: (status: 'notStarted' | 'ongoing' | 'ended') => void;
};

export const InterviewStart = ({ setInterviewStatus }: InterviewStartProps) => {
  return (
    <div className="my-auto flex flex-col items-center gap-4">
      <p className="px-4 text-center">Click &quot;Start Interview&quot; button to begin your interview.</p>
      <p className="text-balance border-b border-current text-center text-sm text-muted-foreground">
        Ensure your microphone is enabled for the best experience.
      </p>

      <AccentButton className="mt-2 w-full" onClick={() => setInterviewStatus('ongoing')}>
        <PlayIcon className="mr-2 size-4" />
        Start Interview
      </AccentButton>
    </div>
  );
};
