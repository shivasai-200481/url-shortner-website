const {handleGenerateShortUrl} = require('../controllers/url.js')
const express = require('express');
const router = express.Router();
router.post('/',handleGenerateShortUrl);

module.exports = {
    router,
}