import React from 'react';

import { cn } from '@/lib/utils';
import { AudioLines, MicOff } from 'lucide-react';

type AIProps = {
  isSpeaking: boolean;
};

export const AI = ({ isSpeaking }: AIProps) => {
  return (
    <div
      className={cn(
        'relative flex flex-1 items-center justify-center rounded-lg border-4',
        isSpeaking ? 'border-[#3e8e41] bg-[#4CAF50]' : 'border-[#4CAF50] bg-[#4CAF50]'
      )}
    >
      <span
        className={cn(
          'flex aspect-square size-24 items-center justify-center rounded-full bg-[#3e8e41] text-2xl font-bold leading-none text-white',
          { 'animate-pulse ring-8 ring-[#2e7d32]/30': isSpeaking }
        )}
      >
        AI
      </span>
      <span className="absolute bottom-2 left-2 rounded-sm bg-white px-2 py-1 text-xs font-semibold text-[#3e8e41]">
        Emma AI
      </span>
      <span className="absolute bottom-2 right-2 flex aspect-square size-8 items-center justify-center rounded-full bg-white px-2 py-1 text-xl font-medium text-[#3e8e41]">
        {isSpeaking ? <AudioLines className="size-5 animate-pulse" /> : <MicOff className="size-5" />}
      </span>
    </div>
  );
};
