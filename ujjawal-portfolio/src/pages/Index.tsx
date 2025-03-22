
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Apply dark mode class to the entire body
  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark");
      if (isDark) {
        document.body.classList.add("dark", "bg-gray-900", "text-gray-200");
      } else {
        document.body.classList.remove("dark", "bg-gray-900", "text-gray-200");
      }
    };

    // Initial check
    handleThemeChange();

    // Set up observer to watch for class changes on html element
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    // Cleanup on unmount
    return () => {
      observer.disconnect();
      document.body.classList.remove("dark", "bg-gray-900", "text-gray-200");
    };
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-500 dark:bg-gray-900 dark:text-gray-200">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
