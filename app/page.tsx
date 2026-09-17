"use client";
import "../app/globals.css";
import About from "./components/About";
import Work from "./components/work/Work";
import Future from "./components/Future";
import Studied from "./components/Studied";
import Home from "./components/Home";
import Projects from "./components/projects/Projects";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Variants for animations
const slideFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const slideFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    //@ts-expect-error: unknown type
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Green gradient blur effect that follows mouse */}
      <div
        className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: isHovering ? '300px' : '0px',
          height: isHovering ? '300px' : '0px',
          opacity: isHovering ? 0.8 : 0,
          background: 'radial-gradient(circle, rgba(134, 239, 172, 0.3) 0%, rgba(74, 222, 128, 0.2) 50%, rgba(34, 197, 94, 0.1) 100%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative flex items-center min-h-[80vh] w-full scroll-mt-20 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={slideFromTop}
      >
        <Home />
      </motion.section>

      {/* Work Section */}
      <motion.section
        id="work"
        className="relative w-full scroll-mt-20 py-16 md:py-24 z-10 border-t border-zinc-200 dark:border-zinc-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8 }}
        variants={slideFromBottom}
      >
        <Work />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="relative w-full scroll-mt-20 py-16 md:py-24 z-10 border-t border-zinc-200 dark:border-zinc-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8 }}
        variants={slideFromTop}
      >
        <Projects />
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="relative w-full scroll-mt-20 py-16 md:py-24 z-10 border-t border-zinc-200 dark:border-zinc-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8 }}
        variants={slideFromBottom}
      >
        <About />
      </motion.section>

      {/* Studied Section */}
      <motion.section
        id="studied"
        className="relative w-full scroll-mt-20 py-16 md:py-24 z-10 border-t border-zinc-200 dark:border-zinc-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8 }}
        variants={slideFromTop}
      >
        <Studied />
      </motion.section>

      {/* Future Section */}
      <motion.section
        id="future"
        className="relative w-full scroll-mt-20 py-16 md:py-24 z-10 border-t border-zinc-200 dark:border-zinc-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={slideFromTop}
      >
        <Future />
      </motion.section>
    </main>
  );
}
