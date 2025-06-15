
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CustomButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'solid', children, ...props }, ref) => {
    const baseClasses = 'btn rounded-pill px-4 py-2 fw-semibold transition-all duration-300';
    
    const variantClasses = {
      solid: 'btn-primary text-primary-foreground',
      outline: 'btn-outline-primary',
    };

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
    
    const hoverStyle = variant === 'solid' ? {
        boxShadow: '0 0 20px hsl(var(--accent))'
    } : {
        backgroundColor: 'hsl(var(--accent))',
        color: 'hsl(var(--primary-foreground))',
        boxShadow: '0 0 20px hsl(var(--accent))'
    }

    return (
      <motion.button
        className={[baseClasses, className].join(' ')}
        style={variant === 'solid' ? customSolidStyle : customOutlineStyle}
        whileHover={{ scale: 1.05, ...hoverStyle }}
        whileTap={{ scale: 0.95 }}
        ref={ref}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;
