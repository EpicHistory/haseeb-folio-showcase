"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  icon: string;
  category: string;
  proficiency: number;
}

interface TechStackProps {
  className?: string;
}

const techItems: TechItem[] = [
  { name: "React", icon: "⚛️", category: "Frontend", proficiency: 95 },
  { name: "TypeScript", icon: "📘", category: "Language", proficiency: 90 },
  { name: "Node.js", icon: "🟢", category: "Backend", proficiency: 88 },
  { name: "Express.js", icon: "🚂", category: "Backend", proficiency: 85 },
  { name: "Python", icon: "🐍", category: "Language", proficiency: 85 },
  { name: "PostgreSQL", icon: "🐘", category: "Database", proficiency: 80 },
  { name: "TailwindCSS", icon: "🎨", category: "Styling", proficiency: 95 },
  { name: "LLM Models", icon: "🤖", category: "AI/ML", proficiency: 75 },
];

export const TechStack = ({ className }: TechStackProps) => {
  const categories = Array.from(new Set(techItems.map(item => item.category)));

  return (
    <div className={cn("w-full max-w-4xl mx-auto p-6", className)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Technology Stack
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Tools and technologies I use to build amazing applications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techItems.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {tech.category}
                </span>
                
                {/* Proficiency Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Proficiency</span>
                    <span>{tech.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Category Legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <span
            key={category}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};