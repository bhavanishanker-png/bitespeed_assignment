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
    await db.query(query, [longUrl, shortUrl]);
    return res.status(200).json({ message: "Short URL created!", shortUrl: `${shortUrl}` });
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal server error");
  }
};

// GET: Redirect to the original URL
const redirectToLongUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const query = 'SELECT long_url FROM url_shortener WHERE short_url = ?';
    const [results] = await db.query(query, [shortUrl]);
    console.log(shortUrl)
    if (results.length > 0) {
      const longUrl = results[0].long_url;
      return res.redirect(longUrl);
    } else {
      return res.status(404).json({ message: "Short URL not found" });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// POST: Get the shortened URL
const getShortenUrl = async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ message: "Long URL is required" });
  }

  try {
    const query = 'SELECT short_url FROM url_shortener WHERE long_url = ?';
    const [results] = await db.query(query, [longUrl]);

    if (results.length > 0) {
      const shortUrl = `${results[0].short_url}`;
      return res.status(200).json({ shortUrl, longUrl });
    } else {
      return res.status(404).json({
        message: "Long URL not found in the database. Please post it first to generate a short URL.",
        longUrl,
      });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { shortenUrl, getShortenUrl, redirectToLongUrl };
