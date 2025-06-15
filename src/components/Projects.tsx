
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Github, BoxArrowUpRight } from 'react-bootstrap-icons';

const projectsData = [
  {
    title: 'ISAI – Musical Web App',
    description: 'Role-based music sharing platform using React.js, Firebase, Cloudinary.',
    tags: ['React.js', 'Firebase', 'Cloudinary'],
    githubUrl: 'https://github.com/aravinth-kumar-b',
    liveUrl: '#',
    imageUrl: 'https://placehold.co/600x400/27272a/a1a1aa?text=ISAI+Web+App',
  },
  {
    title: 'Portfolio CMS (lovable.dev)',
    description: 'Custom CMS-based portfolio generator using React, Tailwind, and animations.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/aravinth-kumar-b',
    liveUrl: '#',
    imageUrl: 'https://placehold.co/600x400/27272a/a1a1aa?text=Portfolio+CMS',
  },
  {
    title: 'Smart Solar Tracker',
    description: 'IoT project simulating passive solar tracking with cleaning mechanism.',
    tags: ['IoT', 'Sensors', 'Automation'],
    githubUrl: 'https://github.com/aravinth-kumar-b',
    liveUrl: '#',
    imageUrl: 'https://placehold.co/600x400/27272a/a1a1aa?text=Solar+Tracker',
  },
];

const Projects: React.FC = () => {
    const customSolidStyle = {
      background: 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--secondary)))',
      border: 'none',
      color: 'hsl(var(--primary-foreground))',
    };

    const customOutlineStyle = {
      borderColor: 'hsl(var(--accent))',
      color: 'hsl(var(--accent))',
      borderWidth: '2px',
    };

  return (
    <Container className="px-3 py-5">
      <h2 className="display-5 fw-bold text-center mb-5 gradient-text">Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projectsData.map((project, index) => (
          <Col key={index}>
            <Card className="rounded-3 shadow-sm overflow-hidden h-100 d-flex flex-column group glow-card" style={{backgroundColor: 'hsl(var(--card))', border: `1px solid hsl(var(--border))`}}>
              <div className="overflow-hidden" style={{height: '12rem'}}>
                <Card.Img variant="top" src={project.imageUrl} alt={project.title} className="w-100 h-100" style={{ objectFit: 'cover', transition: 'transform 0.5s ease-in-out'}} />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h3" className="h5 fw-bold mb-2">{project.title}</Card.Title>
                <Card.Text className="flex-grow-1" style={{color: 'hsl(var(--muted-foreground))'}}>
                  {project.description}
                </Card.Text>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} pill bg="" style={{backgroundColor: 'hsl(var(--secondary))', color: 'hsl(var(--secondary-foreground))'}}>{tag}</Badge>
                  ))}
                </div>
                <div className="d-flex flex-wrap gap-2 mt-auto pt-3 border-top" style={{borderColor: 'hsl(var(--border) / 0.2)'}}>
                  <Button variant="outline-primary" style={customOutlineStyle} className="custom-btn-outline" onClick={() => window.open(project.githubUrl, '_blank')}>
                    <Github size={16} className="me-2" /> GitHub
                  </Button>
                  <Button variant="primary" style={customSolidStyle} className="custom-btn-solid" onClick={() => window.open(project.liveUrl, '_blank')}>
                    <BoxArrowUpRight size={16} className="me-2" /> Live Demo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
