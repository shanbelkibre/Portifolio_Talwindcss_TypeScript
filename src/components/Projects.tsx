import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import houseRental from "@/assets/houserntal.jpg";
import ethioIntern from "@/assets/Ethiointern.jpg";
import portfolio from "@/assets/portifolio.jpg";
import studentReg from "@/assets/studentregisterion.jpg";
import studentMgmt from "@/assets/studentmanagment.jpg";
const Projects = () => {
  const projects = [
    {
      title: "House Rental System - Debre Birhan",
      description:
        "A full-stack property rental platform connecting house owners and renters in Debre Birhan town. Features role-based dashboards (Admin/Owner/Renter), house listings with image uploads, rental request management, subscription payments, visit scheduling, offline agreements, and real-time notifications.",
      tech: [
        "Laravel",
        "React",
        "MySQL",
        "Tailwind CSS",
        "Sanctum",
        "REST API",
      ],
      github: "https://github.com/shanbelkibre/house_rental_system",
      demo: "https://house-rental-system-ten.vercel.app/",
      image: houseRental,
    },
    {
      title: "EthioInternship Platform - DBU Hackathon",
      description:
        "A hackathon-winning internship management platform connecting students, companies, and universities. Features user registration with role-based access (Student/Company/University), internship posting and application system, search and filter functionality, application status tracking, and local storage for data persistence. Built within 48 hours during DBU Hackathon to solve the internship gap in Ethiopian higher education.",
      tech: ["HTML5", "CSS3", "JavaScript (ES6)", "LocalStorage API"],
      github:
        "https://github.com/shambelkibr/EthioInterShip_platform_DBU_Hackton",
      demo: "https://ethio-inter-ship-platform.vercel.app/",
      image: ethioIntern,
    },
    {
      title: "React Portfolio",
      description:
        "A modern, responsive personal portfolio website showcasing my projects, skills, and experience. Features dark/light mode toggle, smooth animations with Framer Motion, project filtering by category, contact form with email integration, and fully responsive design for all devices.",
      tech: ["React", "Vite", "JavaScript", "CSS", "Framer Motion", "EmailJS"],
      github: "https://github.com/shambelkibr/my-Portfolio-by-React",
      demo: "https://shanbelkibremyportfolio.vercel.app/",
      image: portfolio,
    },
    {
      title: "Student Registration Platform",
      description:
        "A simple Express + EJS + PostgreSQL student registration system for performing CRUD operations (Create, Read, Update, Delete).",
      tech: [
        "Node.js",
        "Express.js",
        "EJS",
        "PostgreSQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "https://github.com/shambelkibr/student-registration_platForm",
      demo: "https://student-registration-plat-form.vercel.app/",
      image: studentReg,
    },
    {
      title: "Task Management Dashboard",
      description:
        "An intuitive task management application with drag-and-drop functionality, team collaboration features, and deadline tracking. Built with modern UI/UX principles for optimal productivity.",
      tech: ["JavaScript", "Node.js", "MySQL", "Tailwind CSS"],
      github: null,
      demo: null,
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
    },
    {
      title: "Distributed Student Management System",
      description:
        "A 3-layer distributed system demonstrating communication between React frontend, Express.js backend, Java Socket server, and MySQL database. Features: add/view students, search by age/sex/grade, real-time message flow across all layers.",
      tech: ["React", "Express.js", "Java (Sockets)", "MySQL", "Axios"],
      github: "https://github.com/shambelkibr/Student-_managment_java_Socket",
      demo: "https://student-managment-java-socket.vercel.app/",
      image: studentMgmt,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <style>{`
        .project-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 80px hsl(var(--primary) / 0.25);
        }
        .project-image-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.15) 0%,
            rgba(0,0,0,0.75) 100%
          );
          transition: background 0.4s ease;
        }
        .project-card:hover .project-image-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.4) 0%,
            rgba(0,0,0,0.85) 100%
          );
        }
        .project-title-overlay {
          transform: translateY(0px);
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-title-overlay {
          transform: translateY(-2px);
        }
        .project-hover-info {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          position: absolute;
          bottom: 48px;
          left: 0;
          right: 0;
          padding: 0 1rem;
        }
        .project-card:hover .project-hover-info {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes card-fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-animate {
          animation: card-fade-in 0.5s ease-out both;
        }
        .image-zoom {
          transition: transform 0.6s ease;
        }
        .project-card:hover .image-zoom {
          transform: scale(1.08);
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="project-card card-animate flex flex-col border-border overflow-hidden p-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image section */}
              <div
                className="relative w-full flex-shrink-0 overflow-hidden"
                style={{ height: "260px" }}
              >
                {/* Zoomable background */}
                <div
                  className="image-zoom absolute inset-0"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient overlay */}
                <div className="project-image-overlay absolute inset-0" />

                {/* Tech tags shown on hover */}
                <div className="project-hover-info">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs font-semibold text-white"
                        style={{ background: "hsl(var(--primary) / 0.8)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bold title — always fully visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3
                    className="project-title-overlay text-white font-black leading-tight"
                    style={{
                      fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                      textShadow:
                        "0 2px 16px rgba(0,0,0,1), 0 1px 4px rgba(0,0,0,1)",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-grow bg-card">
                <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github ? (
                      <Button
                        asChild
                        size="sm"
                        variant="secondary"
                        className="flex-1 gap-2"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="flex-1 gap-2"
                        disabled
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    )}

                    {project.demo ? (
                      <Button asChild size="sm" className="flex-1 gap-2">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" className="flex-1 gap-2" disabled>
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
