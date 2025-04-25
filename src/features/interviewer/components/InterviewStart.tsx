import React from 'react';
import { PlayIcon } from 'lucide-react';
import { AccentButton } from '@/components/custom';
import { textToSpeech } from '@/features/interviewer/server/text-to-speech';
import { clearSilenceStartTime } from '@/hooks/useSilenceDetection';

const AI_SPEECH_START =
  'Hello, and welcome to your interview! My name is ALEX, and I’ll be guiding you through this interview process. To ensure a smooth and structured interview, there’s a 3-second pause rule. If you stop speaking for longer than 3 seconds, I will take it as the end of your response and move to the next question. If you’re ready, let’s get started! So, Please tell me something about yourself!';

type InterviewStartProps = {
  startRecording: () => void;
  setAISpeaking: (speaking: boolean) => void;
  setPersonSpeaking: (speaking: boolean) => void;
  setInterviewStatus: (status: 'notStarted' | 'ongoing' | 'ended') => void;
};

export const InterviewStart = ({
  setAISpeaking,
  startRecording,
  setPersonSpeaking,
  setInterviewStatus,
}: InterviewStartProps) => {
  const handleStartInterview = () => {
    setAISpeaking(true);
    setPersonSpeaking(false);
    setInterviewStatus('ongoing');
    hearAIStart();
  };

  // Play the AI's introduction speech
  const hearAIStart = async () => {
    window.localStorage.clear();
    localStorage.setItem('previousContext', 'Interviewer: ' + AI_SPEECH_START);

    try {
      const response = await textToSpeech(AI_SPEECH_START);

      // Get the audio data as a Blob
      const audioBlob = new Blob([response], { type: 'audio/mpeg' });
      const audioUrl = URL.createObjectURL(audioBlob);

      const audio = new Audio(audioUrl);
      audio.play().catch((playbackError) => {
        console.error('Audio playback error:', playbackError);
      });

      // Clean up the URL after playback ends and switch speaking states
      audio.addEventListener('ended', () => {
        URL.revokeObjectURL(audioUrl);

        setAISpeaking(false);
        setPersonSpeaking(true);
        clearSilenceStartTime();
        startRecording();
      });
    } catch (error) {
      console.error('Error during text-to-speech:', error);
    }
  };

  return (
    <div className="my-auto flex flex-col items-center gap-4">
      <p className="px-4 text-center">Click &quot;Start Interview&quot; button to begin your interview.</p>
      <p className="text-balance border-b border-current text-center text-sm text-muted-foreground">
        Ensure your microphone is enabled for the best experience.
      </p>

      <AccentButton className="mt-2 w-full" onClick={handleStartInterview}>
        <PlayIcon className="mr-2 size-4" />
        Start Interview
      </AccentButton>
    </div>
  );
};
