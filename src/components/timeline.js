import React from 'react';

function Timeline({ data }) {
  return (
    <section className="mb-5">
      <div className="lg:flex">
        <h1 className="section-header lg:pr-8">Roles</h1>
      </div>
      <div className="container">
        {data &&
          data.map((role, i) => (
            <div className="py-4" key={role.role + i}>
              <h1 className="item-header">{role.role}</h1>
              <div className="border-l pl-2 border-primary-600">
                <h3 className="item-sub">{role.company}</h3>
                <span className="item-sub flex-1 right-0 font-semibold text-primary-500">
                  {role.start} - {role.end}
                </span>
                <div className="text-sm">{role.description}</div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Timeline;
