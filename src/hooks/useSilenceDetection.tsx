import { useState, useEffect, useMemo } from 'react';

const MIN_DECIBELS = -45;
const SILENCE_DURATION = 3000;
let silenceStartTime: number | null = null;

export const clearSilenceStartTime = (): void => {
  silenceStartTime = null;
};

export default function useSilenceDetection(
  isRecording: boolean,
  stopRecording: () => void
): {
  isSilent: boolean;
  setIsSilent: React.Dispatch<React.SetStateAction<boolean>>;
} {
  const [isSilent, setIsSilent] = useState<boolean>(false);
  useEffect(() => {
    if (isSilent) {
      return;
    }
    if (!isRecording) {
      // Reset silence state when not recording
      // setIsSilent(false);
      return;
    }

    let audioContext: AudioContext | null = null;
    let stream: MediaStream | null = null;

    const handleSilenceDetection = async (): Promise<void> => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioContext = new AudioContext();
        const audioStreamSource = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.minDecibels = MIN_DECIBELS;
        audioStreamSource.connect(analyser);

        const bufferLength = analyser.frequencyBinCount;
        const domainData = new Uint8Array(bufferLength);

        const detectSound = (): void => {
          analyser.getByteFrequencyData(domainData);

          const isCurrentlySilent = domainData.every((value) => value === 0);

          if (isCurrentlySilent) {
            if (silenceStartTime === null) {
              silenceStartTime = performance.now();
            } else if (performance.now() - silenceStartTime > SILENCE_DURATION) {
              setIsSilent(true);
              console.log('Silence detected');
              silenceStartTime = null;
              stopRecording();
            }
          } else {
            silenceStartTime = null;
            // setIsSilent(false);
          }

          window.requestAnimationFrame(detectSound);
        };

        window.requestAnimationFrame(detectSound);
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    };

    handleSilenceDetection();

    return () => {
      // Clean up audio context and stop stream
      if (audioContext) {
        audioContext.close();
      }
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isRecording, stopRecording, setIsSilent, isSilent]);
  // Memoize the return object to avoid unnecessary re-renders
  return useMemo(
    () => ({
      isSilent,
      setIsSilent,
    }),
    [isSilent, setIsSilent]
  );
}
