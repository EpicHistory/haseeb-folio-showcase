"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function CTASection() {
  const words = [
    {
      text: "Ready",
    },
    {
      text: "to",
    },
    {
      text: "build",
    },
    {
      text: "something",
    },
    {
      text: "amazing",
    },
    {
      text: "together?",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] bg-gray-50 dark:bg-gray-900" id="contact">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mb-4">
        Let's turn your ideas into reality
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a
          href="https://www.linkedin.com/in/muhammad-haseeb-boss/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
        >
          Connect on LinkedIn
        </a>
        <a
          href="mailto:haseebbhatti9082@gmail.com"
          className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
        >
          Send Email
        </a>
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          What I can help you with:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            "Web Development",
            "AI Integration", 
            "E-commerce Solutions",
            "SEO Optimization"
          ].map((service) => (
            <div
              key={service}
              className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}