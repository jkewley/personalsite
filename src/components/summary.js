import React from 'react';

const Summary = ({ data }) => (
  <section className="py-5 my-5 px-10 border-b border-neutral-300 lg:flex items-center justify-start">
    <img
      className="rounded-full w-48 mx-auto lg:mx-10 xl:w-3/5 xl:min-w-0"
      src="./profile.jpg"
      alt="profile"
    />
    <p className="text-center tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg py-10 lg:py-0">
      {data}
    </p>
  </section>
);

export default Summary;
