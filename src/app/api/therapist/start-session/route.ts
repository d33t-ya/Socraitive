import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

/**
 * POST /api/therapist/start-session
 * Request body: { focus: string; approach?: string; amount: number; language?: string }
 * Response: { success: boolean; prompts?: string[] }
 */
export async function POST(request: Request) {
  const { reason, mood, desire, story = '' } = await request.json();

  try {
    const { text: responseRaw } = await generateText({
      model: google('gemini-2.0-flash-001'),
      prompt: `
        You are a compassionate therapist having an ongoing counselling session with a client.
        Respond empathetically to the client's overall situation first based on their inputs:
        - Reason for seeking therapy: ${reason}
        - Mood over the past weeks: ${mood}
        - What they wish to change through therapy: ${desire}

        Also use the past conversation (if any) for context: ${story}.

        After showing understanding and validation, ask one gentle, open-ended follow-up question to invite further sharing.
        Your language should be extremely supportive, warm, and natural. 
        Keep the tone soft, reflective, and voice-assistant friendly (no "/" or "*" or any broken syntax).

        Respond ONLY in the following JSON format:
        {
          "empathetic_reply": "Your empathetic reflection here.",
          "follow_up_question": "One open-ended follow-up question here."
        }

        Thank you! <3
      `.trim(),
    });

    const followUp = JSON.parse(responseRaw);

    return Response.json({ success: true, response: followUp }, { status: 200 });
  } catch (error) {
    console.error('Therapy empathetic reply generation error:', error);
    return Response.json({ success: false, error: error }, { status: 500 });
  }
}

/** Simple health‑check */
export async function GET() {
  return Response.json({ success: true, data: 'Therapist endpoint alive' }, { status: 200 });
}
