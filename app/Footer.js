const Footer = () => {
    return (
        <footer className="mt-12" >
            <div className="m-2 border-4 border-black   flex flex-row justify-center">
                <ul className="flex text-sm font-medium text-zinc-400">
                    <li>
                        <a href="#" className="mr-4">Home</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4">Work</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4">Contact</a>
                    </li>
                </ul>

            </div>

            <div className="flex flex-row justify-center mt-12">
                <p className="text-sm text-left font-normal text-zinc-400 mt-1">
                    Made in Next JS and Sugar Coded in Tailwind by Faaiz Aslam™
                </p>
            </div>
        </footer>

    );
}

export default Footer;