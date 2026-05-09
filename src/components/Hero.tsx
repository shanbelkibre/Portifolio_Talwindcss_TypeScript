import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden pb-20"
      style={{
        minHeight: "100vh",
        paddingTop: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `linear-gradient(to bottom, hsl(var(--background) / 0.88), hsl(var(--background) / 0.97)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Decorative gradient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="container max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div
            className="order-2 lg:order-1 w-full max-w-sm lg:w-5/12 flex justify-center"
            style={{ animation: "hero-fade-in 0.7s ease-out both" }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, transparent 70%)",
                  filter: "blur(28px)",
                  transform: "scale(1.15)",
                }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, transparent 70%)",
                  filter: "blur(48px)",
                  transform: "scale(1.3)",
                }}
              />
              <img
                src={profileImg}
                alt="Shanbel Kibre"
                className="relative w-72 h-80 md:w-80 md:h-96 rounded-full object-cover border-4 border-primary/40"
                style={{
                  boxShadow:
                    "0 8px 32px hsl(var(--primary) / 0.3), 0 24px 64px hsl(var(--primary) / 0.15), 0 0 0 1px hsl(var(--primary) / 0.1)",
                  animation: "float 6s ease-in-out infinite",
                }}
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 w-full lg:w-7/12 text-center lg:text-left">
            <div
              className="inline-block mb-4 px-4 py-2 bg-secondary/60 rounded-full border border-primary/25 shadow-md"
              style={{ animation: "hero-fade-in 0.5s ease-out both" }}
            >
              <span className="text-sm text-muted-foreground">
                Available for opportunities
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ animation: "hero-fade-in 0.6s ease-out 0.1s both" }}
            >
              Hi, I'm{" "}
              <span className="text-gradient typing-name">Shanbel Kibre</span>
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-4"
              style={{ animation: "hero-fade-in 0.6s ease-out 0.2s both" }}
            >
              Software Engineering Student
            </p>

            <p
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              style={{ animation: "hero-fade-in 0.6s ease-out 0.3s both" }}
            >
              Building modern web applications with cutting-edge technologies.
              Passionate about creating elegant solutions to complex problems.
            </p>

            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              style={{ animation: "hero-fade-in 0.6s ease-out 0.4s both" }}
            >
              <Button
                asChild
                size="lg"
                className="gap-2 shadow-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <a href="#contact">Get in Touch</a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="secondary"
                className="gap-2 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div
              className="flex gap-4 justify-center lg:justify-start"
              style={{ animation: "hero-fade-in 0.6s ease-out 0.5s both" }}
            >
              <a
                href="https://github.com/shanbelkibre"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-200 hover:scale-110 hover:shadow-lg shadow-sm"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="https://linkedin.com/in/shanbel-kibre-b5ab38369"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-200 hover:scale-110 hover:shadow-lg shadow-sm"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }

        @keyframes hero-fade-in {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes typing {
          from { width: 0; }
          to   { width: 7.8em; }
        }

        @keyframes blink {
          0%, 100% { border-color: hsl(var(--primary)); }
          50%       { border-color: transparent; }
        }

 .typing-name {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid hsl(var(--primary));

  width: 0;

  line-height: 1.1;
  vertical-align: middle;

  animation:
    typing 3s steps(13, end) infinite alternate,
    blink 0.7s step-end infinite;
}

        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; }
          .typing-name {
            width: 7.8em;
            border-right: none;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
