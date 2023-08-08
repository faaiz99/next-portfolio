const Contact = () => {
    return (<>
        <div className="mt-12 mb-12">
            <p className="text-6xl text-center font-semibold" >Let's Work <span className="text-6xl text-violet-500">Together.</span>
            </p>
        </div>
        <div className="mx-auto rounded-3xl justify-center space-x-4 p-8 bg-zinc-900" id="contact">

            <div className="flex flex-col mt-4">
                <form action="/contact" method="post" className="flex flex-col">
                    <div className="mb-4">
                        <label htmlFor="default-input" className=" w-full md:w-64 lg:w-96 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Sample Name"></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="default-input" className=" w-full md:w-64 lg:w-96 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " placeholder="Sample@email.com"></input>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Write your thoughts here..."></textarea>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button type="button" className="bg-zinc-100 w-full md:w-32 lg:w-64 text-zinc-950 text-md font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </>

    );
}

export default Contact;