import NavbarDemo from "@/components/navbar-demo";
import HeroSection from "@/components/hero-section";
import TestimonialsDemo from "@/components/testimonials-demo";
import ExperienceDemo from "@/components/experience-demo";
import ProjectsDemo from "@/components/projects-demo";
import AnimatedBeamDemo from "@/components/animated-beam-demo";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarDemo />
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I'm Muhammad Haseeb, a passionate Full Stack Software Engineer with over 3 years of experience 
            building exceptional digital solutions. I specialize in modern web technologies like React, Node.js, 
            Python, and AI integration with LLM models. My goal is to help businesses transform their ideas 
            into powerful, scalable applications that drive growth and success.
          </p>
        </div>
      </section>

      <AnimatedBeamDemo />
      <TestimonialsDemo />
      <ExperienceDemo />
      <ProjectsDemo />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
