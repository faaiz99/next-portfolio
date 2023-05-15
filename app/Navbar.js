import Image from "next/image";
import Link from 'next/link';


const Navbar = () => {
    return (

        <div className="container w-1/2 mx-auto flex flex-row justify-between space-x-4 p-2 ">
            <Image src='/coding.png' width={50} height={50} />
            <div className="flex space-x-8 mt-3">
                <Link className="text-center text-zinc-200 font-medium" href="/">Home</Link>
                <Link className="text-center text-zinc-200 font-medium" href="/work">Work</Link>
                <Link className="text-center text-zinc-200 font-medium" href="/about">About</Link>
                <Link className="text-center text-zinc-200 font-medium" href="/contact">Contact</Link>

            </div>
            <div className="mt-4">
                {/* <button type="button" className="animate-bounce py-2 px-6 text-md font-medium  rounded-xl bg-zinc-700  text-slate-100 hover:text-zinc-950 hover:bg-zinc-100">Let's talk</button> */}
                <Link className="animate-pulse py-2 px-6 text-md font-medium  rounded-xl    hover:text-zinc-950 bg-zinc-100" href="/contact">Let's talk</Link>

            </div>
        </div>


    );
}

export default Navbar;