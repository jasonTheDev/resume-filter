import React from "react";
import '../styles/common.css'

function ExperienceFilter({ uniqueTags, filterTag, setFilterTag }) {

  const handleFilterChange = (event) => {
    setFilterTag(event.target.value);
  };

  return (
    <div class="flex-row-wrap center-items">
      <div>
        <input
          type="radio"
          id="All"
          name="filter"
          value="All"
          checked={filterTag === 'All'}
          onChange={handleFilterChange}
        />
        <label class="tag-box radio-tag" htmlFor="All">All</label>
      </div>
      {uniqueTags.map((tag) => (
      <div key={tag}>
        <input
          type="radio"
          id={tag}
          name="filter"
          value={tag}
          checked={filterTag === tag}
          onChange={handleFilterChange}
        />
        <label class="tag-box radio-tag" htmlFor={tag}>{tag}</label>
      </div>
      ))}
    </div>
  );
}

export default ExperienceFilter;
