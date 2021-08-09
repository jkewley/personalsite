import React, { useState } from 'react';

function ExperienceTag({ data }) {
  return (
    <section>
      {data &&
        Object.entries(data).map(
          ([key, value]) =>
            value && (
              <a href className="exptag">
                {key}
              </a>
            )
        )}
    </section>
  );
};

export default ExperienceTag;
