import React, { useState } from 'react';

import ExperienceTagCollection from './experience-tag-collection';

function ExperienceRecord(props) {
  const [filteredItems, setFilteredItems] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredItem, setFilteredItem] = useState('');

  const item = props.experience;

  function updateFilter(newFilter) {
    setFilteredItems(newFilter);
    setIsFiltered(newFilter.length > 0);
  }

  function applyFilter(newFilter) {
    setFilteredItem(newFilter);
    setIsFiltered(newFilter.length > 0);
  }

  return (
    <div class="flex">
      <div class="py-4 flex-grow">
        <div class="bg-primary-100 px-4 py-1 rounded-t-2xl shadow-md hover:shadow-xl transition duration-200">
          <article className="mt-5" key={`${item.company}`}>
            <div className="flex flex-row items-center">
              <div className="item-header flex-1">{item.role}</div>
              <div>
                <h3 className="item-sub flex-1 right-0 font-semibold text-primary-500">
                  {item.start} - {item.end || 'PRESENT'}
                </h3>
              </div>
            </div>
            <h3 className="item-sub">
              <b>{item.company}</b> via <i>{item.via}</i>
            </h3>
            <div className="flex flex-col pt-6 gap-y-8">
              <div className="flex-1 -m-4 -mx-6  border-primary-900">
                <ExperienceTagCollection
                  setFilter={updateFilter}
                  applyFilter={applyFilter}
                  tags={item.tags}
                />
              </div>
              <div className="flex-1">
                <p className="block">{isFiltered ? item.tags[filteredItem] : item.description}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default ExperienceRecord;
