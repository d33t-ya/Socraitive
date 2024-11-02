import { useState, useEffect } from 'react';

const MIN_DECIBELS = -45;
const SILENCE_DURATION = 3000;

export default function useSilenceDetection() {
  const [isSilent, setIsSilent] = useState(false);

  useEffect(() => {
    const handleSilenceDetection = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new AudioContext();
        const audioStreamSource = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.minDecibels = MIN_DECIBELS;
        audioStreamSource.connect(analyser);

        const bufferLength = analyser.frequencyBinCount;
        const domainData = new Uint8Array(bufferLength);

        let silenceStartTime: number | null = null;

        const detectSound = () => {
          analyser.getByteFrequencyData(domainData);

          const isCurrentlySilent = domainData.every((value) => value === 0);

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
  }, []);

  return isSilent;
}
