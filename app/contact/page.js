const page = () => {
    return (
        <div className="container w-1/2 mx-auto rounded-3xl mt-12 justify-center space-x-4 p-8 bg-zinc-900">
            <p className="text-5xl text-left font-medium">Let's work <span className="text-violet-500">together.</span>
            </p>
            <div className="flex flex-col flex-grow bg-red-600">
            <form action="/contact" method="post" className="flex flex-col space-y-20">
                <input type="text" id="name" name="name" className="rounded" placeholder="Name *"/>
                <input type="text" id="email" name="email" placeholder="Email *"/>
                <input type="text" id="subject" name="subject" placeholder="Subject *"/>
                <textarea type="text" placeholder="Your Message *"/>
                <button type="submit">Send Message</button>
            </form>
            </div>
        </div>
    );
}

export default page;