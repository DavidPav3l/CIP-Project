const express = require('express');
const rezumatRout = require('./routes/rezumat');
const diagnosticRout = require('./routes/diagnostic');
const imagineRout = require('./routes/imagine');
const fileUpload = require('express-fileupload');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 6060;

app.use(express.static(__dirname + '/front-end/public'));
app.use(fileUpload());
app.use(express.json({ limit: '50mb' }));

app.use('/rezumat', rezumatRout);
app.use('/diagnostic', diagnosticRout);
app.use('/imagine', imagineRout);

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on port ${port}...`);
});
