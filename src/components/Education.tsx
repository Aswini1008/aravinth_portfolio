
import React from 'react';
import { Container } from 'react-bootstrap';
import { MortarboardFill } from 'react-bootstrap-icons';
import TiltCard from './TiltCard';

const educationData = [
  {
    degree: 'B.E. Computer Science',
    institution: 'Panimalar Engineering College',
    years: '2021 – 2025',
    details: 'CGPA: 8.5 | Participated in Hackathons, Projects',
  },
];

const Education: React.FC = () => {
  return (
    <Container className="px-3 py-5">
      <h2 className="display-5 fw-bold text-center mb-5 gradient-text">Education</h2>
      <div className="position-relative mx-auto" style={{maxWidth: '42rem'}}>
        <div className="position-absolute h-100 rounded-pill" style={{ left: '18px', width: '4px', backgroundColor: 'hsl(var(--accent)/0.3)'}}></div>
        {educationData.map((item, index) => (
          <div key={index} className="d-flex align-items-start mb-5 position-relative">
            <div className="z-1 rounded-circle p-2 border-2 d-inline-flex justify-content-center align-items-center" style={{backgroundColor: 'hsl(var(--background))', border: `2px solid hsl(var(--accent))`, width: '40px', height: '40px'}}>
              <MortarboardFill style={{color: 'hsl(var(--accent))'}} size={20} />
            </div>
            <TiltCard className="ms-4 w-100">
              <div className="p-3 rounded-3 shadow-sm w-100 glow-card" style={{backgroundColor: 'hsl(var(--card))', border: `1px solid hsl(var(--border))`}}>
                <h3 className="fs-5 fw-bold">{item.degree}</h3>
                <p className="fw-semibold" style={{color: 'hsl(var(--secondary))'}}>{item.institution}</p>
                <p className="small my-1" style={{color: 'hsl(var(--muted-foreground))'}}>{item.years}</p>
                <p className="small mt-2" style={{color: 'hsl(var(--muted-foreground))'}}>{item.details}</p>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Education;
