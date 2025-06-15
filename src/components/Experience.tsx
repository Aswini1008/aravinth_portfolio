
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BriefcaseFill } from 'react-bootstrap-icons';
import TiltCard from './TiltCard';

const experienceData = [
  {
    role: 'Virtual Internship',
    company: 'Deloitte Job Simulation',
    duration: 'Remote',
    description: 'Explored full-stack workflows, completed simulated business tasks.',
  },
  {
    role: 'Smart Web Design',
    company: 'TCS iON Remote Internship',
    duration: 'Remote',
    description: 'Developed a responsive music-sharing app using React and Firebase.',
  }
];

const Experience: React.FC = () => {
  return (
    <Container className="px-3 py-5">
      <h2 className="display-5 fw-bold text-center mb-5 gradient-text">Experience</h2>
      <Row className="g-4">
        {experienceData.map((exp, index) => (
          <Col md={6} key={index}>
            <TiltCard className="h-100">
              <Card className="p-3 rounded-3 shadow-sm d-flex flex-row align-items-start gap-3 glow-card h-100" style={{backgroundColor: 'hsl(var(--card))', border: `1px solid hsl(var(--border))`}}>
                <div style={{color: 'hsl(var(--accent))'}} className="mt-1">
                  <BriefcaseFill size={24} />
                </div>
                <Card.Body className="p-0">
                  <Card.Title as="h3" className="fs-5 fw-bold">{exp.role}</Card.Title>
                  <Card.Subtitle className="fw-semibold" style={{color: 'hsl(var(--secondary))'}}>{exp.company}</Card.Subtitle>
                  <p className="small my-1" style={{ color: 'hsl(var(--muted-foreground))' }}>{exp.duration}</p>
                  <Card.Text as="p" className="mt-2 mb-0" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {exp.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </TiltCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;
