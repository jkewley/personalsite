import React, { useState } from 'react';

import ExperienceTag from './experience-tag';

// bar of tags inside Experience block
function ExperienceTagCollection(props) {
  const [filteredItems, setFilteredItems] = useState([]);

  function updateFilteredItems(filterKey) {
    const newCollection = filteredItems.includes(filterKey)
      ? filteredItems.filter(i => i !== filterKey)
      : [...filteredItems, filterKey];
    setFilteredItems(newCollection);
    props.applyFilter(newCollection);
  }

  function updateActiveFilter(newValue) {
    props.applyFilter(newValue);
  }

  return (
    <section>
      <div className="flex flex-row items-stretch flex-wrap">
        {props.tags &&
          Object.entries(props.tags).map(([key, value]) => (
            // value &&
            <ExperienceTag
              tagName={key}
              value={value}
              toggleTagFilter={updateActiveFilter}
            ></ExperienceTag>
          ))}
      </div>
    </section>
  );
}

export default ExperienceTagCollection;
