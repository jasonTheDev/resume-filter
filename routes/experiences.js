const express = require('express');
const router = express.Router();
const experiences = require('../db/data');

function filterByTag(tag) {
  if (typeof tag === 'undefined' || tag === "All") {
    return experiences;
  }
  else {
    const filteredExperiences = experiences.map(experience => {
      const filteredBullets = experience.bullets.filter(bullet => bullet.tags.includes(tag));
      return {
        ...experience,
        bullets: filteredBullets
      };
    }).filter(experience => experience.bullets.length > 0); // remove empty experiences
    return filteredExperiences;
  }
}

router.get('/', (req, res) => {
  const tag = req.query.tag;
  const filteredExperiences = filterByTag(tag);
  res.json(filteredExperiences);
});

module.exports = router;
