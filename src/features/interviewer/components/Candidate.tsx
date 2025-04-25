import React from 'react';

import { cn } from '@/lib/utils';
import { AudioLines, MicOff } from 'lucide-react';

type CandidateProps = {
  personSpeaking: boolean;
};

export const Candidate = ({ personSpeaking }: CandidateProps) => {
  return (
    <div
      className={cn(
        'relative flex h-96 items-center justify-center rounded-lg border-4 border-[#03216d] bg-[#03216d]',
        { 'border-[#3a63ff]': personSpeaking }
      )}
    >
      <span
        className={cn(
          'flex aspect-square size-32 items-center justify-center rounded-full bg-[#3a63ff] text-4xl font-bold leading-none text-white',
          { 'ring-8': personSpeaking }
        )}
      >
        SW
      </span>

      <span className="absolute bottom-2 left-2 rounded-sm bg-white px-2 py-1 text-xs font-semibold text-[#3a63ff]">
        Swanand Wagh
      </span>

      <span className="absolute bottom-2 right-2 flex aspect-square size-8 items-center justify-center rounded-full bg-white px-2 py-1 text-xl font-medium text-[#3a63ff]">
        {personSpeaking ? <AudioLines className="size-5" /> : <MicOff className="size-5" />}
      </span>
    </div>
  );
};
