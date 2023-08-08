const Contact = () => {
    return (<>
        <div className="mt-12 mb-12">
            <p className="text-4xl text-center font-semibold  text-zinc-200 sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl" >
                Let's <span className=" text-4xl text-center font-semibold  sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-violet-500">Connect.</span>
            </p>
        </div>
        <div className="flex flex-wrap justify-center  md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row gap-4 p-8" id="contact" >
            <div className=" bg-zinc-900 p-8 rounded-3xl h-auto w-full sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 mb-4 gap-4">
                <form action="/contact" method="post" className="flex flex-col">
                    <div className="mb-4">
                        <label htmlFor="default-input" className=" w-full  block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Sample Name"></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="default-input" className=" w-full  block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " placeholder="Sample@email.com"></input>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Write your thoughts here..."></textarea>
                    </div>
                    <div className="mt-6 flex justify-center ">
                        <button type="button" className="bg-zinc-100 w-32  text-zinc-950 text-md font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </>

    );
}

export default Contact;