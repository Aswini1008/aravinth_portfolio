
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';

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
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="bg-card/50 border border-border/50 p-8 rounded-lg glow-card h-full"
        >
          <h3 className="text-2xl font-bold mb-2">Aravinth Kumar</h3>
          <p className="text-lg text-accent mb-4 font-semibold">“A passionate Full Stack Developer crafting scalable web experiences.”</p>
          <p className="text-muted-foreground">
            Hello! I’m Aravinth Kumar, a results-driven developer who transforms ideas into interactive digital products. With a strong foundation in React.js, Node.js, and UI design, I thrive on building clean, high-performance applications.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/50 border border-border/50 p-8 rounded-lg glow-card"
        >
          <h3 className="text-2xl font-bold mb-4">A Few Facts About Me</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>My Journey into Tech</AccordionTrigger>
              <AccordionContent>
                My fascination with technology started with a simple "Hello, World!" and grew into a passion for building complex, user-centric applications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>My Development Philosophy</AccordionTrigger>
              <AccordionContent>
                I believe in writing clean, maintainable, and scalable code. Good code is not just about functionality, but also about creating a foundation that others can easily build upon.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Beyond the Keyboard</AccordionTrigger>
              <AccordionContent>
                When I'm not coding, I enjoy exploring new music, diving into sci-fi novels, and staying active. This helps me stay creative and bring fresh perspectives to my work.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
           <h4 className="text-xl font-semibold mt-8 mb-4">Quick Facts:</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle className="text-accent h-5 w-5" /> Lifelong Learner</li>
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle className="text-accent h-5 w-5" /> Collaborative Spirit</li>
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle className="text-accent h-5 w-5" /> Creative Problem Solver</li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 text-center"
      >
        <div className="inline-block bg-card border border-border p-8 rounded-lg glow-card">
          <p className="text-5xl font-bold gradient-text">5+</p>
          <p className="text-xl text-muted-foreground mt-2">Hands-On Projects Completed</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
