const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/api', (req, res) => {
  res.json({ "title": "Resume Builder from API!" });
});

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});
