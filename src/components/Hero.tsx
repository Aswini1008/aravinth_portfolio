
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
    <div className="position-relative min-vh-100 d-flex align-items-center justify-content-center text-center overflow-hidden px-3">
      {init && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-1 p-3"
      >
        <h1 className="display-4 display-md-2 fw-bold mb-2">
          Hi, I'm Aravinth Kumar
        </h1>
        <div className="display-6 display-md-4 fw-bold gradient-text mb-4 d-flex align-items-center justify-content-center" style={{height: '3rem'}}>
          <span>{typedRole}</span>
          <span className="d-inline-block ms-2" style={{width: '4px', height: '2.5rem', backgroundColor: 'hsl(var(--accent))', animation: 'pulse 1.5s infinite'}}></span>
        </div>
        <p className="fs-5 fs-md-4 mb-4 mx-auto" style={{ color: 'hsl(var(--muted-foreground))', maxWidth: '50rem' }}>
          I build beautiful, responsive, and highly interactive web applications.
        </p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <CustomButton variant="outline">Download Resume</CustomButton>
          <CustomButton variant="solid" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Let’s Connect</CustomButton>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
