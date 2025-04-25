import ai from '@/lib/open-api';

export const getAICompletion = async (prompt: string) => {
  try {
    const response = await ai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a professional interview AI tasked with assessing candidates' skills, experience, and behavioral attributes. You should ask detailed, insightful questions one at a time. Ask follow-up questions based on the user's responses to assess their qualifications and knowledge further. Maintain a formal tone and focus on questions relevant to the user's experience and expertise.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.5,
      max_tokens: 1000,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error getting interview response:', error);
    throw new Error('Failed to get interview response');
  }
};
