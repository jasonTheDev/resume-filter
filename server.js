const express = require('express');
const path = require('path');
const experiencesRoutes = require('./routes/experiences');

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api/experiences', experiencesRoutes);

app.use(express.static('client/build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});
