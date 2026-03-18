import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5">
      <Container className="text-center">
        <h2 className="mb-4">Contact Me</h2>
        <p>Feel free to reach out. I'm always ready for a new journey.</p>
        <p>
          <strong>Email: </strong> liamtreykitsingh@gmail.com
        </p>
        <div>
          <Button variant="secondary" href="https://github.com/liamkitsingh" target="_blank" className="m-2">
            GitHub
          </Button>
          <Button variant="secondary" href="https://linkedin.com/in/liamkitsingh" target="_blank" className="m-2">
            Linkedin
          </Button>
          <Button variant="primary" href="resume.pdf" target="_blank" className="m-2">
            Resume
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
