import React from "react";
import '../styles/common.css'
import RadioTag from "./RadioTag";

function ExperienceFilter({ uniqueTags, selectedTag, setSelectedTag }) {

  return (
    <div class="flex-row-wrap center-items">
      <RadioTag
        tag="All"
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      {uniqueTags.map(tag => (
      <RadioTag
        key={tag}
        tag={tag}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      ))}
    </div>
  );
}

export default ExperienceFilter;