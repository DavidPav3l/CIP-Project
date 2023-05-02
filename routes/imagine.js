const express = require('express');
const router = express.Router();

const { photoInput, descpInput } = require('../controllers/imagine');

router.post('/', photoInput);
router.post('/descp', descpInput);

module.exports = router;
