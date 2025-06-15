
import React, { useRef, useEffect } from 'react';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  options?: {
    max?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    easing?: string;
  };
}

const TiltCard: React.FC<TiltCardProps> = ({ children, options: userOptions, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);

  const defaultOptions = {
    max: 25,
    perspective: 1500,
    scale: 1.06,
    speed: 500,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  };

  const options = { ...defaultOptions, ...userOptions };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let timeoutId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }

      timeoutId = window.requestAnimationFrame(() => {
        const { left, top, width, height } = element.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        const rotateX = options.max * (0.5 - y) * 2;
        const rotateY = options.max * (x - 0.5) * 2;
        
        element.style.transform = `perspective(${options.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${options.scale}, ${options.scale}, ${options.scale})`;
      });
    };
    const handleMouseEnter = () => {
      element.style.transition = 'transform .05s linear';
    }
    const handleMouseLeave = () => {
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
      element.style.transition = `transform ${options.speed}ms ${options.easing}`;
      element.style.transform = `perspective(${options.perspective}px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
    };
  }, [ref, options]);
  
  const style = {
      ...rest.style,
      willChange: 'transform',
      transformStyle: 'preserve-3d',
  } as React.CSSProperties;

  return <div ref={ref} {...rest} style={style}>{children}</div>;
};

export default TiltCard;
