import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", level: 95, path: "/icon/HTML5.png", category: "frontend" },
  { name: "CSS", level: 95, path: "/icon/CSS3.png", category: "frontend" },
  { name: "JavaScript", level: 90, path: "/icon/js.png", category: "frontend" },
  { name: "TypeScript", level: 20, path: "/icon/typescript.png", category: "frontend" },
  { name: "React", level: 90, path: "/icon/science.png", category: "frontend" },
  { name: "Next.js", level: 50, path: "/icon/next.png", category: "frontend" },
  { name: "Tailwind CSS", level: 90, path: "/icon/Tailwind-CSS.png", category: "frontend" },
  { name: "Bootstrap", level: 80, path: "/icon/Bootstrap.png", category: "frontend" },

  // Backend
  { name: "PHP", level: 30, path: "/icon/PHP.png", category: "backend" },
  { name: "Laravel", level: 80, path: "/icon/Laravel.png", category: "backend" },
  { name: "Python", level: 20, path: "/icon/Python.png", category: "backend" },
  { name: "Node.js", level: 30, path: "/icon/node-js.png", category: "backend" },
  { name: "Express", level: 30, path: "/icon/Express.png", category: "backend" },
  { name: "MySQL", level: 70, path: "/icon/MySQL.png", category: "backend" },
  { name: "MongoDB", level: 70, path: "/icon/MongoDB.png", category: "backend" },

  // Tools
  { name: "Git", level: 50, path: "/icon/Git.png", category: "tools" },
  { name: "GitHub", level: 50, path: "/icon/GitHub.png", category: "tools" },
  { name: "VS Code", level: 95, path: "/icon/vs-code.png", category: "tools" },
  { name: "Figma", level: 70, path: "/icon/Figma.png", category: "tools" },
  { name: "Canva", level: 95, path: "/icon/Canva.png", category: "tools" },
  { name: "MS Office", level: 80, path: "/icon/office.png", category: "tools" },
  { name: "Adobe Photoshop", level: 95, path: "/icon/premiere-pro.png", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize backdrop-blur-md border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md border-primary"
                  : "bg-secondary/40 text-foreground hover:bg-secondary/70 border-transparent"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group bg-gradient-to-br from-secondary/40 to-background/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-md
                         flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon with background + glow */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-xl bg-white/100 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all">
                <img
                  src={skill.path}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Skill Name */}
              <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>

              {/* Progress bar */}
              <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Percentage */}
              <span className="text-sm text-muted-foreground mt-2">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
