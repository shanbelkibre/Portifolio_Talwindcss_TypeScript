import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="bg-secondary/30 py-8 text-center text-muted-foreground">
        <p>© 2024 Shanbel Kibre. Built with passion and code.</p>
      </footer>
    </div>
  );
};

export default Index;
