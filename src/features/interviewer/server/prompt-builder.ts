export const START_PROMPT = `Interviewer: Hi, Can you introduce yourself?`;

export function addUserResponse(prompt: string, userResponse: string) {
  return prompt + `\nCandidate: ${userResponse}`;
}

export function addAgentResponse(prompt: string, agentResponse: string) {
  return prompt + `\nInterviewer: ${agentResponse}`;
}

// Strip the "Interviewer:" tag from the prompt at the beginning
export function stripAgentTag(prompt: string): string {
  return prompt.replace(/^Interviewer:/gm, '');
}
