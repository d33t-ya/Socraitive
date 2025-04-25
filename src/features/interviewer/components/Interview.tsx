'use client';

import { useEffect, useState } from 'react';
import { Square } from 'lucide-react';
import { AccentButton } from '@/components/custom';
import { useAudioRecorder } from 'react-audio-voice-recorder';

import { AI } from './AI';
import { Candidate } from './Candidate';
import { InterviewEnd } from './InterviewEnd';
import { InterviewStart } from './InterviewStart';
import { playAudio } from '@/lib/play-audio';
import { InterviewHeader } from './InterviewHeader';
import { convertBlobToBase64 } from '@/lib/blob-to-base64';
import useSilenceDetection, { clearSilenceStartTime } from '@/hooks/useSilenceDetection';

type InterviewStatus = 'notStarted' | 'ongoing' | 'ended';

export const Interview = () => {
  const { startRecording, stopRecording, recordingBlob, isRecording } = useAudioRecorder();

  const [isFirstInteraction, setIsFirstInteraction] = useState<boolean>(true);
  const [aiTurnToSpeak, setAITurnToSpeak] = useState<boolean>(false);
  const [personTurnToSpeak, setPersonTurnToSpeak] = useState<boolean>(false);
  const [interviewStatus, setInterviewStatus] = useState<InterviewStatus>('notStarted');

  const { isSilent, setIsSilent } = useSilenceDetection(
    personTurnToSpeak && interviewStatus === 'ongoing' && isRecording,
    stopRecording
  );

  const handleEndInterview = () => {
    setInterviewStatus('ended');
    if (isRecording) stopRecording();
    setAITurnToSpeak(false);
    setPersonTurnToSpeak(false);
  };

  const handleAISpeaking = () => {
    setPersonTurnToSpeak(false);
    setAITurnToSpeak(true);
    if (isRecording) stopRecording();
  };

  // Call the agent API to interact with AI whilst handling the audio response and using the history of the conversation as context
  const callAgentAPI = async (isStart: boolean) => {
    if (!(recordingBlob instanceof Blob)) {
      console.error('Invalid recordingBlob:', recordingBlob);
      return;
    }

    const base64Data = (await convertBlobToBase64(recordingBlob)) as string;

    // Check if it's the first interaction to set the context
    const context = isFirstInteraction ? '' : localStorage.getItem('previousContext');
    setIsFirstInteraction(false);

    const response = await fetch(`/api/agent`, {
      method: 'POST',
      body: JSON.stringify({ data: base64Data, context, isStart }),
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

      // Store the content from the response as the context for the next call
      if (jsonResponse.context) {
        localStorage.setItem('previousContext', jsonResponse.context);
      }

      handleAISpeaking();
      playAudio(audioData, setAITurnToSpeak, setPersonTurnToSpeak, setIsSilent, startRecording);
    } else {
      console.error('No audio data found in response');
    }
  };

  // Check for silence detection & call the agent API (interact with AI)
  useEffect(() => {
    const handleSilence = async () => {
      if (isSilent && personTurnToSpeak) {
        console.log('Silence detected for more than 3 seconds. Stopping audio streaming...');
        setPersonTurnToSpeak(false);
        clearSilenceStartTime();

        await callAgentAPI(isFirstInteraction);

        clearSilenceStartTime();
      }
    };

    handleSilence();
  }, [isSilent, personTurnToSpeak]);

  return (
    <section className="flex w-full max-w-4xl flex-col rounded-lg bg-white px-4">
      <InterviewHeader />

      <div className="my-6 grid grid-cols-2 gap-4">
        <Candidate personSpeaking={personTurnToSpeak} />

        <div className="flex h-96 flex-col gap-4">
          {interviewStatus === 'ongoing' && <AI aiSpeaking={aiTurnToSpeak} />}
          {interviewStatus === 'ongoing' && (
            <AccentButton className="w-full bg-red-700" onClick={handleEndInterview}>
              <Square className="mr-2 size-4" />
              End Interview
            </AccentButton>
          )}

          {interviewStatus === 'notStarted' && (
            <InterviewStart
              setAISpeaking={setAITurnToSpeak}
              startRecording={startRecording}
              setPersonSpeaking={setPersonTurnToSpeak}
              setInterviewStatus={setInterviewStatus}
            />
          )}

          {interviewStatus === 'ended' && <InterviewEnd setInterviewStatus={setInterviewStatus} />}
        </div>
      </div>
    </section>
  );
};
