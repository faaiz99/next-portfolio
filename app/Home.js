import Image from "next/image";
const Home = () => {
    return (<>

        <div className="container w-1/2  mx-auto mt-6 md:flex md:flex-row md:justify-center md:space-x-4 md:p-2">
            <div className="flex flex-row  justify-center bg-zinc-900 p-6 h-64 w-full rounded-3xl mb-4">
                <div className="flex flex-col w-3/4 justify-center ml-4">
                    <p className="text-sm  text-left font-medium  text-zinc-400">FULL STACK DEVELOPER</p>
                    <p className="text-3xl text-left font-semibold  text-zinc-200">Faaiz</p>
                    <p className="text-3xl text-left font-semibold  text-zinc-200">Aslam.</p>
                    <p className="text-sm  text-left font-normal  text-zinc-400">I'm a Full Stack Developer</p>
                    <p className="text-sm  text-left font-normal  text-zinc-400"> based in Islamabad.</p>
                </div>
                <div className="flex flex-col-reverse ml-10">
                    <p className="text-sm text-zinc-200">More...</p>
                </div>
            </div>
            <div className=" flex flex-row items-end bg-zinc-900 p-6 h-64 w-full rounded-3xl mb-4">
                <div className="flex flex-col">
                    <p className="text-sm text-left font-normal text-zinc-400 mt-1">
                        More about me
                    </p>
                    <p className="text-xl  text-left font-bold  text-zinc-200 mt-1">
                        Credentials
                    </p>
                </div>
            </div>
            <div className=" flex flex-row items-end bg-zinc-900 p-6 h-64 w-full rounded-3xl mb-4">
                <div className="flex flex-col">
                    <p className="text-sm text-left font-normal text-zinc-400 mt-1">
                        Show Case
                    </p>
                    <p className="text-xl  text-left font-bold  text-zinc-200 mt-1">
                        Projects
                    </p>
                </div>
            </div>
        </div>
        <div className="container w-1/2 mx-auto md:flex md:flex-row md:justify-center md:space-x-4 md:p-2 ">
            <div className=" flex flex-row items-end bg-zinc-900 p-6 rounded-3xl h-64 w-full mb-4">
                <div className="flex flex-col">
                    <p className="text-sm text-left font-normal text-zinc-400 mt-1">
                        Stay with me
                    </p>
                    <p className="text-xl  text-left font-bold  text-zinc-200 mt-1">
                        Profiles
                    </p>
                </div>
            </div>
            <div className="flex flex-row items-end bg-zinc-900 p-6 rounded-3xl h-64 w-full mb-4">
                <div className="flex flex-col">
                    <p className="text-sm text-left font-normal text-zinc-400 mt-1">
                        Wanna check my code ?
                    </p>
                    <p className="text-xl  text-left font-bold  text-zinc-200 mt-1">
                        Github
                    </p>
                </div>
            </div>
            <div className=" flex flex-col justify-end bg-zinc-900 p-6 rounded-3xl h-64 w-full mb-4">
                <div className="flex flex-row mb-4 mt-4 justify-between">
                    <Image src="/vue.png" width={30} height={40} />
                    <Image src="/react.png" width={30} height={40} />
                    <Image src="/mongo.png" width={30} height={40} />
                    <Image src="/nodejs.png" width={30} height={40} />
                </div>
                <div className="flex flex-col mt-4 ">
                    <p className="text-sm text-left font-normal text-zinc-400 mt-1">
                        Specialization
                    </p>
                    <p className="text-xl  text-left font-bold  text-zinc-200 mt-1">
                        Services Offering
                    </p>
                </div>
            </div>

        </div>
        <div className="container w-1/2 mx-auto md:flex md:flex-row md:justify-center md:space-x-4 md:p-2">
            <div className=" bg-zinc-900 p-8 rounded-3xl h-auto w-full sm:mb-4 md:flex md:flex-row ">
                <div className="flex flex-col md:space-x-8 md:flex md:flex-row">
                    <div className="flex flex-col bg-zinc-800 rounded-2xl p-6 mb-4 ">
                        <p className="text-2xl  text-center font-semibold text-zinc-200">
                            7th
                        </p>
                        <p className="text-sm text-center font-normal text-zinc-400 mt-2">
                            SEMESTER
                        </p>
                        <p className="text-sm  text-center font-normal  text-zinc-400">
                            STUDENT
                        </p>

                    </div>
                    <div className="flex flex-col bg-zinc-800 rounded-2xl p-6 mb-4 ">
                        <p className="text-2xl  text-center font-semibold text-zinc-200">
                            16
                        </p>
                        <p className="text-sm text-center font-normal text-zinc-400 mt-2">
                            GITHUB
                        </p>
                        <p className="text-sm  text-center font-normal  text-zinc-400">
                            REPOSITORIES
                        </p>
                    </div>
                    <div className="flex flex-col bg-zinc-800 rounded-2xl p-6 mb-4">
                        <p className="text-2xl  text-center font-semibold text-zinc-200">
                            06
                        </p>
                        <p className="text-sm text-center font-normal text-zinc-400 mt-2">
                            TOTAL
                        </p>
                        <p className="text-sm text-center font-normal  text-zinc-400">
                            PROJECTS
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex grow flex-row bg-zinc-900 p-6 rounded-3xl items-end h-64 w-full ">
                <div className="flex flex-col">
                    <div>
                        <p className="text-5xl text-left font-semibold  text-zinc-200">Let's</p>
                    </div>
                    <div className="flex flex-row space-x-4 mt-2">
                        <p className="text-5xl text-left font-semibold  text-zinc-200">work </p>
                        <p className="text-5xl text-left font-semibold  text-violet-500">together.</p>
                    </div>
                    <div className="flex flex-row justify-end ml-10 p-2">
                        <p className="text-sm text-zinc-200">More...</p>
                    </div>
                </div>
            </div>
        </div>


    </>
    );
}

export default Home;