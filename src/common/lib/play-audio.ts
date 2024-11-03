export const playAudio = (
  base64Audio: string,
  setAISpeaking: React.Dispatch<React.SetStateAction<boolean>>,
  setPersonSpeaking: React.Dispatch<React.SetStateAction<boolean>>,
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
    })
    .finally(() => {
      setAISpeaking(false);
      setPersonSpeaking(true);
      // startRecording();
    });
};
