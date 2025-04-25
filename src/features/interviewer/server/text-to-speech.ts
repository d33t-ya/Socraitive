import ai from '@/lib/open-api';

export const textToSpeech = async (text: string): Promise<Buffer> => {
  try {
    // Ensure the ai.audio.speech.create method exists and is used correctly
    const response = await ai.audio.speech.create({
      model: 'tts-1',
      voice: 'alloy',
      input: text,
    });

    // Convert the response to a Buffer
    const buffer = Buffer.from(await response.arrayBuffer());
    return buffer;
  } catch (error) {
    // Log the error and throw a new error with a specific message
    console.error('Error converting text to speech:', error);
    throw new Error('Failed to convert text to speech');
  }
};
