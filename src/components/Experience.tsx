
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="container px-3 py-5"
    >
      <h2 className="display-5 fw-bold text-center mb-5 gradient-text">Experience</h2>
      <div className="row g-4">
        {experienceData.map((exp, index) => (
          <div key={index} className="col-md-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card bg-card border border-border p-3 rounded-3 shadow-sm d-flex flex-row align-items-start gap-3 glow-card h-100"
            >
              <div style={{color: 'hsl(var(--accent))'}} className="mt-1">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="fs-5 fw-bold">{exp.role}</h3>
                <p className="fw-semibold" style={{color: 'hsl(var(--secondary))'}}>{exp.company}</p>
                <p className="small my-1" style={{ color: 'hsl(var(--muted-foreground))' }}>{exp.duration}</p>
                <p className="mt-2" style={{ color: 'hsl(var(--muted-foreground))' }}>{exp.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
