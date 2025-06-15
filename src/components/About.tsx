import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';

const About: React.FC = () => {
  return (
    <Container className="px-3 py-5">
      <h2 className="display-5 fw-bold mb-5 text-center gradient-text">About Me</h2>
      <Row className="g-5 align-items-stretch">
        <Col md={6}>
          <div className="bg-card-50 border border-secondary p-4 rounded-3 glow-card h-100" style={{backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))'}}>
            <h3 className="fs-4 fw-bold mb-2">Aravinth Kumar</h3>
            <p className="fs-5 mb-4 fw-semibold" style={{color: 'hsl(var(--accent))'}}>“A passionate Full Stack Developer crafting scalable web experiences.”</p>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              Hello! I’m Aravinth Kumar, a results-driven developer who transforms ideas into interactive digital products. With a strong foundation in React.js, Node.js, and UI design, I thrive on building clean, high-performance applications.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="bg-card-50 border border-secondary p-4 rounded-3 glow-card h-100" style={{backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))'}}>
            <h3 className="fs-4 fw-bold mb-4">A Few Facts About Me</h3>
            <Accordion flush>
              <Accordion.Item eventKey="0" className="bg-transparent">
                <Accordion.Header>My Journey into Tech</Accordion.Header>
                <Accordion.Body style={{ color: 'hsl(var(--muted-foreground))' }}>
                  My fascination with technology started with a simple "Hello, World!" and grew into a passion for building complex, user-centric applications.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="bg-transparent">
                <Accordion.Header>My Development Philosophy</Accordion.Header>
                <Accordion.Body style={{ color: 'hsl(var(--muted-foreground))' }}>
                  I believe in writing clean, maintainable, and scalable code. Good code is not just about functionality, but also about creating a foundation that others can easily build upon.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="bg-transparent border-0">
                <Accordion.Header>Beyond the Keyboard</Accordion.Header>
                <Accordion.Body style={{ color: 'hsl(var(--muted-foreground))' }}>
                  When I'm not coding, I enjoy exploring new music, diving into sci-fi novels, and staying active. This helps me stay creative and bring fresh perspectives to my work.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h4 className="fs-5 fw-semibold mt-5 mb-4">Quick Facts:</h4>
            <ul className="list-unstyled d-grid gap-2">
              <li className="d-flex align-items-center gap-2" style={{ color: 'hsl(var(--muted-foreground))' }}><CheckCircleFill style={{ color: 'hsl(var(--accent))' }} size={20} /> Lifelong Learner</li>
              <li className="d-flex align-items-center gap-2" style={{ color: 'hsl(var(--muted-foreground))' }}><CheckCircleFill style={{ color: 'hsl(var(--accent))' }} size={20} /> Collaborative Spirit</li>
              <li className="d-flex align-items-center gap-2" style={{ color: 'hsl(var(--muted-foreground))' }}><CheckCircleFill style={{ color: 'hsl(var(--accent))' }} size={20} /> Creative Problem Solver</li>
            </ul>
          </div>
        </Col>
      </Row>
      <div className="mt-5 text-center">
        <div className="d-inline-block bg-card border p-4 rounded-3 glow-card" style={{backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))'}}>
          <p className="display-3 fw-bold gradient-text">5+</p>
          <p className="fs-5 mt-2" style={{ color: 'hsl(var(--muted-foreground))' }}>Hands-On Projects Completed</p>
        </div>
      </div>
    </Container>
  );
};

export default About;
