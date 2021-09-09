import React from 'react';

const Summary = ({ data }) => (
  <section className="py-5 my-5 px-10 border-b border-neutral-300 lg:flex items-center justify-start print:px-4">
    <img
      className="rounded-full w-48 mx-auto lg:mx-10 xl:w-4/5 xl:min-w-0 print:hidden"
      src="./profile.jpg"
      alt="profile"
    />
    <p className="text-center tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg py-10 lg:py-0 print:text-left print:py-0">
      {data}
    </p>
  </section>
);

export default Summary;
