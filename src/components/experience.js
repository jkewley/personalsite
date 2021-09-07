import ExperienceRecord from './experience-record';
import React from 'react';

function Experience({ data }) {
  return (
    <section>
      <div className="flex">
        <h1 className="section-header lg:pr-8 text-primary-500">Experience</h1>
      </div>
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
