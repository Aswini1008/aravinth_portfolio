
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brush, Database, Cog } from 'lucide-react';

const skillsData = {
  'Programming Languages': {
    icon: <Code />,
    skills: ['Java', 'Python', 'JavaScript', 'C'],
  },
  'Frontend': {
    icon: <Brush />,
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Framer Motion'],
  },
  'Backend': {
    icon: <Database />,
    skills: ['Node.js', 'Firebase', 'Express.js'],
  },
  'Tools & Other Tech': {
    icon: <Cog />,
    skills: ['Git', 'GitHub', 'Postman', 'Netlify', 'Cloudinary', 'Vercel', 'VS Code'],
  },
};

const Skills: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Skills & Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillsData).map(([category, data], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card border border-border rounded-lg shadow-lg p-6 text-center glow-card"
          >
            <div className="inline-block bg-accent/20 text-accent p-3 rounded-full mb-4">
              {React.cloneElement(data.icon, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold mb-4">{category}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {data.skills.map(skill => (
                <div key={skill} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
