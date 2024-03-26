import Experience from './Experience';

function ExperienceList({ experiences }) {
  return (
    <div>
      <p>ExperienceList!</p>
      {
        experiences.map((experience, i) => 
          <Experience 
            key={i}
            position={experience.position}
            bullets={experience.bullets}
          />
        )
      }
    </div>
  );
}

export default ExperienceList;