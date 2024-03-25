const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send("Resume Builder!");
});

app.get('/api', (req, res) => {
  res.json({ "title": "Resume Builder from API!" });
});

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});
