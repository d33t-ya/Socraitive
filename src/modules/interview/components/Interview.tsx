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
  const { startRecording, stopRecording, recordingBlob, recordingTime, isRecording } = useAudioRecorder();

  const [aiSpeaking, setAISpeaking] = useState<boolean>(false);
  const [personSpeaking, setPersonSpeaking] = useState<boolean>(false);
  const [interviewStatus, setInterviewStatus] = useState<InterviewStatus>('notStarted');
  const [hasRecorded, setHasRecorded] = useState<boolean>(false); // New state to track if recording occurred

  const isSilent = useSilenceDetection(personSpeaking && interviewStatus === 'ongoing' && isRecording);

  const handleEndInterview = () => {
    setInterviewStatus('ended');
    stopRecording();
  };

  // Consolidated useEffect for handling AI and person speaking logic
  useEffect(() => {
    if (aiSpeaking) {
      if (isRecording) {
        stopRecording(); // Stop recording if AI is speaking
      }
      setPersonSpeaking(false); // Ensure person is not speaking
    } else if (personSpeaking) {
      startRecording(); // Start recording when the person speaks
    }
  }, [aiSpeaking, personSpeaking, isRecording, startRecording, stopRecording]);

  // Handle silence detection logic and API interaction when silence is detected
  useEffect(() => {
    if (isSilent && personSpeaking) {
      console.log('Silence detected for more than 3 seconds. Stopping audio streaming...');
      stopRecording(); // Stop recording on silence
    }
  }, [isSilent, personSpeaking, stopRecording]);

  const interactWithAI = useCallback(async () => {
    if (!(recordingBlob instanceof Blob)) {
      console.error('Invalid recordingBlob:', recordingBlob);
      return; // Exit if recordingBlob is not valid
    }

    const base64Data = (await convertBlobToBase64(recordingBlob)) as string;

    const response = await fetch('http://localhost:3000/api/agent', {
      method: 'POST',
      body: JSON.stringify({ data: base64Data, context: '', isStart: true }), // Adjust context and isStart as needed
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
      const audioData = jsonResponse.data; // The base64 audio string returned
      playAudio(audioData); // Function to play the audio
    } else {
      console.error('No audio data found in response');
    }
  }, [recordingBlob]);

  // Only call interactWithAI when the recording has ended
  useEffect(() => {
    if (recordingBlob && interviewStatus === 'ongoing' && !hasRecorded) {
      setHasRecorded(true); // Set that recording has occurred
      setAISpeaking(true);
      setPersonSpeaking(false);
      interactWithAI(); // Call API with the recording blob
    }
  }, [recordingBlob, interactWithAI, interviewStatus, hasRecorded]);

  return (
    <section className="flex w-full max-w-4xl flex-col rounded-lg bg-white px-4">
      <InterviewHeader />

      <div className="my-6 grid grid-cols-2 gap-4">
        <Candidate personSpeaking={personSpeaking} />

        <div className="flex h-96 flex-col gap-4">
          {/* {interviewStatus === 'ongoing' && (
            <span className="ml-auto w-max rounded-2xl bg-[#3a63ff] px-4 py-1 text-sm text-white">
              {recordingTime}s
            </span>
          )} */}

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
