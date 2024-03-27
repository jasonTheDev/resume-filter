import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ExperienceList from './components/ExperienceList';
import ExperienceFilter from './components/ExperienceFilter';

function App() {

  const [experiences, setExperiences] = useState();

  useEffect(() => {
    fetch("/api/experiences").then(
      response => response.json()
    ).then(
      data => { setExperiences(data);
      }
    )
  }, []);

  return (
    <div>
      <Container className="mt-3">
        <h1 className="App-title">Resume Builder</h1>
        {(typeof experiences === 'undefined') ? (
          <p>Loading...</p>
        ): (
          <div>
            <ExperienceFilter experiences={experiences} />
            <ExperienceList experiences={experiences} />
          </div>
        )}
      </Container>
    </div>
  )
}

export default App
