const express = require('express');
const router = express.Router();

const { photoInput } = require('../controllers/imagine');

router.post('/', photoInput);

module.exports = router;
