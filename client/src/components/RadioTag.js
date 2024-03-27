import '../styles/common.css';

function RadioTag({ tag, filterTag, setFilterTag}) {

  const handleFilterChange = (event) => {
    setFilterTag(event.target.value);
  };

  return (
    <>
      <input
        type="radio"
        id={tag}
        name="filter"
        value={tag}
        checked={filterTag === tag}
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