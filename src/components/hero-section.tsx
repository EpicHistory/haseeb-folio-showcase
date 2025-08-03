"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const words = [
    {
      text: "Building",
    },
    {
      text: "exceptional",
    },
    {
      text: "digital",
    },
    {
      text: "experiences",
    },
    {
      text: "with",
    },
    {
      text: "code.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl mt-12 sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 mb-6">
            Muhammad Haseeb
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-2">
            Full Stack Software Engineer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            3+ Years of Experience • Specialized in Modern Web Technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TypewriterEffectSmooth words={words} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="mailto:haseebbhatti9082@gmail.com"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Tech Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Experienced with
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Node.js", "Python", "PostgreSQL", "TailwindCSS", "LLM Models"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}