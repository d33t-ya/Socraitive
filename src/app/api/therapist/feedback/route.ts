import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(request: Request) {
  const { reason, mood, desire, story = '', sessionDuration = '', clientName = 'Swanand Wagh' } = await request.json();

  try {
    const { text: reportText } = await generateText({
      model: google('gemini-2.0-flash-001'),
      prompt: `
You are a compassionate therapist assistant. Your job is to generate a clear, supportive final session report based on the client's therapy conversation.

Here are the details collected during the session:
- Client's Name (optional): ${clientName}
- Reason for seeking therapy: ${reason}
- Mood over the past weeks: ${mood}
- Desired change through therapy: ${desire}
- Full conversation story: ${story}
- Session duration (if available): ${sessionDuration}

Please summarize the key emotional themes, the progress made during this session, and suggest a few supportive next steps the client can take.
Be empathetic, encouraging, and affirm the client's efforts throughout.

Structure the output like this:
{
  "session_summary": "Concise emotional and thematic summary.",
  "progress_made": "Briefly describe any emotional insights or coping improvements.",
  "next_steps": ["Step 1", "Step 2", "Step 3"],
  "affirmation": "Kind closing message affirming the client's courage."
}

Respond ONLY in valid JSON.

Use voice-assistant friendly language (no /, *, or broken formatting).

Thank you! <3
      `.trim(),
    });

    const parsedReport = JSON.parse(reportText);

    return Response.json({ success: true, report: parsedReport }, { status: 200 });
  } catch (error) {
    console.error('Therapy feedback generation error:', error);
    return Response.json({ success: false, error: error }, { status: 500 });
  }
}
