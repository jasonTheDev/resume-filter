import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import BulletPoint from './BulletPoint';
import '../styles/common.css'

function Experience({ position, bullets }) {
  return (
    <div class="mb-4 mt-4">
      <Stack direction="horizontal">
        <h2>{position}</h2>
        <Button className="m-2 ms-auto" variant="outline-secondary">Edit</Button>
      </Stack>
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