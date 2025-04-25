import React from "react";
import Github from "./Github";

/* div cannot be inside p tag it will cause hydration errors */

const Work: React.FC = () => {
  return (
    <>
      <p
        className="mt-12 mb-12 text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-zinc-200"
        id="work"
      >
        <span className="text-green-500 font-extrabold relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500">Contributions</span> Graph
      </p>
      <div className="justify-center flex mt-12 px-12">
        <Github />
      </div>
    </>
  );
};

export default Work;
