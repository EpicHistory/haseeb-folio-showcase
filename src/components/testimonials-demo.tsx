"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function TestimonialsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          What Clients Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Testimonials from satisfied clients who trusted me with their projects
        </p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Muhammad delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise in React and Node.js was outstanding. The project was completed on time and within budget.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Solutions",
  },
  {
    quote:
      "Working with Muhammad was a fantastic experience. He built our educational platform with clean code, excellent UI/UX, and integrated complex features seamlessly. His communication throughout the project was professional and clear.",
    name: "Michael Chen",
    title: "Founder, EduTech Innovations",
  },
  {
    quote:
      "The AI chatbot Muhammad developed for our business has significantly improved our customer service. His expertise in LLM models and Python backend development is impressive. Highly recommended for AI projects.",
    name: "Emily Rodriguez",
    title: "Operations Manager, Digital Solutions Inc",
  },
  {
    quote:
      "Muhammad's work on our business dashboard was exceptional. The PostgreSQL optimization and React frontend he delivered improved our workflow efficiency by 40%. Professional, reliable, and skilled developer.",
    name: "David Thompson",
    title: "CTO, DataFlow Analytics",
  },
  {
    quote:
      "I was amazed by the quality of the gaming website Muhammad created. The interactive features, responsive design, and performance optimization were all top-notch. He truly understands modern web development.",
    name: "Alex Martinez",
    title: "Game Studio Director, PixelCraft Games",
  },
];