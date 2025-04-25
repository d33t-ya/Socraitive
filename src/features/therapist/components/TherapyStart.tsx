import React from 'react';
import { PlayIcon } from 'lucide-react';
import { AccentButton } from '@/components/custom';

type TherapyStartProps = {
  startRecording: () => void;
  setAISpeaking: (speaking: boolean) => void;
  setPersonSpeaking: (speaking: boolean) => void;
  setTherapyStatus: (status: 'notStarted' | 'ongoing' | 'ended') => void;
};

export const TherapyStart = ({
  setAISpeaking,
  startRecording,
  setPersonSpeaking,
  setTherapyStatus,
}: TherapyStartProps) => {
  const handleStartTherapy = () => {
    setAISpeaking(true);
    setPersonSpeaking(false);
    setTherapyStatus('ongoing');
  };

  return (
    <div className="my-auto flex flex-col items-center gap-4">
      <p className="px-4 text-center">Click &quot;Start Session&quot; button to begin your therapy session.</p>
      <p className="text-balance border-b border-current text-center text-sm text-muted-foreground">
        Ensure your microphone is enabled for the best experience.
      </p>

      <AccentButton className="mt-2 w-full bg-[#4CAF50] hover:bg-[#3e8e41]" onClick={handleStartTherapy}>
        <PlayIcon className="mr-2 size-4" />
        Start Session
      </AccentButton>
    </div>
  );
};
