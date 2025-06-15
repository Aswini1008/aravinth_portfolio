
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import CustomButton from './CustomButton';

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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="container px-3 py-5"
    >
      <h2 className="display-5 fw-bold text-center mb-5 gradient-text">Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projectsData.map((project, index) => (
          <div key={index} className="col">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-card border border-border rounded-3 shadow-sm overflow-hidden h-100 d-flex flex-column group glow-card"
            >
              <div className="overflow-hidden" style={{height: '12rem'}}>
                <img src={project.imageUrl} alt={project.title} className="w-100 h-100 object-cover" style={{ transition: 'transform 0.5s ease-in-out'}} />
              </div>
              <div
                className="card-body d-flex flex-column"
              >
                <h3 className="h5 card-title fw-bold mb-2">{project.title}</h3>
                <p className="card-text flex-grow-1" style={{color: 'hsl(var(--muted-foreground))'}}>{project.description}</p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="badge rounded-pill" style={{backgroundColor: 'hsl(var(--secondary))', color: 'hsl(var(--secondary-foreground))'}}>{tag}</span>
                  ))}
                </div>
                <div className="d-flex flex-wrap gap-2 mt-auto pt-3 border-top" style={{borderColor: 'hsl(var(--border) / 0.2)'}}>
                  <CustomButton variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>
                    <Github size={16} className="me-2" /> GitHub
                  </CustomButton>
                  <CustomButton variant="solid" onClick={() => window.open(project.liveUrl, '_blank')}>
                    <ExternalLink size={16} className="me-2" /> Live Demo
                  </CustomButton>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
