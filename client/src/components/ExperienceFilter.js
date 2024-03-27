import React from "react";
import '../styles/common.css'
import RadioTag from "./RadioTag";

function ExperienceFilter({ uniqueTags, filterTag, setFilterTag }) {

  return (
    <div class="flex-row-wrap center-items">
      <RadioTag
        tag="All"
        filterTag={filterTag}
        setFilterTag={setFilterTag}
      />
      {uniqueTags.map((tag) => (
      <RadioTag
        tag={tag}
        filterTag={filterTag}
        setFilterTag={setFilterTag}
      />
      ))}
    </div>
  );
}

export default ExperienceFilter;