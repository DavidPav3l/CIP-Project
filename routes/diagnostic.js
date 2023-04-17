const express = require('express');
const router = express.Router();
const { textInput } = require('../controllers/diagnostic');

router.post('/', textInput);

module.exports = router;
