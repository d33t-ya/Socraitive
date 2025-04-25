import { Dispatch, SetStateAction } from 'react';
import { clearSilenceStartTime } from '../hooks/useSilenceDetection';

// Play the audio response from the AI
export const playAudio = (
  base64Audio: string,
  setAITurnToSpeak: Dispatch<SetStateAction<boolean>>,
  setPersonTurnToSpeak: Dispatch<SetStateAction<boolean>>,
  setIsSilent: Dispatch<SetStateAction<boolean>>,
  startRecording: () => void
) => {
  const audioSrc = `data:audio/wav;base64,${base64Audio}`; // Adjust the MIME type as necessary
  const audio = new Audio(audioSrc);

  audio
    .play()
    .then(() => {
      console.log('Audio is playing');
    })
    .catch((error) => {
      console.error('Error playing audio:', error);
    });

  audio.onended = () => {
    clearSilenceStartTime();
    setAITurnToSpeak(false);
    setPersonTurnToSpeak(true);

    startRecording();
    setIsSilent(false);
  };
};
