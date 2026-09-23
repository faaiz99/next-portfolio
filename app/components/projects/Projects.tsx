import React from "react";
import LinkCard from "../shared/LinkCard";
import Github from "../work/Github";

const projects = [
  {
    title: "Mind Care",
    description: "Mental Health SaaS built as a final year project.",
    href: "https://github.com/faaiz99/mind-care-backend",
  },
  {
    title: "bullmq-demo",
    description:
      "Demo of BullMQ integration for QuickBooks integration workflows.",
    href: "https://github.com/faaiz99/bullmq-demo",
  },
  {
    title: "Team Performance Tracker",
    description: "Demo team performance tracker.",
    href: "https://github.com/faaiz99/team-performance-tracker",
  },
  {
    title: "Movie App",
    description: "Full-stack movie app.",
    href: "https://github.com/faaiz99/movie-app",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-12 text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-zinc-800 dark:text-zinc-200">
        Personal{" "}
        <span className="text-green-500 font-extrabold relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-600 to-green-700 dark:from-green-300 dark:via-green-400 dark:to-green-500">
          Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {projects.map((project) => (
          <LinkCard
            key={project.title}
            title={project.title}
            description={project.description}
            href={project.href}
            linkLabel="View on GitHub"
          />
        ))}
      </div>

      <p className="mb-6 text-xl font-semibold text-center text-zinc-800 dark:text-zinc-200">
        GitHub Contributions
      </p>
      <div className="justify-center flex px-4 md:px-12">
        <Github />
      </div>
    </div>
  );
};

export default Projects;
