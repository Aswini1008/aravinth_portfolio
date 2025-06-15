
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Github, Linkedin, EnvelopeFill } from 'react-bootstrap-icons';

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: <Github />, 
    url: 'https://github.com/aravinth-kumar-b',
    tooltip: 'View my code'
  },
  { 
    name: 'LinkedIn', 
    icon: <Linkedin />, 
    url: 'https://linkedin.com/in/aravinth-kumar-b',
    tooltip: 'Connect with me'
  },
  { 
    name: 'Email', 
    icon: <EnvelopeFill />, 
    url: 'mailto:aravinth.kumar.dev@gmail.com',
    tooltip: "Let's chat!"
  },
];

const Contact: React.FC = () => {
  const customSolidStyle = {
    background: 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--secondary)))',
    border: 'none',
    color: 'hsl(var(--primary-foreground))',
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github size={32} />;
      case 'LinkedIn': return <Linkedin size={32} />;
      case 'Email': return <EnvelopeFill size={32} />;
      default: return null;
    }
  }

  return (
    <Container className="px-3 py-5 text-center">
      <h2 className="display-5 fw-bold mb-3 gradient-text">Let's Connect</h2>
      <p className="mb-5 mx-auto" style={{color: 'hsl(var(--muted-foreground))', maxWidth: '40rem'}}>Open for freelance, internships, and collaborations. Feel free to reach out through my socials or send me a message directly.</p>
      <div className="d-flex justify-content-center gap-5 mb-5">
        {socialLinks.map((link) => (
            <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none social-link"
                style={{color: 'hsl(var(--foreground) / 0.8)'}}
                title={link.tooltip}
              >
                {renderIcon(link.name)}
            </a>
        ))}
      </div>

      <Form
        className="mx-auto text-start"
        style={{maxWidth: '35rem'}}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          alert('Message sent successfully!');
          (e.target as HTMLFormElement).reset();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control name="name" type="text" placeholder="Your Name" required className="p-3" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name="email" type="email" placeholder="Your Email" required className="p-3" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Control name="message" as="textarea" rows={5} placeholder="Your Message" required className="p-3" />
        </Form.Group>
        
        <div className="text-center pt-3">
          <Button type="submit" variant="primary" style={customSolidStyle} className="custom-btn-solid rounded-pill px-4 py-2 fw-semibold">Send Message</Button>
        </div>
      </Form>

       <footer className="mt-5 pt-4 border-top" style={{borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))'}}>
        <p>&copy; {new Date().getFullYear()} Aravinth Kumar. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default Contact;
