
import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { CodeSlash, Brush, Database, Gear } from 'react-bootstrap-icons';
import TiltCard from './TiltCard';

const skillsData = {
  'Programming Languages': {
    icon: <CodeSlash size={32} />,
    skills: ['Java', 'Python', 'JavaScript', 'C'],
  },
  'Frontend': {
    icon: <Brush size={32} />,
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'CSS Animations'],
  },
  'Backend': {
    icon: <Database size={32} />,
    skills: ['Node.js', 'Firebase', 'Express.js'],
  },
  'Tools & Other Tech': {
    icon: <Gear size={32} />,
    skills: ['Git', 'GitHub', 'Postman', 'Netlify', 'Cloudinary', 'Vercel', 'VS Code'],
  },
};

const Skills: React.FC = () => {
  return (
    <Container className="px-3 py-5">
      <h2 className="display-5 fw-bold text-center mb-5 gradient-text">Skills & Tech Stack</h2>
      <Row className="g-4">
        {Object.entries(skillsData).map(([category, data]) => (
          <Col md={6} key={category}>
            <TiltCard options={{ scale: 1.03 }} className="h-100">
              <Card className="rounded-3 shadow-sm p-4 text-center h-100 glow-card" style={{backgroundColor: 'hsl(var(--card))', border: `1px solid hsl(var(--border))`}}>
                <div className="d-inline-block p-3 rounded-circle mb-4" style={{backgroundColor: 'hsl(var(--accent)/0.2)', color: 'hsl(var(--accent))'}}>
                  {data.icon}
                </div>
                <Card.Body className="p-0">
                  <Card.Title as="h3" className="h5 fw-bold mb-4">{category}</Card.Title>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {data.skills.map(skill => (
                      <Badge key={skill} pill bg="" className="px-3 py-2" style={{backgroundColor: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))'}}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </TiltCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
