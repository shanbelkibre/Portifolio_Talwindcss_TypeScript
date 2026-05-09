const About = () => {
  return (
    <section id="about" className="bg-secondary/30 pb-20 py-20">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a third-year Software Engineering student at Debre Berhan
            University, driven by a passion for building modern web applications
            that solve real-world problems. My journey in tech has been focused
            on mastering both frontend and backend development, allowing me to
            create full-stack solutions from concept to deployment.
          </p>

          <p>
            With expertise spanning modern JavaScript frameworks, server-side
            technologies, and database management systems, I thrive on the
            challenge of learning new technologies and applying them to create
            efficient, scalable applications. I believe in writing clean,
            maintainable code and following industry best practices.
          </p>

          <p>
            When I'm not coding, I'm exploring the latest trends in web
            development, contributing to open-source projects, and continuously
            expanding my skill set to stay at the forefront of technology
            innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
