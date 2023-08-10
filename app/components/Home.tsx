const Home:React.FC = () => {
    return (<>

        <div className="mt-12 mb-12 justify-around space-x-4 p-2">
            <p className="text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-green-500 font-extrabold">Intro</p>
        </div>
        <div className="flex flex-wrap justify-center  md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row gap-4 p-2" id="intro">
            <div className=" hover:shadow-lg hover:shadow-zinc-500 flex flex-col items-center bg-zinc-900 p-8 rounded-3xl h-auto w-96 sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 mb-4 gap-4">
                <img src="./faaiz.jpeg" className="rounded-full" />
                <p className=" text-justify font-medium break-normal text-zinc-400">Hello, Welcome to my portfolio, here's my brief introduction  <br></br>
                    I'm a 8th semester student @ COMSATS
                    A self-motivated programmer with a passion to learn new things by experimenting.
                    I look forward to get
                    hands-on experience with test driven (TDD) as well as behaviour driven development (BDD) to build solutions that are robust and scalable.
                    The portfolio starts off with my introduction, followed by my future plans and what I've done including my education and technical skills.
                    After that I've used GitHub API to present a statistical and tabular view of my repositories. At the end there's a form that you can fill
                    to have detailed converstion with me. Thank you!
                </p>
            </div>
        </div>

    </>
    );
}

export default Home