import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Emam Medhat — Full-Stack Developer | Laravel & Vue.js" },
      { name: "description", content: "Portfolio of Emam Medhat, a Full-Stack Developer specializing in Laravel & Vue.js. Building scalable SaaS platforms, ERP systems, and enterprise web applications." },
      { property: "og:title", content: "Emam Medhat — Full-Stack Developer" },
      { property: "og:description", content: "3+ years building scalable web apps with Laravel & Vue.js" },
      { name: "keywords", content: "Full-Stack Developer, Laravel, Vue.js, PHP, SaaS, ERP, Web Developer, Remote Developer" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
