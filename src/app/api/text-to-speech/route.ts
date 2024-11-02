import { textToSpeech } from '@/services/text-to-speech';

import fs from 'fs';

function saveArrayBufferAsAudioFile(arrayBuffer: Buffer<ArrayBufferLike>, filename: string) {
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFile(filename, buffer, (err) => {
    if (err) {
      console.error('Error saving file:', err);
    } else {
      console.log(`File saved as ${filename}`);
    }
  });
}

export async function POST(request: Request) {
  const { text } = await request.json();
  const response = await textToSpeech(text);
  saveArrayBufferAsAudioFile(response, 'output.wav');
  return new Response('Done');
}
