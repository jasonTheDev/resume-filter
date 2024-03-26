import React, { useState, useEffect } from 'react';
import ExperienceList from './components/ExperienceList';

function App() {

  const [experiences, setExperiences] = useState([{}]);

  useEffect(() => {
    fetch("/experiences").then(
      response => response.json()
    ).then(
      data => { setExperiences(data.experiences);
      }
    )
  }, []);

  return (
    <div>
      <h1>Resume Builder</h1>
      {(typeof experiences === 'undefined') ? (
        <p>Loading...</p>
      ): (
        <ExperienceList experiences={experiences} />
      )}
      
    </div>
  )
}

export default App
