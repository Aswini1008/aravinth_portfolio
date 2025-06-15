
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container px-3 py-5">
      <h2 className="display-5 fw-bold mb-5 text-center gradient-text">About Me</h2>
      <div className="row g-5 align-items-start">
        <div className="col-md-6">
          <div className="bg-card-50 border border-secondary p-4 rounded-3 glow-card h-100">
            <h3 className="fs-4 fw-bold mb-2">Aravinth Kumar</h3>
            <p className="fs-5 text-accent mb-4 fw-semibold">“A passionate Full Stack Developer crafting scalable web experiences.”</p>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              Hello! I’m Aravinth Kumar, a results-driven developer who transforms ideas into interactive digital products. With a strong foundation in React.js, Node.js, and UI design, I thrive on building clean, high-performance applications.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-card-50 border border-secondary p-4 rounded-3 glow-card">
            <h3 className="fs-4 fw-bold mb-4">A Few Facts About Me</h3>
            <div className="accordion" id="aboutAccordion">
              <div className="accordion-item bg-transparent border-bottom">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-transparent text-foreground shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    My Journey into Tech
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
                  <div className="accordion-body" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    My fascination with technology started with a simple "Hello, World!" and grew into a passion for building complex, user-centric applications.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-transparent border-bottom">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-transparent text-foreground shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    My Development Philosophy
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
                  <div className="accordion-body" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    I believe in writing clean, maintainable, and scalable code. Good code is not just about functionality, but also about creating a foundation that others can easily build upon.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-transparent border-bottom-0">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-transparent text-foreground shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                    Beyond the Keyboard
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
                  <div className="accordion-body" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    When I'm not coding, I enjoy exploring new music, diving into sci-fi novels, and staying active. This helps me stay creative and bring fresh perspectives to my work.
                  </div>
                </div>
              </div>
            </div>
            <h4 className="fs-5 fw-semibold mt-5 mb-4">Quick Facts:</h4>
            <ul className="list-unstyled d-grid gap-2">
              <li className="d-flex align-items-center gap-2" style={{ color: 'hsl(var(--muted-foreground))' }}><CheckCircle style={{ color: 'hsl(var(--accent))' }} size={20} /> Lifelong Learner</li>
              <li className="d-flex align-items-center gap-2" style={{ color: 'hsl(var(--muted-foreground))' }}><CheckCircle style={{ color: 'hsl(var(--accent))' }} size={20} /> Collaborative Spirit</li>
              <li className="d-flex align-items-center gap-2" style={{ color: 'hsl(var(--muted-foreground))' }}><CheckCircle style={{ color: 'hsl(var(--accent))' }} size={20} /> Creative Problem Solver</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <div className="d-inline-block bg-card border border-border p-4 rounded-3 glow-card">
          <p className="display-3 fw-bold gradient-text">5+</p>
          <p className="fs-5 mt-2" style={{ color: 'hsl(var(--muted-foreground))' }}>Hands-On Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
