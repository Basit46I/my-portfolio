import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { ExperienceSection } from "../components/ExperienceSection";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // show after 300px scroll
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(isDarkMode);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} /> */}
      {/* Background Effects */}
      <StarBackground isDarkMode={isDarkMode} />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <a
        href="#hero"
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary-100 shadow-lg transform transition-all duration-300 ease-in-out
        ${showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
      >
        <ArrowUp size={20} />
      </a>


    </div>
  );
};
