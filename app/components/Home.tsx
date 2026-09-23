import React from "react";
import Image from "next/image";

const Home = () => (
  <section
    className="max-w-4xl px-4 mx-auto flex flex-col items-center py-20"
    data-testid="home"
  >
    <div className="text-center mb-16">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 relative">
        {/* Glowing background effect */}
        <span aria-hidden="true" className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl blur-2xl animate-pulse-slow"></span>
        
        {/* Text with gradient */}
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-600 to-green-700 dark:from-green-300 dark:via-green-400 dark:to-green-500">
          Faaiz Aslam
        </span>
      </h1>
      <h2 className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
        Full Stack Engineer
      </h2>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-8 w-full">
      <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-2 border-green-500 overflow-hidden hover:scale-105 transition-transform duration-300">
        <Image
          src="/assets/faaiz.jpeg"
          alt="Faaiz Aslam"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="text-left w-full md:w-auto">
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md">
          I like to work in the trenches, building scalable and efficient systems.
          Customers are your best friends, and I believe in building products that solve real problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/faaiz99"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg border border-green-500/30 hover:bg-green-500/20 transition-all duration-300 text-center"
          >
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/faaiz-aslam"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-zinc-600 dark:text-zinc-400 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 text-center"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Home;