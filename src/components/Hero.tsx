
import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTypingEffect } from '@/hooks/useTypingEffect';
import CustomButton from './CustomButton';

const Hero: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };
  
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    } as const),
    [],
  );

  const roles = useMemo(() => ["Full Stack Developer", "Software Engineer"], []);
  const typedRole = useTypingEffect(roles);

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4">
      {init && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 p-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Hi, I'm Aravinth Kumar
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold gradient-text mb-8 h-12 flex items-center justify-center">
          <span>{typedRole}</span>
          <span className="inline-block w-1 h-8 md:h-10 ml-2 bg-accent animate-pulse"></span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          I build beautiful, responsive, and highly interactive web applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <CustomButton variant="outline">Download Resume</CustomButton>
          <CustomButton variant="solid" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Let’s Connect</CustomButton>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
