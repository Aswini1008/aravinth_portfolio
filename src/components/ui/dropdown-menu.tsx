
import React from 'react';

// Simplified Bootstrap Dropdown
export const DropdownMenu: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return <div className="dropdown">{children}</div>;
};

export const DropdownMenuTrigger: React.FC<{children: React.ReactNode, asChild?: boolean}> = ({ children }) => {
  return React.cloneElement(children as React.ReactElement, {
      'data-bs-toggle': 'dropdown',
      'aria-expanded': 'false'
  });
};

export const DropdownMenuContent: React.FC<{children: React.ReactNode, align?: 'end' | 'start', className?: string}> = ({ children, align, className }) => {
  return (
    <ul className={["dropdown-menu", align === 'end' ? 'dropdown-menu-end' : '', className].join(' ')} style={{backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))'}}>
      {children}
    </ul>
  );
};

export const DropdownMenuItem: React.FC<{children: React.ReactNode, asChild?: boolean, className?: string}> = ({ children, className, asChild }) => {
    const child = React.Children.only(children) as React.ReactElement;
    if (asChild) {
        return React.cloneElement(child, {
            className: ["dropdown-item", child.props.className].join(' '),
            style: {color: 'hsl(var(--foreground))'}
        });
    }
  return (
    <li><a className={["dropdown-item", className].join(' ')} href="#" style={{color: 'hsl(var(--foreground))'}}>{children}</a></li>
  );
};
