const express = require('express');
const router = express.Router();
const experiences = require('../db/data');

router.get('/', (req, res) => {
  res.json(experiences);
});

module.exports = router;
