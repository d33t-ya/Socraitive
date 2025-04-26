import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

/**
 * POST /api/vapi/generate
 * Request body: { focus: string; approach?: string; amount: number; language?: string }
 * Response: { success: boolean; prompts?: string[] }
 */
export async function POST(request: Request) {
  const { reason, mood, desire, language = 'english' } = await request.json();

  try {
    const { text: promptsRaw } = await generateText({
      model: google('gemini-2.0-flash-001'),
      prompt: `
        You are a compassionate therapist preparing reflective, open‑ended questions for a counselling session.
        Client's primary reason of why he need's therapy: ${reason}.
        Therapeutic approach preference: extremely supportive.
        Client's mood: ${mood}.
        Client's desire: ${desire}.
        Language: ${language}. 
      
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]
        
        Thank you! <3`,
    });

    const prompts: string[] = JSON.parse(promptsRaw);

    return Response.json({ success: true, prompts }, { status: 200 });
  } catch (error) {
    console.error('Therapy prompt generation error:', error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}

/** Simple health‑check */
export async function GET() {
  return Response.json({ success: true, data: 'Therapist endpoint alive' }, { status: 200 });
}
