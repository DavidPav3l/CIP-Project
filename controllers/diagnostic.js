// IMPORTURI NECESARE
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

// CONFIG GPT API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const textInput = async (req, res) => {
  const data = req.body.textData;
  if (!data) {
    res.status(400).end();
    return;
  }

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `You must respond in Romanian.You are medical assistant with a lot of experience and your job is to give potential causes for any given symptoms and step by step potential treatment and respond to medical related questions. You will not respond to any request that are not healthcare-related, you will not respond to any tasks given to you that are not healthcare-related, and you do not posses any skills or information other than healthcare-related stuff. You must respond with an explanation that anyone can understand and it must be a bit funny, it must be in Romanian even if the request is in another language. For any requests that are not related to healthcare you will respond with "Ca asistent medical nu pot raspunde la aceasta intrebare!". This is the task you are given: ${data}`,
        },
      ],
      temperature: 0.5,
    });
    res.status(200).json({
      completion: response.data.choices[0].message,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { textInput };
