import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getJournalFeedback(journalText) {
  const prompt = `You are a mental wellness assistant. Analyze the following journal entry for emotional tone, mental health indicators, and suggest improvements or coping mechanisms. If the tone is concerning (e.g., anxiety, burnout, depression), gently guide the user with wellness tips, journaling prompts, mindfulness, and resources.\n\nJournal Entry:\n"${journalText}"\n\nFeedback:`;
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful and empathetic mental wellness assistant." },
      { role: "user", content: prompt },
    ],
    max_tokens: 300,
    temperature: 0.7,
  });
  return response.choices[0].message.content.trim();
} 