
import React from 'react';
import { motion } from 'framer-motion';
import { School } from 'lucide-react';

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="container px-3 py-5"
    >
      <h2 className="display-5 fw-bold text-center mb-5 gradient-text">Education</h2>
      <div className="position-relative mx-auto" style={{maxWidth: '42rem'}}>
        <div className="position-absolute start-0 top-0 h-100 rounded-pill" style={{ left: '0.65rem', width: '4px', backgroundColor: 'hsl(var(--accent)/0.3)'}}></div>
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="d-flex align-items-start mb-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="z-1 rounded-circle p-2 border-2" style={{backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--accent))', borderStyle: 'solid'}}>
              <School style={{color: 'hsl(var(--accent))'}} />
            </div>
            <div className="ms-4 p-3 bg-card border border-border rounded-3 shadow-sm w-100 glow-card">
              <h3 className="fs-5 fw-bold">{item.degree}</h3>
              <p className="fw-semibold" style={{color: 'hsl(var(--secondary))'}}>{item.institution}</p>
              <p className="small my-1" style={{color: 'hsl(var(--muted-foreground))'}}>{item.years}</p>
              <p className="small mt-2" style={{color: 'hsl(var(--muted-foreground))'}}>{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
