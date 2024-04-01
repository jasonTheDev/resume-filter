const express = require('express');
const path = require('path');
const experienceRouter = require('./routes/experiences');
const tagRouter = require('./routes/tags');

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api/experiences', experienceRouter);
app.use('/api/tags', tagRouter);

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});
