import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      <Helmet>
         
          <meta name="google-site-verification" content="MoPQDtCg0ZsIK-28mtxnmNP_eVNY2XNRhvst37iqP8E" />
        {/* Basic SEO */}
        <title>Shanbel Kibre | Full-Stack Developer</title>
        <meta name="description" content="I'm Shanbel Kibre, a Full-Stack Developer specializing in React, TypeScript, and Tailwind CSS. Explore my projects and let's build something great together." />
        <meta name="keywords" content="Shanbel Kibre, Shambel Kibre, Full-Stack Developer, Software Engineer, React Developer, TypeScript, Tailwind CSS, Portfolio, Ethiopia" />
        <meta name="author" content="Shanbel Kibre" />
        <link rel="canonical" href="https://shanbelkibredev.vercel.app/" />

        {/* Open Graph (LinkedIn, WhatsApp, Facebook) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shanbelkibredev.vercel.app/" />
        <meta property="og:title" content="Shanbel Kibre | Full-Stack Developer" />
        <meta property="og:description" content="I'm Shanbel Kibre, a Full-Stack Developer specializing in React, TypeScript, and Tailwind CSS. Explore my projects and let's build something great together." />
        <meta property="og:image" content="https://shanbelkibredev.vercel.app/preview.png" />
        <meta property="og:site_name" content="Shanbel Kibre Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://shanbelkibredev.vercel.app/" />
        <meta name="twitter:title" content="Shanbel Kibre | Full-Stack Developer" />
        <meta name="twitter:description" content="I'm Shanbel Kibre, a Full-Stack Developer specializing in React, TypeScript, and Tailwind CSS. Explore my projects and let's build something great together." />
        <meta name="twitter:image" content="https://shanbelkibredev.vercel.app/preview.png" />

        {/* Profile Links */}
        <link rel="me" href="https://www.linkedin.com/in/shanbel-kibre/" />
        <link rel="me" href="https://github.com/shanbelkibre" />
      </Helmet>

      <div>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        <footer className="bg-secondary/30 py-8 text-center text-muted-foreground">
          <p>© 2025 Shanbel Kibre. Built with passion and code.</p>
        </footer>
      </div>
    </>
  );
};

export default Index;