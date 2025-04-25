import React from 'react'
import GreenTick from "./shared/GreenTick";

const Studied = () => {
  return (

  <>
    <div className="container mx-auto px-4 py-8">      <section>
    <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-zinc-200 mb-12">
      What I&apos;ve
      <span className="text-green-500 font-extrabold mx-1 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500"> studied</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Education Card */}
      <div className="hover:shadow-lg hover:shadow-zinc-500 bg-zinc-900 p-6 rounded-3xl">
        <p className="text-xl font-semibold text-zinc-200 mb-4">Education</p>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-8">
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-green-700"></div>
            <time className="block text-sm font-normal text-zinc-400 mb-1">February 2020 - February 2024</time>
            <h3 className="text-lg font-semibold text-zinc-200">BS Computer Science, COMSATS University Islamabad</h3>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="block text-sm font-normal text-zinc-400 mb-1">August 2016 - August 2018</time>
            <h3 className="text-lg font-semibold text-zinc-200">FSc, Fauji Foundation College</h3>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="block text-sm font-normal text-zinc-400 mb-1">August 2014 - August 2016</time>
            <h3 className="text-lg font-semibold text-zinc-200">Matriculation, APSACS Fort Road</h3>
          </li>
        </ol>
      </div>

      {/* Courses & Certifications Card */}
      <div className="hover:shadow-lg hover:shadow-zinc-500 bg-zinc-900 p-6 rounded-3xl">
        <p className="text-xl font-semibold text-zinc-200 mb-4">Courses</p>
        <ul className="space-y-2 text-sm text-zinc-400">
          {['Topics in Computer Science I', 'Topics in Computer Science II', 'Web Technologies',
            'Mobile App Development', 'Database Systems'].map((course) => (
              <li key={course} className="flex items-center">
                <GreenTick />
                <span className="ml-2">{course}</span>
              </li>
            ))}
        </ul>

        <p className="text-xl font-semibold text-zinc-200 my-4">Certifications</p>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li className="flex items-center">
            <GreenTick />
            <span className="ml-2">SIC - Artificial Intelligence</span>
          </li>
        </ul>
      </div>

      {/* Frameworks & Languages Card */}
      <div className="hover:shadow-lg hover:shadow-zinc-500 bg-zinc-900 p-6 rounded-3xl">
        <p className="text-xl font-semibold text-zinc-200 mb-4">Frameworks</p>
        <ul className="space-y-2 text-sm text-zinc-400">
          {['ReactJS', 'VueJS', 'NextJS', 'Tailwind CSS', 'ExpressJS', 'NestJS'].map((framework) => (
            <li key={framework} className="flex items-center">
              <GreenTick />
              <span className="ml-2">{framework}</span>
            </li>
          ))}
        </ul>

        <p className="text-xl font-semibold text-zinc-200 my-4">Languages</p>
        <ul className="space-y-2 text-sm text-zinc-400">
          {['JavaScript', 'TypeScript'].map((language) => (
            <li key={language} className="flex items-center">
              <GreenTick />
              <span className="ml-2">{language}</span>
            </li>
          ))}
        </ul>

        <p className="text-xl font-semibold text-zinc-200 my-4">Operating System</p>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li className="flex items-center">
            <GreenTick />
            <span className="ml-2">Ubuntu</span>
          </li>
        </ul>
      </div>

      {/* Testing & Databases Card */}
      <div className="hover:shadow-lg hover:shadow-zinc-500 bg-zinc-900 p-6 rounded-3xl">
        <p className="text-xl font-semibold text-zinc-200 mb-4">Testing</p>
        <ul className="space-y-2 text-sm text-zinc-400">
          {['Jest/Vitest', 'Selenium'].map((tool) => (
            <li key={tool} className="flex items-center">
              <GreenTick />
              <span className="ml-2">{tool}</span>
            </li>
          ))}
        </ul>

        <p className="text-xl font-semibold text-zinc-200 my-4">Databases</p>
        <ul className="space-y-2 text-sm text-zinc-400">
          {['MongoDB', 'PostgreSQL', 'Supabase', 'Firebase'].map((db) => (
            <li key={db} className="flex items-center">
              <GreenTick />
              <span className="ml-2">{db}</span>
            </li>
          ))}
        </ul>

        <p className="text-xl font-semibold text-zinc-200 my-4">Misc Tools</p>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li className="flex items-center">
            <GreenTick />
            <span className="ml-2">Docker</span>
          </li>
        </ul>
      </div>
    </div>
  </section></div>
      {/* Education & Skills Section */}

  </>
  )
}

export default Studied