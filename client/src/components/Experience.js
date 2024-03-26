import BulletPoint from './BulletPoint';

function Experience({ position, bullets }) {
  return (
    <div class="mb-4 mt-4">
      <h2>{position}</h2>
      {
        bullets.map((bullet, i) =>
          <BulletPoint
            key={i}
            description={bullet.description}
            tags={bullet.tags}
          />
        )
      }
    </div>
  );
}

export default Experience;