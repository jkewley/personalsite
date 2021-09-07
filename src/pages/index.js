import '../main.css';

import {
  Education,
  Experience,
  Footer,
  Header,
  List,
  Projects,
  SEO,
  Skills,
  Summary,
} from '../components';

import React from 'react';
import resume from '../../data/profile';

const Home = () => (
  <main className="antialiased text-neutral-900 bg-neutral-200 min-h-screen sm:p-5">
    <SEO title="Resume" />
    <div className="container mx-auto shadow bg-white">
      <div className="bg-primary-600 py-5 px-10 shadow-md">
        <Header
          contacts={resume.contact}
          name={resume.fullname}
          role={resume.role}
        />
      </div>
      <Summary data={resume.summary} />
      <div className="border-b border-neutral-300 pb-2 my-5 py-5 px-10 lg:flex">
        <div className="lg:w-2/3 lg:pr-8">
          {resume.experience && <Experience data={resume.experience} />}
          {/* {resume.employment && <Timeline data={resume.employment} />} */}
          {resume.projects && <Projects data={resume.projects} />}
        </div>
        <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
          {resume.skills && <Skills data={resume.skills} />}
          {resume.education && <Education data={resume.education} />}
          {resume.sidebar &&
            resume.sidebar.map(item => (
              <List key={`${item.title}-side`} data={item} />
            ))}
        </div>
      </div>
      <Footer social={resume.social} />
    </div>
  </main>
);

export default Home;
