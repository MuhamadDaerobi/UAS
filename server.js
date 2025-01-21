const express = require('express');
const { tambah } = require('./src/app');
const { getMenu } = require('./src/menu');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// API endpoints
app.get('/api/menu', (req, res) => {
  res.json(getMenu());
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
