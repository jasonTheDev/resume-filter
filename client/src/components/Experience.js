import BulletPoint from './BulletPoint';
import '../styles/common.css'

function Experience({ position, bullets }) {
  return (
    <div class="mb-4 mt-4">
      <h2>{position}</h2>
      <ul>
        {
          bullets.map((bullet, i) =>
            <BulletPoint
              key={i}
              description={bullet.description}
              tags={bullet.tags}
            />
          )
        }
      </ul>
    </div>
  );
}

export default Experience;