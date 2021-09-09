import ExperienceTag from './experience-tag';
import React from 'react';

// bar of tags inside Experience block
function ExperienceTagCollection(props) {
  function updateActiveFilter(newValue) {
    props.applyFilter(newValue);
  }

  return (
    <section>
      <div className="flex flex-row items-stretch flex-wrap border-l">
        {props.tags &&
          Object.entries(props.tags).map(([key, value], index) => (
            // value &&
            <ExperienceTag
              key={key + index}
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
