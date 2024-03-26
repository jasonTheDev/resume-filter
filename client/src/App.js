import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import ExperienceList from './components/ExperienceList';

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
          <ExperienceList experiences={experiences} />
        )}
      </Container>
    </div>
  )
}

export default App
