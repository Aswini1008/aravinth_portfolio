
import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container as ParticlesContainer } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { Button } from 'react-bootstrap';

const Hero: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: ParticlesContainer) => {
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
          value: "hsl(var(--foreground))",
        },
        links: {
          color: "hsl(var(--foreground))",
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
  
  const customSolidStyle = {
    background: 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--secondary)))',
    border: 'none',
    color: 'hsl(var(--primary-foreground))',
  };

  const customOutlineStyle = {
    borderColor: 'hsl(var(--accent))',
    color: 'hsl(var(--accent))',
    borderWidth: '2px',
  };

  return (
    <div className="position-relative vh-100 d-flex align-items-center justify-content-center text-center overflow-hidden px-3">
      {init && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />}
      <div className="z-1 p-3">
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
          <Button variant="outline-primary" className="custom-btn-outline rounded-pill px-4 py-2 fw-semibold" style={customOutlineStyle}>Download Resume</Button>
          <Button variant="primary" className="custom-btn-solid rounded-pill px-4 py-2 fw-semibold" style={customSolidStyle} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Let’s Connect</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
