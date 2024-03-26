import { useState, useEffect } from 'react';
import Experience from './Experience';

function ExperienceList({ experiences }) {

  return (
    <div>
      <p>ExperienceList!</p>
      {
        experiences.map((experience, i) => 
          <Experience key={i} experience={experience}/>
        )
      }
    </div>
  )
}

export default ExperienceList