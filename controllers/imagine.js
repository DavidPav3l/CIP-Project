// IMPORTURI NECESARE
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();
const CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
const sharp = require('sharp');
// CONFIG GPT API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// CONFIG CLOUDMERSIVE API
const defaultClient = CloudmersiveImageApiClient.ApiClient.instance;
const Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = process.env.CLOUD_KEY;

var apiInstance = new CloudmersiveImageApiClient.RecognizeApi();

const photoInput = async (req, res) => {
  const imgData = req.body.img;
  if (!imgData) res.status(400).end('caca');

  try {
    const bufferData = Buffer.from(imgData, 'base64');
    const image = sharp(bufferData);
    const metadata = await image.metadata();
    const isPNG = metadata.format === 'png';
    if (!isPNG) {
      image.png();
    }
    const maxDimension = Math.max(metadata.width, metadata.height);
    const paddedImage = await image
      .resize(maxDimension, maxDimension, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      })
      .toBuffer();

    paddedImage.name = 'image.png';
    const response = await openai.createImageVariation(
      paddedImage,
      3,
      '1024x1024'
    );
    res.status(200).send(response.data);
  } catch (error) {
    res.status(404).send(error);
  }
};

const descpInput = async (req, res) => {
  const imgData = req.body.img;
  if (!imgData) res.status(400).end('caca');
  try {
    const bufferData = Buffer.from(imgData, 'base64');
    apiInstance.recognizeDescribe(bufferData, function (error) {
      const data = JSON.parse(error.response.res.text).BestOutcome.Description;
      openai
        .createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `You must respond in Romanian. Translate the following text in Romanian: ${data}`,
            },
          ],
          temperature: 0.5,
        })
        .then((romanianData) => {
          res.status(200).send(romanianData.data.choices[0].message);
        });
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { photoInput, descpInput };
