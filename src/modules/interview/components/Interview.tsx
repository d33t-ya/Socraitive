'use client';

import { useCallback, useEffect, useState } from 'react';
import { Square } from 'lucide-react';
import { AccentButton } from '@/common/components';
import { useAudioRecorder } from 'react-audio-voice-recorder';
import { AI } from './AI';
import { Candidate } from './Candidate';
import { InterviewEnd } from './InterviewEnd';
import { InterviewStart } from './InterviewStart';
import { InterviewHeader } from './InterviewHeader';
import useSilenceDetection from '@/common/hooks/useSilenceDetection';
import { convertBlobToBase64 } from '@/common/lib/blob-to-base64';
import { playAudio } from '@/common/lib/play-audio';

type InterviewStatus = 'notStarted' | 'ongoing' | 'ended';

export const Interview = () => {
  const { startRecording, stopRecording, recordingBlob, isRecording } = useAudioRecorder();

  const [aiSpeaking, setAISpeaking] = useState<boolean>(false);
  const [personSpeaking, setPersonSpeaking] = useState<boolean>(false);
  const [interviewStatus, setInterviewStatus] = useState<InterviewStatus>('notStarted');

  const { isSilent } = useSilenceDetection(
    personSpeaking && interviewStatus === 'ongoing' && isRecording,
    stopRecording
  );

  const handleEndInterview = () => {
    setInterviewStatus('ended');
    if (isRecording) stopRecording();
    setAISpeaking(false);
    setPersonSpeaking(false);
  };

  const handlePersonSpeaking = () => {
    setAISpeaking(false); // Ensure AI is not speaking
    setPersonSpeaking(true);
    if (!isRecording) startRecording();
  };

  const handleAISpeaking = () => {
    setPersonSpeaking(false); // Ensure the person is not speaking
    setAISpeaking(true);
    if (isRecording) stopRecording();
  };

  const interactWithAI = useCallback(
    async (isStart: boolean) => {
      if (!(recordingBlob instanceof Blob)) {
        console.error('Invalid recordingBlob:', recordingBlob);
        return;
      }

      const base64Data = (await convertBlobToBase64(recordingBlob)) as string;

      const response = await fetch('http://localhost:3000/api/agent', {
        method: 'POST',
        body: JSON.stringify({ data: base64Data, context: '', isStart }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error('Failed to interact with AI:', response.statusText);
        return;
      }

      const jsonResponse = await response.json();
      if (jsonResponse.data) {
        const audioData = jsonResponse.data;
        handleAISpeaking();
        playAudio(audioData, setAISpeaking, setPersonSpeaking, startRecording);
      } else {
        console.error('No audio data found in response');
      }
    },
    [recordingBlob, startRecording] // Removed handlePersonSpeaking to prevent excess dependencies
  );

  useEffect(() => {
    if (isSilent && personSpeaking) {
      console.log('Silence detected for more than 3 seconds. Stopping audio streaming...');
      setPersonSpeaking(false);
      interactWithAI(false); // Trigger AI interaction upon silence detection
    }
  }, [isSilent, interactWithAI]); // Removed personSpeaking dependency

  return (
    <section className="flex w-full max-w-4xl flex-col rounded-lg bg-white px-4">
      <InterviewHeader />
      <div className="my-6 grid grid-cols-2 gap-4">
        <Candidate personSpeaking={personSpeaking} />
        <div className="flex h-96 flex-col gap-4">
          {interviewStatus === 'ongoing' && <AI aiSpeaking={aiSpeaking} />}
          {interviewStatus === 'ongoing' && (
            <AccentButton className="w-full bg-red-700" onClick={handleEndInterview}>
              <Square className="mr-2 size-4" />
              End Interview
            </AccentButton>
          )}
          {interviewStatus === 'notStarted' && (
            <InterviewStart
              setAISpeaking={setAISpeaking}
              startRecording={startRecording}
              setPersonSpeaking={setPersonSpeaking}
              setInterviewStatus={setInterviewStatus}
            />
          )}
          {interviewStatus === 'ended' && <InterviewEnd setInterviewStatus={setInterviewStatus} />}
        </div>
      </div>
    </section>
  );
};
