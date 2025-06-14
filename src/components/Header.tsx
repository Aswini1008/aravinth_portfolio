import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-lg"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold gradient-text">AK</a>
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-foreground/80 hover:text-foreground hover:gradient-text transition-colors duration-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile menu could be added here later */}
      </nav>
    </motion.header>
  );
};

export default Header;
