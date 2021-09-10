import ExperienceRecord from './experience-record';
import React from 'react';

function Experience({ data }) {
  return (
    <section>
      <h1 className="section-header">Experience</h1>
      {data &&
        data.map((item, i) => (
          <ExperienceRecord
            key={'exp-' + i}
            experience={item}
          ></ExperienceRecord>
        ))}
    </section>
  );
}

export default Experience;
