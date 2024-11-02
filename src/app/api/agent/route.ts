import { NextResponse } from 'next/server';

import { textToSpeech } from '@/services/text-to-speech';
import { speechToText } from '@/services/speech-to-text';
import { getAICompletion } from '@/services/interview-agent';
import { addAgentResponse, addUserResponse, START_PROMPT, stripAgentTag } from '@/common/services/prompt-builder';

export async function POST(request: Request) {
  const { data, context, isStart }: { data: string; context: string; isStart: boolean } = await request.json();
  const audio = Buffer.from(data, 'base64');
  const transcription = await speechToText(audio);

  let prompt: string;
  if (isStart) {
    prompt = addUserResponse(START_PROMPT, transcription);
  } else {
    prompt = addUserResponse(context, transcription);
  }
  let response = await getAICompletion(prompt);
  if (response) {
    response = stripAgentTag(response);
    const audioBuffer = await textToSpeech(response);
    return new Response(
      JSON.stringify({
        data: audioBuffer.toString('base64'),
        context: addAgentResponse(context, response),
      })
    );
  }
  return NextResponse.json({ error: 'No response from AI' }, { status: 400 });
}
