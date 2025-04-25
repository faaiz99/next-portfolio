import React from "react";
import Github from "./Github";

/* div cannot be inside p tag it will cause hydration errors */

const Work: React.FC = () => {
  return (
    <>
      <p
        className="mt-12 mb-12 text-4xl text-center font-semibold  text-zinc-200 sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl"
        id="work"
      >
        <span className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-green-500 font-extrabold">
          {" "}
          Contributions{" "}
        </span>
        Graph.
      </p>
      <div className="justify-center flex mt-12 px-12">
        <Github />
      </div>
    </>
  );
};

export default Work;
