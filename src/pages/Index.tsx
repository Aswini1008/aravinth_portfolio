
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="bg-background text-foreground font-sans selection:bg-accent/30">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <div className="relative bg-background z-10">
          <section id="about">
            <About />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
