"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function ExperienceDemo() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900" id="experience">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Professional Journey
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My evolution as a software engineer and the milestones that shaped my career
        </p>
      </div>
      
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {experienceContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-xl mb-4 font-semibold text-gray-900 dark:text-white">
                {item.title}
              </p>

              <div className="text-sm prose prose-sm dark:prose-invert">
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const experienceContent = [
  {
    title: "Started Freelancing Journey",
    description: (
      <div>
        <p className="mb-4">
          Began my freelancing career, working with various clients to build custom web solutions. 
          Focused on learning client communication, project management, and delivering high-quality code.
        </p>
        <p className="mb-4">
          <strong>Key Skills Developed:</strong>
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Client relationship management</li>
          <li>Project planning and execution</li>
          <li>Basic web development with HTML, CSS, JavaScript</li>
          <li>WordPress development and customization</li>
        </ul>
        <p>
          This period laid the foundation for my understanding of business requirements 
          and the importance of delivering solutions that truly meet client needs.
        </p>
      </div>
    ),
    badge: "2022 - Present",
  },
  {
    title: "SEO & Digital Marketing Specialization",
    description: (
      <div>
        <p className="mb-4">
          Expanded my skillset into SEO and Google AdSense optimization, helping clients 
          improve their online visibility and revenue generation.
        </p>
        <p className="mb-4">
          <strong>Achievements:</strong>
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Improved client website rankings by 300% on average</li>
          <li>Implemented technical SEO optimizations</li>
          <li>Set up and optimized Google AdSense for revenue generation</li>
          <li>Developed content strategies for better search visibility</li>
        </ul>
        <p>
          This experience taught me the importance of performance optimization 
          and user experience in web development.
        </p>
      </div>
    ),
    badge: "2022 - Present",
  },
  {
    title: "Advanced Web Development & AI Integration",
    description: (
      <div>
        <p className="mb-4">
          Transitioned to modern web development frameworks and started integrating 
          AI technologies into web applications.
        </p>
        <p className="mb-4">
          <strong>Technologies Mastered:</strong>
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>React.js and modern JavaScript frameworks</li>
          <li>Node.js and Express.js for backend development</li>
          <li>Python for AI/ML applications</li>
          <li>Large Language Model (LLM) integration</li>
          <li>Database design with PostgreSQL</li>
          <li>API development and integration</li>
        </ul>
        <p className="mb-4">
          <strong>Notable Projects:</strong>
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>AI-powered chatbots for customer service</li>
          <li>Educational platforms with interactive features</li>
          <li>E-commerce solutions with payment integration</li>
          <li>Business dashboards with real-time analytics</li>
        </ul>
        <p>
          This period marked my evolution into a full-stack developer capable of 
          building complex, scalable applications with cutting-edge technologies.
        </p>
      </div>
    ),
    badge: "2023 - Present",
  },
];