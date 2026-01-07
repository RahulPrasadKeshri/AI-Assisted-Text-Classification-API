const axios = require("axios");

exports.getClassificationFromAI = async (text) => {
  const prompt = `
Classify the following text into one of these categories:
Complaint, Query, Feedback, Other.

Text: "${text}"

Respond ONLY in valid JSON format like:
{
  "category": "Complaint",
  "confidence": 0.85
}
`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2
    },
    {
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  const aiMessage = response.data.choices[0].message.content;

  return JSON.parse(aiMessage);
};
