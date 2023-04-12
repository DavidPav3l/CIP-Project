const express = require('express');

const app = express();
const port = 6060;

app.use(express.static('./front-end/public'));

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
