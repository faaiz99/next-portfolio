const About = () => {
    return (
        <>
            <div className="mt-12 mb-12 flex flex-row justify-around space-x-4 p-2">
                <p className="text-4xl text-center font-semibold  text-zinc-200 sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl" id="about">What I've
                 <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-green-500 font-extrabold"> done </span>and 
                 <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-green-500 font-extrabold"> studied </span>
                 </p>
            </div>
            <div className="flex flex-wrap justify-center  md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row gap-4 p-2">
                <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col  bg-zinc-900 p-8 rounded-3xl h-96 w-96">
                    <p className="text-xl text-left font-semibold  text-zinc-200">Education</p>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                            <time className="mb-1 text-sm font-normal leading-none text-zinc-400 ">February 2020 - Present </time>
                            <h3 className="text-lg font-semibold text-zinc-200 ">BS Computer Science, COMSATS University Islamabad</h3>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                            <time className="mb-1 text-sm font-normal leading-none text-zinc-400 dark:text-gray-500">August 2016 - August 2018</time>
                            <h3 className="text-lg font-semibold text-zinc-200 ">FSc, Fauji Foundation College</h3>
                        </li>
                        <li className="ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                            <time className="mb-1 text-sm font-normal leading-none text-zinc-400 dark:text-gray-500">August 2014 - August 2016</time>
                            <h3 className="text-lg font-semibold text-zinc-200 ">Matriculation, APSACS Fort Road</h3>
                        </li>
                    </ol>

                </div>
                <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col  bg-zinc-900 p-8 rounded-3xl h-96 w-96">
                    <p className="text-xl text-left font-semibold  text-zinc-200">Courses</p>
                    <ul className="text-zinc-400">
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-violet-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Topics in Computer Science I
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-violet-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Topics in Computer Science II
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-violet-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Web Technologies
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-violet-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Mobile App Development
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-violet-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Database Systems
                        </li>
                    </ul>
                    <p className="text-xl text-left font-semibold  text-zinc-200 mt-4">Certifications</p>
                    <ul className="text-zinc-400">
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-violet-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            SIC - Artificial Intelligence
                        </li>
                    </ul>
                </div>
                <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col  bg-zinc-900 p-8 rounded-3xl h-96 w-96">
                    <p className="text-xl text-left font-semibold  text-zinc-200">Frameworks</p>
                    <ul className="text-zinc-400">
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            ReactJS
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-green-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            VueJS
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-green-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            NextJS
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-green-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Tailwind CSS
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-red-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            ExpressJS
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            NestJS
                        </li>
                    </ul>
                    <p className="text-xl text-left font-semibold  text-zinc-200 mt-4">Languages</p>
                    <ul className="text-zinc-400">
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-sky-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            JavaScript
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-sky-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            TypeScript
                        </li>
                    </ul>
                    <p className="text-xl text-left font-semibold  text-zinc-200 mt-4">Operating System</p>
                    <ul className="text-zinc-400">
                    <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Ubuntu
                        </li>
                    </ul>
                </div>
                <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col  bg-zinc-900 p-8 rounded-3xl h-96 w-96">
                    <p className="text-xl text-left font-semibold  text-zinc-200">Testing</p>
                    <ul className="text-zinc-400">
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Jest
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Selenium
                        </li>
                    </ul>
                    <p className="text-xl text-left font-semibold  text-zinc-200 mt-4">Databases</p>
                    <ul className="text-zinc-400">
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-sky-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            MongoDB
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-sky-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            PostgreSQL
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-sky-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            SupaBase
                        </li>
                    </ul>
                    <p className="text-xl text-left font-semibold  text-zinc-200 mt-4">Misc Tools</p>
                    <ul className="text-zinc-400">
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-orange-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Docker
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-orange-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Kubernetes
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-orange-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Jenkins
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-orange-500  flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            AWS
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );
}

export default About;