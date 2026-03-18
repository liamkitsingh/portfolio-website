import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 bg-dark text-white text-center">
      <Container>
        <p>Copyright &copy; {new Date().getFullYear()} Liam Kitsingh</p>
      </Container>
    </footer>
  );
};

export default Footer;
