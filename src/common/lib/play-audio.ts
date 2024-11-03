export const playAudio = (base64Audio: string) => {
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
};
