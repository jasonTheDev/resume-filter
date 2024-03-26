import Experience from './Experience';

function ExperienceList({ experiences }) {
  return (
    <div>
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