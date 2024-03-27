import '../styles/common.css';

function RadioTag({ tag, selectedTag, setSelectedTag}) {

  const handleFilterChange = (event) => {
    setSelectedTag(event.target.value);
  };

  return (
    <>
      <input
        type="radio"
        id={tag}
        name="filter"
        value={tag}
        checked={selectedTag === tag}
        onChange={handleFilterChange}
      />
      <label
        class="tag-box radio-tag"
        htmlFor={tag}>
        {tag}
      </label>
    </>
  );
}

export default RadioTag;