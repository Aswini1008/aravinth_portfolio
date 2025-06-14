
import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const skills = [
  'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express',
  'Three.js', 'Framer Motion', 'Tailwind CSS', 'HTML5', 'CSS3',
  'SQL', 'NoSQL', 'Git', 'Docker', 'Next.js'
];

const Skills: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Skills & Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex items-center gap-2 bg-card p-3 rounded-lg border border-border shadow-lg"
          >
            <BadgeCheck className="text-accent" />
            <span className="font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
