import React from 'react';
import { PlayIcon } from 'lucide-react';
import { AccentButton } from '@/components/custom';
import { cn } from '@/lib/utils';
import { CallStatus } from './Therapy';
import { HeartFilledIcon } from '@radix-ui/react-icons';

type TherapyStartProps = {
  callStatus: CallStatus;
  handleCall: () => Promise<void>;
};

export const TherapyStart = ({ callStatus, handleCall }: TherapyStartProps) => {
  const isConnecting = callStatus === CallStatus.CONNECTING;

  return (
    <div className="my-auto flex flex-col items-center gap-4">
      <p className="px-4 text-center">Click &quot;Start Session&quot; button to begin your therapy session.</p>
      <p className="text-balance border-b border-current text-center text-sm text-muted-foreground">
        Ensure your microphone is enabled for the best experience.
      </p>

      <AccentButton
        className={cn('mt-2 w-full bg-[#4CAF50] hover:bg-[#3e8e41]', isConnecting && 'pointer-events-none opacity-75')}
        onClick={handleCall}
        disabled={isConnecting}
      >
        {isConnecting ? (
          <span className="animate-pulse">Connecting...</span>
        ) : (
          <>
            <HeartFilledIcon className="mr-2 size-4" />
            Start Session
          </>
        )}
      </AccentButton>
    </div>
  );
};
