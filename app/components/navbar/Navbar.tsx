import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./navLinks";
import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 relative flex flex-row items-center justify-between py-2 px-4 bg-zinc-100/80 dark:bg-zinc-950/80 backdrop-blur">
      <Image
        className="mt-2"
        src="/assets/coding.png"
        width={20}
        height={20}
        alt="Coding Logo"
      />

      <ul className="hidden md:flex space-x-8 mt-3">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className="text-center text-sm text-zinc-600 dark:text-zinc-400 font-semibold hover:text-green-500"
              href={link.href}
              scroll={false}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <MobileNav />
    </div>
  );
};

export default Navbar;
