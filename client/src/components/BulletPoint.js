import Tag from "./Tag";

function BulletPoint({ description, tags }) {
  return (
      <div class="mb-4">
        <p>{description}</p>
        <div class="flex-row-wrap">
        {
          tags.map(tag => 
            <Tag tag={tag} />
          )
        }
        </div>
    </div>
  );
}

export default BulletPoint;