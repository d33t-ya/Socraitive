const MIN_DECIBELS = -45;
const SILENCE_DURATION = 3000; // 3 seconds in milliseconds

export const silenceDetection = () => {
  let isSilence = false;
  let silenceTimer: number | undefined;

  // Function to update the `isSilence` value
  const updateSilence = (value: boolean) => {
    isSilence = value;
    console.log('isSilence:', isSilence);
  };

  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    const audioChunks: BlobPart[] = [];
    mediaRecorder.addEventListener('dataavailable', (event) => {
      audioChunks.push(event.data);
    });

    const audioContext = new AudioContext();
    const audioStreamSource = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.minDecibels = MIN_DECIBELS;
    audioStreamSource.connect(analyser);

    const bufferLength = analyser.frequencyBinCount;
    const domainData = new Uint8Array(bufferLength);

    const detectSound = () => {
      analyser.getByteFrequencyData(domainData);

      // Check if there's sound
      const hasSound = domainData.some((value) => value > 0);

      if (hasSound) {
        // Reset silence timer if sound is detected
        if (silenceTimer) clearTimeout(silenceTimer);
        updateSilence(false);

        // Restart the timer for silence detection
        silenceTimer = window.setTimeout(() => {
          updateSilence(true); // Set `isSilence` to true if no sound for 3 seconds
        }, SILENCE_DURATION);
      }

      // Continuously check for sound
      window.requestAnimationFrame(detectSound);
    };

    window.requestAnimationFrame(detectSound);

    mediaRecorder.addEventListener('stop', () => {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();

      console.log({ isSilence });
    });
  });

  return {
    getIsSilence: () => isSilence,
    updateSilence,
  };
};
