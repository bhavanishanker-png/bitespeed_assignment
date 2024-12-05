const db = require('../config/db'); // Assuming your DB connection is in '../config/db'

// Function to generate a short URL
function generateShortUrl(length = 8) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let shortUrl = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    shortUrl += characters[randomIndex];
  }
  return shortUrl;
}

// POST: Shorten a URL
const shortenUrl = async (req, res) => {
  const { longUrl } = req.body;
  
  if (!longUrl) {
    return res.status(400).json("Long URL required");
  }

  const shortUrl = generateShortUrl(4);

  try {

    const query = 'INSERT INTO url_shortener (long_url, short_url) VALUES (?, ?)';
    const result  = await db.query(query, [longUrl, shortUrl]);
    return res.status(200).json({ message: "Short URL created!" });
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal server error");
  }
};

// POST: Get the shortened URL
const getShortenUrl = async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json("Long URL required");
  }

  try {
    const query = 'SELECT short_url FROM url_shortener WHERE long_url = ?';
    const results = await db.query(query, [longUrl])
    console.log(results[0])
    if (results.length > 0) {
        return res.status(200).json({ shortUrl: results[0][0].short_url });
      } else {
        return res.status(404).json("Short URL not found");
      };
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal server error");
  }
};

module.exports = { shortenUrl, getShortenUrl };
