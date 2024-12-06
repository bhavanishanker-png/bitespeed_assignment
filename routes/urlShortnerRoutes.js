const express = require('express');
const { shortenUrl, getShortenUrl, redirectToLongUrl } = require('../controllers/urlShortnerController');

const router = express.Router();

// Route to shorten a URL
router.post('/url', shortenUrl);
// Route to get the shortened URL for a given long URL
router.get('/url', getShortenUrl);
// Route to handle redirection from short URL to long URL
router.get('/:shortUrl', redirectToLongUrl);

// Default route for testing or debugging
router.get('/', (req, res) => {
    res.send("Welcome to the URL Shortener API!");
});

module.exports = router;
