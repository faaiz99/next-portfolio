import Image from "next/image";
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className="flex flex-row justify-between py-2 px-4 ">
            <Image className="mt-2" src='/coding.png' width={35} height={35} alt="Coding Logo" />
            <div className="flex space-x-8 mt-3">
                <Link className="text-center text-zinc-400 font-medium hover:text-zinc-200 hover:scale-110" href="#work" scroll={false}>Work</Link>
                <Link className="text-center text-zinc-400 font-medium hover:text-zinc-200 hover:scale-110" href="#about" scroll={false}>About</Link>
                <Link className="text-center text-zinc-400 font-medium hover:text-zinc-200 hover:scale-110" href="#contact" scroll={false}>Contact</Link>

            </div>
        </div>
    )
}

export default Navbar;