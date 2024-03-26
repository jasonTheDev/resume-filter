const express = require('express');
const path = require('path');

const experiences = require('./db/data')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('client/build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.get('/experiences', (req, res) => {
  res.json(experiences);
});

// TODO: delete
app.get('/string', (req, res) => {
  res.send(JSON.stringify(experiences));
});

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});
