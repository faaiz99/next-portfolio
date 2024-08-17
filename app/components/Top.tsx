import Link from "next/link";
import GreenTickTop from "./shared/GreenTickTop";
const Top: React.FC = () => {
  return (
    <div className="mt-12 flex flex-row justify-center py-2 px-4">
      <Link
        className="hover:bg-green-600 max-w-xs p-2 animate-bounce bg-green-500 text-sm rounded-full shadow-lg text-center justify-center items-center 
     text-zinc-200 font-semibold  "
        href="#top"
        scroll={false}
      >
        <GreenTickTop />
      </Link>
    </div>
  );
};

export default Top;
