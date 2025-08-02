"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MH</span>
              </div>
              <span className="text-xl font-bold">Muhammad Haseeb</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Full Stack Software Engineer specializing in modern web development, 
              AI integration, and creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/muhammad-haseeb-boss/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:haseebbhatti9082@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Email
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>AI Integration</li>
              <li>E-commerce Solutions</li>
              <li>SEO Optimization</li>
              <li>Database Design</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-gray-400">
              <li>React & Node.js</li>
              <li>Python & LLM Models</li>
              <li>PostgreSQL & Express</li>
              <li>TailwindCSS</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 Muhammad Haseeb. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with React, TypeScript, and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}