import ai from '@/common/lib/open-api';

export const textToSpeech = async (text: string): Promise<Buffer> => {
  try {
    const response = await ai.audio.speech.create({
      model: 'tts-1',
      voice: 'alloy',
      input: text,
    });

    const buffer = Buffer.from(await response.arrayBuffer());
    return buffer;
  } catch (error) {
    console.error('Error converting text to speech:', error);
    throw new Error('Failed to convert text to speech');
  }
};
