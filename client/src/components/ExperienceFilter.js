import React, { useState, useEffect } from 'react';

function ExperienceFilter({ experiences }) {

  const [uniqueTags, setUniqueTags] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const tagSet = new Set();
    experiences.forEach(experience => {
      experience.bullets.forEach(bullet => {
        bullet.tags.forEach(tag => {
          tagSet.add(tag);
        });
      });
    });
    setUniqueTags([...tagSet]);
  }, [experiences]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <section>
      <div className="filter-container">
        <input
          type="radio"
          id="all"
          name="filter"
          value="all"
          checked={filter === 'all'}
          onChange={handleFilterChange}
        />
        <label htmlFor="all">All</label>
        {uniqueTags.map((tag) => (
          <React.Fragment key={tag}>
            <input
              type="radio"
              id={tag}
              name="filter"
              value={tag}
              checked={filter === tag}
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
