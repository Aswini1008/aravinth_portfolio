
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-12 text-center gradient-text">About Me</h2>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 bg-card border border-border rounded-lg flex items-center justify-center p-4 glow-card"
        >
          <p className="text-muted-foreground">3D Animated Developer Icon Here</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/50 border border-border/50 p-8 rounded-lg glow-card"
        >
          <h3 className="text-2xl font-bold mb-2">Aravinth Kumar</h3>
          <p className="text-lg text-accent mb-4 font-semibold">“A passionate Full Stack Developer crafting scalable web experiences.”</p>
          <p className="text-muted-foreground">
            Hello! I’m Aravinth Kumar, a results-driven developer who transforms ideas into interactive digital products. With a strong foundation in React.js, Node.js, and UI design, I thrive on building clean, high-performance applications.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
