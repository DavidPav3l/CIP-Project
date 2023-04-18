// IMPORTURI NECESARE
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();
const sharp = require('sharp');
// CONFIG GPT API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

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
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { photoInput };
