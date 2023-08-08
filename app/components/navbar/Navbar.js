import Image from "next/image";
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className="flex flex-row justify-between p-2">
            <Image className=" mt-2" src='/coding.png' width={35} height={35}  alt="Coding Logo"/>
            {/* <div className="flex space-x-8 mt-3">
                <Link className="text-center text-zinc-200 font-medium" href="/">Home</Link>
                <Link className="text-center text-zinc-200 font-medium" href="/work">Work</Link>
                <Link className="text-center text-zinc-200 font-medium" href="/about">About</Link>
                <Link className="text-center text-zinc-200 font-medium" href="/contact">Contact</Link>

            </div> */}
            <div className="mt-3">
                <Link className="animate-pulse py-2 px-5  text-md font-medium rounded-xl text-zinc-950 bg-zinc-100 whitespace-pre" href="#"> <span>Let's talk</span></Link>
            </div>
        </div>


   



    );
}

export default Navbar;