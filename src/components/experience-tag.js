import React, { useState } from 'react';

import ExperienceTagIcon from './experience-tag-icon';

// Individual tag pill
function ExperienceTag(props) {
  const [isActive, setActive] = useState(false);
  const tagName = props.tagName;
  const isTagged = props.value !== '';
  const targetClass = isTagged
    ? isActive
      ? 'exptagActive'
      : 'exptag'
    : 'expTagNA';

  function handleMouseEnter() {
    if (isTagged) {
      setActive(true);
      props.toggleTagFilter(tagName);
    }
  }
  function handleMouseLeave() {
    if (isTagged) {
      setActive(false);
      props.toggleTagFilter('');
    }
  }

  return (
    <div className="flex-1 border-r last:border-r-0 min-w-1/3 xl:min-w-0 whitespace-nowrap">
      <a
        href
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={targetClass}
      >
        <ExperienceTagIcon type={tagName}></ExperienceTagIcon>
        &nbsp;{tagName}
      </a>
    </div>
  );
}

// onClick={() => {
//   if (isTagged) toggleActive();
// }}
export default ExperienceTag;
