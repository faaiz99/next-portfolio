import Image from "next/image";
const About = () => {
    return (<>
        <div className="mt-12 mb-12 flex flex-row justify-around space-x-4 p-2 ">
            <p className="text-4xl text-center font-semibold  text-zinc-200 sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl" id="about">What I've done and studied</p>
        </div>
        <div className="flex flex-wrap justify-center  md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row gap-4 p-2 h-96">
            <div className="flex flex-col  bg-zinc-900 p-8 rounded-3xl h-full w-128">
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
            <div className="flex flex-col  bg-zinc-900 p-8 rounded-3xl h-full w-64">
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
            <div className="flex flex-col  bg-zinc-900 p-8 rounded-3xl h-full w-64">
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
            </div>
        </div>

    </>
    );
}

export default About;