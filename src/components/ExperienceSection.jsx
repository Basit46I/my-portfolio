import { ArrowRight, ExternalLink, Github } from "lucide-react";

const timelineData = [
  {
    date: "2023 - Now",
    title: "FULL-TIME GRAPHIC DESIGNER & ILLUSTRATOR",
    description: "",
  },
  {
    date: "2021 - 2023",
    title: "STUDENT + FREELANCE DESIGNER",
    description:
      "BACHELOR OF FINE ARTS (GRAPHICS COMMUNICATION) • UNIVERSITI SAINS MALAYSIA, PENANG",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Experience </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="flex justify-center py-10">
          {/* Timeline line */}
          <div className="relative w-px bg-gray-300">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start mb-16 relative"
              >
                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 md:left-0 w-5 h-5 bg-gray-300 border-4 border-white rounded-full z-10" />

                {/* Content */}
                <div className="md:ml-8 mt-8 md:mt-0 max-w-sm bg-white shadow-md rounded-lg p-4">
                  <p className="text-sm text-gray-500 font-medium">{item.date}</p>
                  <h3 className="font-bold text-lg mt-1">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Basit46I"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  );
};
