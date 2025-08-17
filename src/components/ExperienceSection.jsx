import { ArrowRight, ExternalLink, Github } from "lucide-react";

const timelineData = [
  {
    date: "2025 – Present",
    title: "School – Web Developer",
    subtitle: "Current Job",
    description: [
      "Working in a school environment",
      "Designing and building a complete school management system",
      "Full system includes admin, teacher, and student panels",
      "Developing modules for attendance, results, class management, and documents",
      "Using Next.js, MongoDB, and JWT authentication for secure access",
      "End-to-end solution covering student records, exams, scheduling, and more",
    ],
  },
  {
    date: "2023 – 2024",
    title: "Irfan Ali – Sustainability Advisor",
    subtitle: "Trainee Assistant",
    description: [
      "Worked on documentation using MS Office",
      "Assisted in sustainability-related digital tasks",
      "Performed development tasks in HTML, CSS, JavaScript, PHP",
      "Participated in confidential projects",
      "Completed a 1.5-year diploma in Web Development (HTML, CSS, JS, PHP, Laravel)",
    ],
  }
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
          My career started as a <span className="font-semibold">Trainee Assistant</span>,
          where I learned the foundations of web technologies and teamwork.
          Today, I am applying those skills as a <span className="font-semibold">Web Developer</span>,
          creating a complete school management system with modern tools like Next.js and MongoDB.
        </p>


        <div className="flex justify-center py-12">
          {/* Timeline Line */}
          <div className="relative w-full max-w-4xl">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 rounded -translate-x-1/2"></div>

            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative mb-16 flex flex-col md:flex-row items-center md:items-start"
                >
                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-background border-4 border-white rounded-full z-10 shadow-md"></div>

                  {/* Desktop layout - Left Side */}
                  <div
                    className={`hidden md:flex w-1/2 ${isLeft ? "justify-end pr-6" : "justify-start px-6"
                      }`}
                  >
                    {isLeft ? (
                      <p className="gradient-border px-6 py-4 card-hover font-semibold text-sm">{item.date}</p>
                    ) : (
                      <TimelineCard item={item} />
                    )}
                  </div>

                  {/* Desktop layout - Right Side */}
                  <div
                    className={`hidden md:flex w-1/2 ${isLeft ? "justify-start px-6" : "justify-end pr-6"
                      }`}
                  >
                    {isLeft ? (
                      <TimelineCard item={item} />
                    ) : (
                      <p className="gradient-border px-6 py-4 card-hover font-semibold text-sm">{item.date}</p>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden mt-8 bg-white shadow-md rounded-lg p-6 w-full">
                    <p className="text-sm text-gray-600 font-medium">{item.date}</p>
                    <TimelineCard item={item} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

function TimelineCard({ item }) {
  return (

    <div className="gradient-border p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="text-left">
          <h4 className="font-semibold text-lg"> {item.title}</h4>
          {
            item.subtitle && (
              <p className="text-muted-foreground">{item.subtitle}</p>
            )
          }

          <ul className="list-disc mt-3 space-y-2">
            {item.description.map((point, i) => (
              <li key={i} className="ml-5">{point}</li>
            ))}
          </ul>

        </div>
      </div>
    </div>

  );
}