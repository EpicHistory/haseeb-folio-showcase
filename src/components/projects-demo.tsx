"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import ecommerceImg from "@/assets/ecommerce-project.jpg";
import educationImg from "@/assets/education-project.jpg";
import aiImg from "@/assets/ai-project.jpg";
import businessImg from "@/assets/business-project.jpg";
import gamingImg from "@/assets/gaming-project.jpg";

export default function ProjectsDemo() {
  const projects = [
    {
      title: "MyCentrality",
      description: "A comprehensive business platform with user management, analytics, and modern design.",
      link: "https://mycentrality.org/",
      image: businessImg,
      tags: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Global Esquire",
      description: "Professional legal services website with elegant design and content management.",
      link: "https://global-esquire.netlify.app/",
      image: ecommerceImg,
      tags: ["React", "TailwindCSS", "CMS"]
    },
    {
      title: "Charlie The Steak",
      description: "Interactive gaming website with engaging animations and user experience.",
      link: "https://charlie-the-steak.netlify.app/",
      image: gamingImg,
      tags: ["JavaScript", "CSS3", "Animations"]
    },
    {
      title: "Miss IELTS",
      description: "Educational platform for IELTS preparation with learning modules and progress tracking.",
      link: "https://miss-ielts.netlify.app/",
      image: educationImg,
      tags: ["React", "Educational Tech", "UI/UX"]
    },
    {
      title: "JoinChainAI",
      description: "AI-powered platform leveraging LLM models for intelligent automation and insights.",
      link: "https://joinchainai.com",
      image: aiImg,
      tags: ["Python", "LLM", "AI/ML", "React"]
    },
  ];

  return (
    <div className="py-20 bg-white dark:bg-black" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of recent projects that demonstrate my expertise in modern web development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <div key={index} className="h-[40rem] w-full flex items-center justify-center">
            <PinContainer
              title={project.link}
              href={project.link}
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    {project.description}
                  </span>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div 
                  className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}