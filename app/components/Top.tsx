import Link from "next/link";
import GreenTickTop from "./shared/GreenTickTop";

const Top: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        className="motion-safe:animate-bounce hover:bg-green-600 flex items-center justify-center p-2 bg-green-500 rounded-full shadow-lg text-zinc-100 font-semibold"
        href="#home"
        scroll={false}
        aria-label="Back to top"
      >
        <GreenTickTop />
      </Link>
    </div>
  );
};

export default Top;
