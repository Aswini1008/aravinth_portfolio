
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: <Github />, 
    url: 'https://github.com/aravinth-kumar-b',
    tooltip: 'View my code'
  },
  { 
    name: 'LinkedIn', 
    icon: <Linkedin />, 
    url: 'https://linkedin.com/in/aravinth-kumar-b',
    tooltip: 'Connect with me'
  },
  { 
    name: 'Email', 
    icon: <Mail />, 
    url: 'mailto:aravinth.kumar.dev@gmail.com',
    tooltip: "Let's chat!"
  },
];

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-bold mb-4 gradient-text">Let's Connect</h2>
      <p className="text-muted-foreground mb-8">Open for freelance, internships, and collaborations.</p>
      <div className="flex justify-center gap-8">
        {socialLinks.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5, color: 'hsl(var(--accent))' }}
                whileTap={{ scale: 1.1 }}
                className="text-foreground/80 transition-colors"
              >
                {React.cloneElement(link.icon, { size: 32 })}
              </motion.a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
       <footer className="mt-20 pt-8 border-t border-border text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Aravinth Kumar. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default Contact;
