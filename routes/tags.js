const express = require('express');
const router = express.Router();
const experiences = require('../db/data');


function getUniqueTags() {
  const tagSet = new Set();
  experiences.forEach(experience => {
    experience.bullets.forEach(bullet => {
      bullet.tags.forEach(tag => {
        tagSet.add(tag);
      });
    });
  });
  return [...tagSet];
}

router.get('/', (req, res) => {
  const tags = getUniqueTags();
  res.json(tags);
});

module.exports = router;
