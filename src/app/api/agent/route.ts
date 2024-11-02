import { getInterviewResponse } from '@/services/interview-agent';
import { addAgentResponse, addUserResponse, StartPrompt } from '@/services/prompt-builder';

export async function GET(request: Request) {}

export async function POST(request: Request) {
  const { prompt } = await request.json();
  let temp1 = addUserResponse(StartPrompt, "Hello, my name is ratnesh, I'm a CS grad");
  let temp2 = addAgentResponse(
    temp1,
    'Thank you for the introduction, Ratnesh. As a recent computer science graduate, could you elaborate on any specific areas or technologies you focused on during your studies? For example, were there any particular programming languages, frameworks, or projects that you found particularly engaging or that you specialized in?'
  );

  const response = await getInterviewResponse(addUserResponse(temp2, prompt));
  console.log(response);
  return new Response(response);
}
