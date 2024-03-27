import Experience from './Experience';

function ExperienceList({ experiences }) {
  return (
    <>
      {
        experiences.map((experience, i) => 
          <Experience 
            key={i}
            position={experience.position}
            bullets={experience.bullets}
          />
        )
      }
    </>
  );
}

export default ExperienceList;