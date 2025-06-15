import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import CustomButton from './CustomButton';

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
  const inputClasses = "w-full bg-card border border-border rounded-md px-4 py-3 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="container px-3 py-5 text-center"
    >
      <h2 className="display-5 fw-bold mb-3 gradient-text">Let's Connect</h2>
      <p className="mb-5 mx-auto" style={{color: 'hsl(var(--muted-foreground))', maxWidth: '40rem'}}>Open for freelance, internships, and collaborations. Feel free to reach out through my socials or send me a message directly.</p>
      <div className="d-flex justify-content-center gap-5 mb-5">
        {socialLinks.map((link) => (
            <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5, color: 'hsl(var(--accent))' }}
                whileTap={{ scale: 1.1 }}
                className="text-decoration-none"
                style={{color: 'hsl(var(--foreground) / 0.8)', transition: 'color 0.3s'}}
                title={link.tooltip}
              >
                {React.cloneElement(link.icon, { size: 32 })}
            </motion.a>
        ))}
      </div>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="mx-auto text-start"
        style={{maxWidth: '35rem'}}
        onSubmit={(e) => {
          e.preventDefault();
          // To-do: Add toast notification
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label visually-hidden">Name</label>
          <input id="name" name="name" type="text" placeholder="Your Name" required className="form-control p-3" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label visually-hidden">Email</label>
          <input id="email" name="email" type="email" placeholder="Your Email" required className="form-control p-3" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label visually-hidden">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows={5} required className="form-control p-3" />
        </div>
        <div className="text-center pt-3">
          <CustomButton type="submit" variant="solid">Send Message</CustomButton>
        </div>
      </motion.form>

       <footer className="mt-5 pt-4 border-top" style={{color: 'hsl(var(--muted-foreground))'}}>
        <p>&copy; {new Date().getFullYear()} Aravinth Kumar. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default Contact;
