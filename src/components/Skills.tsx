
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
      className="container px-3 py-5"
    >
      <h2 className="display-5 fw-bold text-center mb-5 gradient-text">Skills & Tech Stack</h2>
      <div className="row g-4">
        {Object.entries(skillsData).map(([category, data], index) => (
          <div className="col-md-6" key={category}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-card border border-border rounded-3 shadow-sm p-4 text-center h-100 glow-card"
            >
              <div className="d-inline-block p-3 rounded-circle mb-4" style={{backgroundColor: 'hsl(var(--accent)/0.2)', color: 'hsl(var(--accent))'}}>
                {React.cloneElement(data.icon, { size: 32 })}
              </div>
              <h3 className="h5 fw-bold mb-4">{category}</h3>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {data.skills.map(skill => (
                  <div key={skill} className="badge rounded-pill px-3 py-2" style={{backgroundColor: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))'}}>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
