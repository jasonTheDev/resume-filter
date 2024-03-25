const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send("Resume Builder!");
});

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});
