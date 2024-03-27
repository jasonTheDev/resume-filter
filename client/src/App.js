import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ExperienceList from './components/ExperienceList';
import ExperienceFilter from './components/ExperienceFilter';

function App() {

  const [experiences, setExperiences] = useState();
  const [uniqueTags, setUniqueTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('All');

  // fetch experiences data from API
  useEffect(() => {
    fetch(`/api/experiences?tag=${selectedTag}`).then(
      response => response.json()
    ).then(
      data => {
        setExperiences(data);
      }
    )
  }, [selectedTag]);

  // update the unique tags
  useEffect(() => {
    fetch("/api/experiences/tags").then(
      response => response.json()
    ).then(
      data => {
        setUniqueTags(data);
      }
    )
  }, []);

  return (
    <div>
      <Container className="mt-3">
        <h1>Resume Filter</h1>
        <p class="subtitle">Click a tag to retrieve filtered experiences from Express back-end.</p>
        {(typeof experiences === 'undefined') ? (
          <p>Loading...</p>
        ): (
          <>
            <ExperienceFilter
              uniqueTags={uniqueTags}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
            <ExperienceList experiences={experiences} />
          </>
        )}
      </Container>
    </div>
  )
}

export default App;