const express = require('express');
const { shortenUrl, getShortenUrl } = require('../controllers/urlShortnerController');

const router = express.Router();

router.post('/url', shortenUrl);
router.get('/url', getShortenUrl)
router.get("/", (req, res) => {
    res.send("Hello, world!");
});
module.exports = router;
