import Tag from "./Tag";
import '../styles/common.css'

function BulletPoint({ description, tags }) {
  return (
      <li class="mb-4">
        <p>{description}</p>
        <div class="flex-row-wrap tag-container">
        {
          tags.map(tag => 
            <Tag tag={tag} />
          )
        }
        </div>
    </li>
  );
}

export default BulletPoint;