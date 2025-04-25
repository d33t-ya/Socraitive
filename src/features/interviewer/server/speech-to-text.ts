import ai from '@/lib/open-api';

export const speechToText = async (audioBuffer: Buffer): Promise<string> => {
  try {
    const transcription = await ai.audio.transcriptions.create({
      file: new File([audioBuffer], 'audio.wav', { type: 'audio/wav' }),
      model: 'whisper-1',
    });

    return transcription.text;
  } catch (error) {
    console.error('Error transcribing audio:', error);
    throw new Error('Failed to transcribe audio');
  }
};
