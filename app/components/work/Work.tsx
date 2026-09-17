import React from "react";
import LinkCard from "../shared/LinkCard";

const products = [
  {
    title: "Weal",
    description:
      "AI-powered EMR platform enabling U.S. healthcare providers to deliver and manage telehealth services efficiently.",
    href: "https://emr.weal.app/auth/login",
  },
  {
    title: "Supervize",
    description:
      "MVP for Clinical Supervision, used for tracking hours and facilitating evaluations; an all-in-one solution for supervision.",
    href: "https://portal.supervizeapp.com",
  },
  {
    title: "Nursing Home",
    description:
      "SaaS platform designed to streamline patient care, staff management, and operational workflows with precision and efficiency.",
    href: "https://nursing-home-emr-ui-production.up.railway.app/",
  },
  {
    title: "Metric",
    description:
      "AI-powered financial management app for small and medium business founders, used in 190+ countries with 100K+ downloads on the Google Play Store.",
    href: "https://web.metricapp.co/login",
  },
  {
    title: "Zeros",
    description:
      "LLM agents that let SaaS buyers fully immerse themselves in the product and evaluate options before deciding.",
    href: "https://www.zeroshq.com/categories",
  },
];

const Work: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <p className="mb-12 text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-zinc-800 dark:text-zinc-200">
        <span className="text-green-500 font-extrabold relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-600 to-green-700 dark:from-green-300 dark:via-green-400 dark:to-green-500">
          Work
        </span>{" "}
        I&apos;ve Built
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <LinkCard
            key={product.title}
            title={product.title}
            description={product.description}
            href={product.href}
            linkLabel="Visit Live Site"
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
