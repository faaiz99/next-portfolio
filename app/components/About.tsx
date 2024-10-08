import GreenTick from "./shared/GreenTick";

const About: React.FC = () => {
  return (
    <>
      <div
        data-testid="about"
        className="mt-12 mb-12 flex flex-row justify-around space-x-4 p-2"
      >
        <p
          className="text-4xl text-center font-semibold  text-zinc-200 sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl"
          id="about"
        >
          What I&apos;ve
          <span className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-green-500 font-extrabold">
            {" "}
            done{" "}
          </span>
          and
          <span className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-green-500 font-extrabold">
            {" "}
            studied
          </span>
          .
        </p>
      </div>
      <div className="flex flex-wrap justify-center  md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row gap-4 p-2">
        <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col  bg-zinc-900 p-8 rounded-3xl h-96 w-96">
          <p className="text-xl text-left font-semibold  text-zinc-200">
            Education
          </p>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-green-700 "></div>
              <time className="mb-1 text-sm font-normal leading-none text-zinc-400 ">
                February 2020 - February 2024{" "}
              </time>
              <h3 className="text-lg font-semibold text-zinc-200 ">
                BS Computer Science, COMSATS University Islamabad
              </h3>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
              <time className="mb-1 text-sm font-normal leading-none text-zinc-400 dark:text-gray-500">
                August 2016 - August 2018
              </time>
              <h3 className="text-lg font-semibold text-zinc-200 ">
                FSc, Fauji Foundation College
              </h3>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
              <time className="mb-1 text-sm font-normal leading-none text-zinc-400 dark:text-gray-500">
                August 2014 - August 2016
              </time>
              <h3 className="text-lg font-semibold text-zinc-200 ">
                Matriculation, APSACS Fort Road
              </h3>
            </li>
          </ol>
        </div>
        <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col  bg-zinc-900 p-8 rounded-3xl h-96 w-96">
          <p className="text-xl text-left font-semibold  text-zinc-200">
            Courses
          </p>
          <ul className="text-zinc-400">
            <li className="flex items-center">
              <GreenTick />
              Topics in Computer Science I
            </li>
            <li className="flex items-center">
              <GreenTick />
              Topics in Computer Science II
            </li>
            <li className="flex items-center">
              <GreenTick />
              Web Technologies
            </li>
            <li className="flex items-center">
              <GreenTick />
              Mobile App Development
            </li>
            <li className="flex items-center">
              <GreenTick />
              Database Systems
            </li>
          </ul>
          <p className="text-xl text-left font-semibold  text-zinc-200 mt-4">
            Certifications
          </p>
          <ul className="text-zinc-400">
            <li className="flex items-center">
              <GreenTick />
              SIC - Artificial Intelligence
            </li>
          </ul>
        </div>
        <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col  bg-zinc-900 p-8 rounded-3xl h-96 w-96">
          <p className="text-xl text-left font-semibold  text-zinc-200">
            Frameworks
          </p>
          <ul className="text-zinc-400">
            <li className="flex items-center">
              <GreenTick />
              ReactJS
            </li>
            <li className="flex items-center">
              <GreenTick />
              VueJS
            </li>
            <li className="flex items-center">
              <GreenTick />
              NextJS
            </li>
            <li className="flex items-center">
              <GreenTick />
              Tailwind CSS
            </li>
            <li className="flex items-center">
              <GreenTick />
              ExpressJS
            </li>
            <li className="flex items-center">
              <GreenTick />
              NestJS
            </li>
          </ul>
          <p className="text-xl text-left font-semibold  text-zinc-200 mt-4">
            Languages
          </p>
          <ul className="text-zinc-400">
            <li className="flex items-center">
              <GreenTick />
              JavaScript
            </li>
            <li className="flex items-center">
              <GreenTick />
              TypeScript
            </li>
          </ul>
          <p className="text-xl text-left font-semibold  text-zinc-200 mt-4">
            Operating System
          </p>
          <ul className="text-zinc-400">
            <li className="flex items-center">
              <GreenTick />
              Ubuntu
            </li>
          </ul>
        </div>
        <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col  bg-zinc-900 p-8 rounded-3xl h-96 w-96">
          <p className="text-xl text-left font-semibold  text-zinc-200">
            Testing
          </p>
          <ul className="text-zinc-400">
            <li className="flex items-center">
              <GreenTick />
              Jest/Vitest
            </li>
            <li className="flex items-center">
              <GreenTick />
              Selenium
            </li>
          </ul>
          <p className="text-xl text-left font-semibold  text-zinc-200 mt-4">
            Databases
          </p>
          <ul className="text-zinc-400">
            <li className="flex items-center">
              <GreenTick />
              MongoDB
            </li>
            <li className="flex items-center">
              <GreenTick />
              PostgreSQL
            </li>
            <li className="flex items-center">
              <GreenTick />
              Supabase
            </li>
            <li className="flex items-center">
              <GreenTick />
              Firebase
            </li>
          </ul>
          <p className="text-xl text-left font-semibold  text-zinc-200 mt-4">
            Misc Tools
          </p>
          <ul className="text-zinc-400">
            <li className="flex items-center">
              <GreenTick />
              Docker
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
