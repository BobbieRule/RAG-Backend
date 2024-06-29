import OpenAI from 'openai';
import { retrieveDocumentContent } from './document.helper.js';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateResponse = async (document, query) => {
  const documentContent = retrieveDocumentContent(document);

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `Based on the following documents, generate a response to the query:\n ${documentContent}`,
      },
      {
        role: 'user',
        content: query,
      },
    ],
    temperature: 0.7,
    max_tokens: 64,
    top_p: 1,
  });

  console.log('response', response);

  return response.data.choices[0].text.trim();
};
