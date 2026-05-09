import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import houseRental from "@/assets/houserntal.png";
import ethioIntern from "@/assets/Ethiointern.png";
import portfolio from "@/assets/portifolio.png";
import studentReg from "@/assets/studentregisterion.png";
import studentMgmt from "@/assets/studentmanagment.png";

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
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px hsl(var(--primary) / 0.2);
        }
        .project-image-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.1) 0%,
            rgba(0,0,0,0.65) 100%
          );
          transition: background 0.4s ease;
        }
        .project-card:hover .project-image-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.05) 0%,
            rgba(0,0,0,0.45) 100%
          );
        }
        .project-title-overlay {
          transform: translateY(4px);
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-title-overlay {
          transform: translateY(0px);
        }
        @keyframes card-fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-animate {
          animation: card-fade-in 0.5s ease-out both;
        }
      `}</style>

      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="project-card card-animate flex flex-col border-border overflow-hidden p-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image section */}
              <div
                className="relative w-full flex-shrink-0"
                style={{ height: "200px" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Gradient overlay */}
                <div className="project-image-overlay absolute inset-0" />

                {/* Bold title on image */}
                <div className="absolute inset-0 flex items-end p-4">
                  <h3
                    className="project-title-overlay text-white font-black text-lg leading-tight"
                    style={{
                      textShadow:
                        "0 2px 16px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)",
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
