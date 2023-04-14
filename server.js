const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 6060;

app.use(express.static('./front-end/public'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on port ${port}...`);
});
