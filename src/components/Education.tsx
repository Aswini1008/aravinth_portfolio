
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
  {
    degree: '12th Grade',
    institution: 'XYZ Matric School',
    years: '2021',
    details: 'Score: 90%',
  },
  {
    degree: '10th Grade',
    institution: 'XYZ Matric School',
    years: '2019',
    details: 'Score: 92%',
  },
];

const Education: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Education</h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-3 top-0 h-full w-1 bg-accent/30 rounded-full"></div>
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-12 flex items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="bg-background border-2 border-accent p-2 rounded-full z-10">
              <School className="text-accent" />
            </div>
            <div className="ml-8 p-6 bg-card border border-border rounded-lg shadow-lg w-full glow-card">
              <h3 className="text-xl font-bold">{item.degree}</h3>
              <p className="font-semibold text-secondary">{item.institution}</p>
              <p className="text-sm text-muted-foreground my-1">{item.years}</p>
              <p className="text-sm text-muted-foreground mt-2">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
