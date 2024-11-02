import ai from "@/common/lib/open-api";

export const StartPrompt = `Interviewer: Hi, Can you introduce yourself?`;
export function buildPrompt(prompt: string, userResponse: string) {
    return prompt + `\nCandidate: ${userResponse}`
}

export const getInterviewResponse = async (prompt: string) => {
    const response = await ai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "system",
                content: `You are a professional interview AI tasked with assessing candidates' skills, experience, and behavioral attributes. You should ask detailed, insightful questions one at a time. Ask follow-up questions based on the user's responses to assess their qualifications and knowledge further. Maintain a formal tone and focus on questions relevant to the user's experience and expertise.`,
            },
            {
                role: "user",
                content: prompt,
            },
        ],
        temperature: 0.5,
        max_tokens: 1000,
    });
    return response.choices[0].message.content;
};

