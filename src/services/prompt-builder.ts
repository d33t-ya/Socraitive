export const StartPrompt = `Interviewer: Hi, Can you introduce yourself?`;

export function addUserResponse(prompt: string, userResponse: string) {
  return prompt + `\nCandidate: ${userResponse}`;
}

export function addAgentResponse(prompt: string, agentResponse: string) {
  return prompt + `\nInterviewer: ${agentResponse}`;
}
