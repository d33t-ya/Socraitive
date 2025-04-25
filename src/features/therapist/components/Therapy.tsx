'use client';

import { useState } from 'react';
import { Square } from 'lucide-react';
import { AccentButton } from '@/components/custom';
import { useAudioRecorder } from 'react-audio-voice-recorder';

import { AI } from './AI';
import { Patient } from './Patient';
import { TherapyEnd } from './TherapyEnd';
import { TherapyStart } from './TherapyStart';
import { TherapyHeader } from './TherapyHeader';

type TherapyStatus = 'notStarted' | 'ongoing' | 'ended';

export const Therapy = () => {
  const { startRecording, stopRecording } = useAudioRecorder();

  const [aiTurnToSpeak, setAITurnToSpeak] = useState<boolean>(false);
  const [personTurnToSpeak, setPersonTurnToSpeak] = useState<boolean>(false);
  const [therapyStatus, setTherapyStatus] = useState<TherapyStatus>('notStarted');

  const handleEndTherapy = () => {
    setTherapyStatus('ended');
    setAITurnToSpeak(false);
    setPersonTurnToSpeak(false);
  };

  return (
    <section className="flex w-full max-w-4xl flex-col rounded-lg bg-white px-4">
      <TherapyHeader />

      <div className="my-6 grid grid-cols-2 gap-4">
        <Patient personSpeaking={personTurnToSpeak} />

        <div className="flex h-96 flex-col gap-4">
          {therapyStatus === 'ongoing' && <AI aiSpeaking={aiTurnToSpeak} />}
          {therapyStatus === 'ongoing' && (
            <AccentButton className="w-full bg-red-700" onClick={handleEndTherapy}>
              <Square className="mr-2 size-4" />
              End Session
            </AccentButton>
          )}

          {therapyStatus === 'notStarted' && (
            <TherapyStart
              setAISpeaking={setAITurnToSpeak}
              startRecording={startRecording}
              setPersonSpeaking={setPersonTurnToSpeak}
              setTherapyStatus={setTherapyStatus}
            />
          )}

          {therapyStatus === 'ended' && <TherapyEnd setTherapyStatus={setTherapyStatus} />}
        </div>
      </div>
    </section>
  );
};
