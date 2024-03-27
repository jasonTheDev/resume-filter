import React from "react";
import '../styles/common.css'

function ExperienceFilter({ uniqueTags, filterTag, setFilterTag }) {

  const handleFilterChange = (event) => {
    setFilterTag(event.target.value);
  };

  return (
    <div class="filter-container">
      <div class="filter">
        <input
          type="radio"
          id="All"
          name="filter"
          value="All"
          checked={filterTag === 'All'}
          onChange={handleFilterChange}
        />
        <label htmlFor="All">All</label>
      </div>
      {uniqueTags.map((tag) => (
      <div key={tag} class="filter">
        <input
          type="radio"
          id={tag}
          name="filter"
          value={tag}
          checked={filterTag === tag}
          onChange={handleFilterChange}
        />
        <label htmlFor={tag}>{tag}</label>
      </div>
      ))}
    </div>
  );
}

export default ExperienceFilter;
