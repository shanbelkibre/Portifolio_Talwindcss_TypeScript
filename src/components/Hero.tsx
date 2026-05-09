import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full flex items-start justify-center min-h-screen overflow-hidden !pt-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, hsl(var(--background) / 0.9), hsl(var(--background) / 0.95)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container max-w-6xl mx-auto px-6 py-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 w-full max-w-sm lg:w-5/12 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src={profileImg}
                alt="Shanbel Kibre"
                className="relative w-80 h-100 md:w-90 md:h-100 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 w-full lg:w-7/12 text-center lg:text-left animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/50 rounded-full border border-primary/20">
              <span className="text-sm text-muted-foreground">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Shanbel Kibre</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Software Engineering Student
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Building modern web applications with cutting-edge technologies.
              Passionate about creating elegant solutions to complex problems.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button asChild size="lg" className="gap-2">
                <a href="#contact">Get in Touch</a>
              </Button>

              <Button asChild size="lg" variant="secondary" className="gap-2">
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/shanbelkibre"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/shanbel-kibre-b5ab38369"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
