import BulletPoint from './BulletPoint';

function Experience({ position, bullets }) {
  return (
    <div>
      <p>{position}</p>
      {
        bullets.map((bullet, i) =>
          <BulletPoint
            key={i}
            description={bullet.description}
          />
        )
      }
    </div>
  );
}

export default Experience;