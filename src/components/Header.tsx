
import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name:
'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed-top header-blurred-bg"
    >
      <nav className="container d-flex justify-content-between align-items-center px-3 py-3">
        <a href="#home" className="fs-4 fw-bold gradient-text text-decoration-none">AK</a>
        <ul className="d-none d-md-flex align-items-center list-unstyled gap-4 mb-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-decoration-none" style={{color: 'hsl(var(--foreground) / 0.8)', transition: 'color 0.3s'}}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="d-md-none">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="btn-ghost">
                <Menu className="h-6 w-6" />
                <span className="visually-hidden">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <a href={link.href} className="d-block w-100 p-2 fs-6 text-decoration-none">
                    {link.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
