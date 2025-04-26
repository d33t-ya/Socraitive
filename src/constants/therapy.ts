import { CreateAssistantDTO } from '@vapi-ai/web/dist/api';
import { z } from 'zod';

export const mappings = {};

export const therapist: CreateAssistantDTO = {
  name: 'Therapist',
  firstMessage:
    "Hello, I’m Emma—I’m really glad you reached out and I want you to know this is a safe, confidential space where you can speak freely about whatever is on your mind. I understand that meeting an AI therapist can feel a little nerve-racking, so we’ll move at a pace that’s comfortable for you and focus on helping you feel heard and supported from the very start. I will be asking you a couple of questions to understand what you're going through!",
  transcriber: {
    provider: 'deepgram',
    model: 'nova-2',
    language: 'en',
  },
  voice: {
    provider: '11labs',
    voiceId: 'bella', // calm, empathetic tone
    stability: 0.5,
    similarityBoost: 0.85,
    speed: 0.92,
    style: 0.6,
    useSpeakerBoost: true,
  },
  model: {
    provider: 'openai',
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: `You are a licensed mental‑health therapist providing real‑time, voice‑based counselling. Your priorities are to create psychological safety, practise active listening, and help the client explore thoughts and emotions. 

        Therapy Guidelines:
        1. **Start by establishing rapport** — thank the client for trusting you, affirm confidentiality, and invite them to describe what brings them in today.
        2. **Use active‑listening techniques** — reflect, paraphrase, and validate feelings before asking gentle follow‑up questions.
        3. **Ask open‑ended questions** about thoughts, feelings, behaviours, and coping strategies. Keep questions short; wait for full responses.
        4. **Avoid making diagnoses** or prescribing medication. Focus on exploration, insight, and evidence‑based coping tools (CBT, mindfulness, grounding, etc.).
        5. **Maintain neutrality & empathy** — no judgement, keep tone calm and supportive.
        6. **Handle crises**: if the client expresses intent to self‑harm or harm others, encourage professional help immediately (e.g., call emergency services or crisis line) and follow platform escalation policy.
        7. **Session closing** — summarise key themes, collaboratively set one homework or coping exercise, thank the client, and schedule or suggest next check‑in.

        *Speak in concise, conversational sentences suited to voice dialogue.*`,
      },
    ],
  },
};

/**
 * Structure for post‑session therapeutic feedback or notes
 */
export const sessionSummarySchema = z.object({
  moodSnapshot: z.string().describe("One‑word summary of the client's predominant mood"),
  insights: z.array(z.string()).describe('Key realisations or themes discussed'),
  copingStrategiesSuggested: z.array(z.string()),
  followUpActions: z.array(z.string()),
});

/**
 * Example session list (dummy data)
 */
export interface TherapySession {
  id: string;
  userId: string;
  focus: string; // e.g. "Anxiety management"
  createdAt: string;
  completed: boolean;
}

export const dummySessions: TherapySession[] = [
  {
    id: 'sess1',
    userId: 'user1',
    focus: 'Managing work stress',
    createdAt: '2024-03-20T09:00:00Z',
    completed: true,
  },
  {
    id: 'sess2',
    userId: 'user1',
    focus: 'Sleep difficulties',
    createdAt: '2024-03-22T18:30:00Z',
    completed: false,
  },
];
