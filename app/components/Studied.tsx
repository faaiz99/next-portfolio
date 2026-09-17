import React from 'react'
import GreenTick from "./shared/GreenTick";

interface SkillCategory {
  title: string;
  items: string[];
}

// Ordered by priority: core tech stack first (what employers scan for),
// then supporting tools last.
const skillCategories: SkillCategory[] = [
  {
    title: 'Frameworks',
    items: ['ReactJS', 'VueJS', 'NextJS', 'Angular', 'Tailwind CSS', 'ExpressJS', 'NestJS', 'ASP.NET Core 8', 'Fast API'],
  },
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'C Sharp (C#)'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Supabase', 'Firebase', 'Entity Framework Core'],
  },
  {
    title: 'Cloud',
    items: ['Azure', 'Railway', 'Heroku', 'Render', 'Vercel', 'Windows Server'],
  },
  {
    title: 'Testing',
    items: ['Jest/Vitest', 'Selenium', 'Supertest'],
  },
  {
    title: 'Misc Tools',
    items: ['Docker', 'Trello', 'Jira', 'Clickup', 'Notion', 'Postman', 'Git'],
  },
  {
    title: 'Operating System',
    items: ['Ubuntu', 'Windows'],
  },
  {
    title: 'Courses',
    items: ['Topics in Computer Science I', 'Topics in Computer Science II', 'Web Technologies', 'Mobile App Development', 'Database Systems'],
  },
  {
    title: 'Certifications',
    items: ['SIC - Artificial Intelligence'],
  },
];

const education = [
  {
    duration: 'February 2020 - February 2024',
    title: 'BS Computer Science, COMSATS University Islamabad',
    current: false,
  },
  {
    duration: 'August 2016 - August 2018',
    title: 'FSc, Fauji Foundation College',
    current: false,
  },
  {
    duration: 'August 2014 - August 2016',
    title: 'Matriculation, APSACS Fort Road',
    current: false,
  },
];

const Studied = () => {
  return (
    <div className="container mx-auto px-4 py-8" data-testid="studied">
      <section>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-zinc-800 dark:text-zinc-200 mb-12">
          What I&apos;ve
          <span className="text-green-500 font-extrabold mx-1 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-600 to-green-700 dark:from-green-300 dark:via-green-400 dark:to-green-500"> studied</span>
        </h2>

        {/* Education Section (standalone, not part of the skills grid) */}
        <div className="mb-12">
          <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 text-center">Education</p>
          <div className="max-w-3xl mx-auto hover:shadow-lg hover:shadow-zinc-300 dark:hover:shadow-zinc-500 bg-white dark:bg-zinc-900 p-6 rounded-3xl">
            <ol className="relative border-l border-zinc-200 dark:border-zinc-700 space-y-8">
              {education.map((entry) => (
                <li key={entry.title} className="ml-4">
                  <div
                    className={
                      entry.current
                        ? "absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-green-700"
                        : "absolute w-3 h-3 bg-zinc-300 dark:bg-zinc-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-zinc-900"
                    }
                  ></div>
                  <time className="block text-sm font-normal text-zinc-600 dark:text-zinc-400 mb-1">{entry.duration}</time>
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{entry.title}</h3>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Skills Section */}
        <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 text-center">Skills</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="hover:shadow-lg hover:shadow-zinc-300 dark:hover:shadow-zinc-500 bg-white dark:bg-zinc-900 p-6 rounded-3xl"
            >
              <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">{category.title}</p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <GreenTick />
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Studied
