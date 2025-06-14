
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
  asChild?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'solid', children, ...props }, ref) => {
    const baseClasses = 'px-6 py-3 rounded-md font-semibold transition-all duration-300';
    
    const variantClasses = {
      solid: 'bg-gradient-to-r from-accent to-secondary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--accent))]',
      outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--accent))]',
    };

    return (
      <motion.button
        className={cn(baseClasses, variantClasses[variant], className)}
        whileHover={{ scale: 1.05 }}
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
