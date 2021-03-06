import React, { useState } from 'react';

import ExperienceTagCollection from './experience-tag-collection';

function ExperienceRecord(props) {
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredItem, setFilteredItem] = useState('');

  const item = props.experience;

  function applyFilter(newFilter) {
    setFilteredItem(newFilter);
    setIsFiltered(newFilter.length > 0);
  }

  return (
    <div className="flex">
      <div className="py-4 flex-grow">
        <div className="bg-primary-100 px-4 py-1 rounded-t-2xl shadow-md hover:shadow-xl transition duration-200">
          <article className="mt-5" key={`${item.company}`}>
            <div className="flex flex-row items-center">
              <div className="item-header flex-1">{item.role}</div>
              <div>
                <h3 className="item-sub flex-1 right-0 font-semibold text-primary-400">
                  {item.start} - {item.end || 'PRESENT'}
                </h3>
              </div>
            </div>
            <h3 className="item-sub">
              <b>{item.company}</b> via <i>{item.via}</i>
            </h3>
            <div className="flex flex-col pt-6 gap-y-8">
              <div className="flex-1 -m-4 -mx-6 border-primary-900">
                <ExperienceTagCollection
                  applyFilter={applyFilter}
                  tags={item.tags}
                />
              </div>
              <div className="flex-1 relative">
                <div
                  className={isFiltered ? 'invisible' : 'visible'}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
                <div
                  className={isFiltered ? 'visible top-0 left-0 absolute' : 'visible'}
                  dangerouslySetInnerHTML={{ __html: item.tags[filteredItem] }}
                ></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default ExperienceRecord;
