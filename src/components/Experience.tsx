
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
      className="container mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-card border border-border p-6 rounded-lg shadow-lg flex items-start gap-4 glow-card"
          >
            <div className="text-accent mt-1">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="font-semibold text-secondary">{exp.company}</p>
              <p className="text-sm text-muted-foreground my-1">{exp.duration}</p>
              <p className="text-muted-foreground mt-2">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
