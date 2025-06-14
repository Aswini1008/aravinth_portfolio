
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
      className="container mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card border border-border rounded-lg shadow-lg overflow-hidden flex flex-col group glow-card"
          >
            <div className="overflow-hidden h-48">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
            </div>
            <div
              className="p-6 flex-grow flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-border/20">
                <CustomButton variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>
                  <Github size={16} className="mr-2" /> GitHub
                </CustomButton>
                <CustomButton variant="solid" onClick={() => window.open(project.liveUrl, '_blank')}>
                  <ExternalLink size={16} className="mr-2" /> Live Demo
                </CustomButton>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
