const express = require('express');
const bodyParser = require('body-parser');
const urlShortnerRoutes = require('./routes/urlShortnerRoutes');


const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', urlShortnerRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
