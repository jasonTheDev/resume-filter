import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ExperienceList from './components/ExperienceList';
import ExperienceFilter from './components/ExperienceFilter';

function App() {

  const [experiences, setExperiences] = useState();
  const [filteredExperiences, setFilteredExperiences] = useState();
  const [uniqueTags, setUniqueTags] = useState([]);
  const [filterTag, setFilterTag] = useState('All');

  // fetch experiences data from API
  useEffect(() => {
    fetch("/api/experiences").then(
      response => response.json()
    ).then(
      data => {
        setExperiences(data);
        setFilteredExperiences(data);
      }
    )
  }, []);

  // update the unique tags
  useEffect(() => {
    // avoid running before loaded
    if (typeof experiences !== 'undefined') {
      const tagSet = new Set();
      experiences.forEach(experience => {
        experience.bullets.forEach(bullet => {
          bullet.tags.forEach(tag => {
            tagSet.add(tag);
          });
        });
      });
      setUniqueTags([...tagSet]);
    }
  }, [experiences]);

  // update filtered experiences
  useEffect(() => {
    // avoid running before loaded
    if (typeof experiences !== 'undefined') {
      if (filterTag === "All") {
        setFilteredExperiences(experiences);
      }
      else {
        const filteredExperiences = experiences.map(experience => {
          const filteredBullets = experience.bullets.filter(bullet => bullet.tags.includes(filterTag));
          return {
            ...experience,
            bullets: filteredBullets
          };
        }).filter(experience => experience.bullets.length > 0); // remove empty experiences
        setFilteredExperiences(filteredExperiences);
      }
    }
  }, [filterTag]);

  return (
    <div>
      <Container className="mt-3">
        <h1 className="App-title">Resume Builder</h1>
        {(typeof filteredExperiences === 'undefined') ? (
          <p>Loading...</p>
        ): (
          <div>
            <ExperienceFilter
              uniqueTags={uniqueTags}
              filterTag={filterTag}
              setFilterTag={setFilterTag}
            />
            <ExperienceList experiences={filteredExperiences} />
          </div>
        )}
      </Container>
    </div>
  )
}

export default App
