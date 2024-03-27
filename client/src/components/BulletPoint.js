import Tag from "./Tag";
import '../styles/common.css'

function BulletPoint({ description, tags }) {
  return (
    <li class="mb-4">
      <p>{description}</p>
      <div class="flex-row-wrap">
      {
        tags.map((tag, i) => 
          <Tag key={i} tag={tag} />
        )
      }
      </div>
    </li>
  );
}

export default BulletPoint;