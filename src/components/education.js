import React from 'react';

const Education = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header">Education</h1>
    {data &&
      data.map((item, i) => (
        <div className="my-2" key={item.degree + i}>
          <h2 className="item-header text-lg">{item.degree}</h2>
          <h3 className="item-sub">{item.institution}</h3>
          <p className="item-sub right-0 font-semibold text-primary-500">
            {item.start} - {item.end}
          </p>
        </div>
      ))}
  </section>
);

export default Education;
