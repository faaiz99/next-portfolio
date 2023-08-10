const Footer:React.FC = () => {
    return (
        <footer className="mt-12" >
            <div className="mt-4 flex flex-row justify-center">
               
                <ul className="flex  text-sm font-medium text-zinc-400">
                    <li>
                        <a href="https://www.linkedin.com/in/faaiz-aslam" target="_blank" className="mr-4 hover:text-zinc-200 hover:underline">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/faaiz99" target="_blank" className="mr-4 hover:text-zinc-200 hover:underline">Github</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/commander2811" target="_blank" className="mr-4 hover:text-zinc-200 hover:underline">Twitter</a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/12505891/faaiz-aslam" target="_blank" className="mr-4 hover:text-zinc-200 hover:underline">Stack Overflow</a>
                    </li>
                </ul>

            </div>
            <div className="flex flex-row justify-center mt-4">
                <p className="text-sm text-left font-light text-zinc-400 mt-1">
                    Made in Next JS and Sugar Coded in Tailwind by Faaiz Aslam™
                </p>
            </div>
        </footer>

    );
}

export default Footer;