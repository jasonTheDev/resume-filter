import React from "react";

function ExperienceFilter({ uniqueTags, filterTag, setFilterTag }) {

  const handleFilterChange = (event) => {
    setFilterTag(event.target.value);
  };

  return (
    <section>
      <div className="filter-container">
        <input
          type="radio"
          id="All"
          name="filter"
          value="All"
          checked={filterTag === 'All'}
          onChange={handleFilterChange}
        />
        <label htmlFor="All">All</label>
        {uniqueTags.map((tag) => (
          <React.Fragment key={tag}>
            <input
              type="radio"
              id={tag}
              name="filter"
              value={tag}
              checked={filterTag === tag}
              onChange={handleFilterChange}
            />
            <label htmlFor={tag}>{tag}</label>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default ExperienceFilter;
