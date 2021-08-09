import ExperienceTag from './experience-tag';
import Filter from './filter'
import React from 'react';

const Experience = ({ data }) => (
  <section>
    <div className="lg:flex">
      <h1 className="section-header lg:w-2/3 lg:pr-8">Experience</h1>
      <div className="section-header lg:w-1/3"><Filter></Filter></div>
    </div>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
          <b>{item.company}</b> via <i>{item.via}</i>
          </h3>
          <h3 className="item-sub">
          {item.start} - {item.end || 'PRESENT'}
          </h3>
          <ExperienceTag data={item.tags} />
          <p className="py-6 hidden lg:block">{item.description}</p>
          <p className="py-6 lg:hidden ">{item.brief}</p>
        </article>
      ))}
  </section>
);

export default Experience;
