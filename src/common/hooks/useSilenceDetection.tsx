import { useState, useEffect } from 'react';

const MIN_DECIBELS = -45;
const SILENCE_DURATION = 3000;

export default function useSilenceDetection(isRecording: boolean): boolean {
  const [isSilent, setIsSilent] = useState<boolean>(false);

  useEffect(() => {
    if (!isRecording) {
      // If not recording, reset silence state and exit early
      setIsSilent(false);
      return;
    }

    const handleSilenceDetection = async (): Promise<void> => {
      try {
        const stream: MediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext: AudioContext = new AudioContext();
        const audioStreamSource: MediaStreamAudioSourceNode = audioContext.createMediaStreamSource(stream);
        const analyser: AnalyserNode = audioContext.createAnalyser();
        analyser.minDecibels = MIN_DECIBELS;
        audioStreamSource.connect(analyser);

        const bufferLength: number = analyser.frequencyBinCount;
        const domainData: Uint8Array = new Uint8Array(bufferLength);

        let silenceStartTime: number | null = null;

        const detectSound = (): void => {
          analyser.getByteFrequencyData(domainData);

          const isCurrentlySilent: boolean = domainData.every((value) => value === 0);

          if (isCurrentlySilent) {
            if (silenceStartTime === null) {
              silenceStartTime = performance.now();
            } else if (performance.now() - silenceStartTime > SILENCE_DURATION) {
              setIsSilent(true);
            }
          } else {
            silenceStartTime = null;
            setIsSilent(false);
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
      // Cleanup any audio context or streams if necessary
    };
  }, [isRecording]); // Add isRecording as a dependency

  return isSilent;
}
