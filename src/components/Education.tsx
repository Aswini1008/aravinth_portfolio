
import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-bold mb-4 gradient-text">Education</h2>
      <p className="text-muted-foreground">My educational background will be detailed here.</p>
    </motion.div>
  );
};

export default Education;
