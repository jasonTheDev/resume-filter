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

router.get('/tags', (req, res) => {
  const tags = getUniqueTags();
  res.json(tags);
});

router.get('/', (req, res) => {
  console.log(req.query);
  const tag = req.query.tag;
  const filteredExperiences = filterByTag(tag);
  res.json(filteredExperiences);
});

module.exports = router;
