import { speechToText } from '@/services/speech-to-text';
import fs from 'fs';

export async function GET(request: Request) {
  const readStream = fs.readFileSync('output.wav');
  const response = await speechToText(readStream);
  return new Response(response);
}
