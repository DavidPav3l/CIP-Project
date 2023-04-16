const express = require('express');
const router = express.Router();

const { fileInput, textInput } = require('../controllers/rezumat');

router.post('/file', fileInput);
router.post('/text', textInput);

module.exports = router;
