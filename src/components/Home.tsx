import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <section id="home" className="d-flex align-items-center text-center vh-100">
      <Container>
        <h1>Liam Kitsingh</h1>
        <p className="lead">Software Developer | Product & Systems</p>
        <p className="text-supporting">I'm a 4th Year Computer Science Student at the University of Toronto</p>
        <p className="text-supporting">Welcome to my portfolio :)</p>
        <p>
          <Button variant="primary" href="#projects">View my projects</Button>
        </p>
      </Container>
    </section>
  );
};

export default Home;
