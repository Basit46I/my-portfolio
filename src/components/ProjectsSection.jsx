import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "School Management System",
    description:
      "A full-stack web app built with Next.js, MongoDB, and JWT for managing students, teachers, classes, and attendance efficiently.",
    images: [
      "/projects/project-1/sign-in.png",
      "/projects/project-1/session-enrollment.png",
      "/projects/project-1/admission-record.png",
      "/projects/project-1/examination-primary-result.png",
      "/projects/project-1/examination-primary.png",
      "/projects/project-1/examination-preprimary.png",
      "/projects/project-1/inquiry-page.png",
    ],
    tags: ["Next", "TailwindCSS", "backend"],
  },
  {
    id: 2,
    title: "Ecommerce Platform",
    description:
      "An online shopping platform with product listings, cart, and secure checkout, designed for a smooth user experience.",
    images: [
      "/projects/project-2/home.png",
      "/projects/project-2/apple-category.png",
      "/projects/project-2/cart.png",
      "/projects/project-2/checkout.png",
      "/projects/project-2/login.png",
      "/projects/project-2/register.png",
      "/projects/project-2/admin-login.png",
      "/projects/project-2/dashboard-home.png",
      "/projects/project-2/product.png",
    ],
    tags: ["Laravel"],
  },
  {
    id: 3,
    title: "News App",
    description:
      "A dynamic app that delivers the latest news with categorized sections and a clean, responsive interface.",
    images: [
      "/projects/project-3/entertainment.png",
      "/projects/project-3/technology.png",
    ],
    tags: ["React", "Node.js"],
  },
  {
    id: 4,
    title: "Alaina Estate (UI/UX Design)",
    description:
      "A modern real estate website design showcasing site plans, floor plans, and galleries with a clean, user-friendly layout.",
    images: [
      "/projects/project-4/home-page.png",
      "/projects/project-4/view-gallery.png",
      "/projects/project-4/floor-plan.png",
      "/projects/project-4/site-plan.png",
      "/projects/project-4/site-plan-pictures.png",
    ],
    tags: [],
  },
  {
    id: 5,
    title: "Swan Beauty (UI/UX Design)",
    description:
      "A sleek and elegant design concept for a beauty brand website, focusing on aesthetics and intuitive user experience.",
    images: [
      "/projects/project-5/swan-beauty.png",
    ],
    tags: [],
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // reference to scrollable container
  const scrollRef = useRef(null);

  const handlePrev = () => {
    if (selectedProject !== null) {
      setSelectedImageIndex(
        (prev) =>
          (prev - 1 + projects[selectedProject].images.length) %
          projects[selectedProject].images.length
      );
      if (scrollRef.current) scrollRef.current.scrollTop = 0; // reset scroll
    }
  };

  const handleNext = () => {
    if (selectedProject !== null) {
      setSelectedImageIndex(
        (prev) => (prev + 1) % projects[selectedProject].images.length
      );
      if (scrollRef.current) scrollRef.current.scrollTop = 0; // reset scroll
    }
  };

  // ✅ Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject === null) return;

      if (e.key === "Escape") {
        setSelectedProject(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowDown") {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ top: 100, behavior: "smooth" });
        }
      } else if (e.key === "ArrowUp") {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ top: -100, behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience. Click on them
          to see more images in fullscreen.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(index);
                setSelectedImageIndex(0);
              }}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer hover:shadow-lg transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />

              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white hover:text-primary transition"
            >
              <X size={32} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-6 text-white hover:text-primary transition"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Scrollable Image Container */}
            <div className="max-w-4xl max-h-[80vh] rounded-2xl shadow-lg flex flex-col overflow-hidden">
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto no-scrollbar"
              >
                <img
                  src={projects[selectedProject].images[selectedImageIndex]}
                  alt={projects[selectedProject].title}
                  className="w-full object-cover"
                />
              </div>
              <div className="bg-black/70 p-4 text-center text-white text-lg">
                {projects[selectedProject].title} — {selectedImageIndex + 1} /{" "}
                {projects[selectedProject].images.length}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-6 text-white hover:text-primary transition"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Basit46I"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
