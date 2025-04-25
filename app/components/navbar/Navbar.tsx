import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between py-2 px-4 ">
      <Image
        className="mt-2"
        src="/assets/coding.png"
        width={20}
        height={20}
        alt="Coding Logo"
      />
      {/* <div className="flex space-x-8 mt-3">
        <Link
          className="text-center text-sm text-zinc-400 font-semibold hover:text-green-500"
          href="#intro"
          scroll={false}
        >
          Intro
        </Link>
        <Link
          className="text-center text-sm text-zinc-400 font-semibold hover:text-green-500"
          href="#work"
          scroll={false}
        >
          Work
        </Link>
        <Link
          className="text-center text-sm text-zinc-400 font-semibold hover:text-green-500"
          href="#about"
          scroll={false}
        >
          About
        </Link>
  
      </div> */}
    </div>
  );
};

export default Navbar;
