import Image from "next/image";
const About = () => {
    return (<>
        <div className="container w-1/2 mx-auto mt-12 flex flex-row justify-around space-x-4 p-2">
            <div className="flex flex-col justify-center bg-zinc-900 p-8 rounded-full ">
                <Image src='/me.jpeg' className="rounded-full w-full h-auto" width="0" height="0"  alt="Faaiz Aslam"/>                
            </div>
            <div>
                <div className="mb-8">
                    <p className="text-7xl text-center font-semibold  text-zinc-200">About Me</p>
                </div>
                <div className="flex grow-0 flex-col justify-end bg-zinc-900 p-8 rounded-3xl">
                    <p className="text-5xl text-left font-semibold  text-zinc-200">Faaiz Aslam</p>
                    <p className="text-md  text-left font-medium  text-zinc-400 mt-4">A self-motivated programmer with a passion to learn new things by experimenting.
                        As a student, I look forward to get
                        hands-on experience with web development and building scalable solutions.</p>
                </div>
            </div>
        </div>
        <div className="container w-1/2 mx-auto flex flex-row justify-around space-x-4 p-2">
            <div className="flex flex-col justify-end bg-zinc-900 p-8 rounded-3xl h-auto w-auto">
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
            <div className="flex  grow flex-col  bg-zinc-900 p-8 rounded-3xl h-auto w-auto">
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

        </div>
        <div className="container w-1/2 mx-auto flex flex-row justify-around space-x-4 p-2">
        </div>
    </>
    );
}

export default About;