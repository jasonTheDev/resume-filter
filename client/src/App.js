import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ExperienceList from './components/ExperienceList';
import ExperienceFilter from './components/ExperienceFilter';

function App() {

  const [experiences, setExperiences] = useState();
  const [uniqueTags, setUniqueTags] = useState([]);
  const [filterTag, setFilterTag] = useState('All');

  // fetch experiences data from API
  useEffect(() => {
    fetch(`/api/experiences?tag=${filterTag}`).then(
      response => response.json()
    ).then(
      data => {
        setExperiences(data);
      }
    )
  }, [filterTag]);

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
        <h1>Resume Builder</h1>
        {(typeof experiences === 'undefined') ? (
          <p>Loading...</p>
        ): (
          <>
            <ExperienceFilter
              uniqueTags={uniqueTags}
              filterTag={filterTag}
              setFilterTag={setFilterTag}
            />
            <ExperienceList experiences={experiences} />
          </>
        )}
      </Container>
    </div>
  )
}

export default App
