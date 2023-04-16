const express = require('express');
const rezumatRout = require('./routes/rezumat');

const fileUpload = require('express-fileupload');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 6061;

app.use(express.static(__dirname + '/front-end/public'));
app.use(fileUpload());
app.use(express.json());

app.use('/rezumat', rezumatRout);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
