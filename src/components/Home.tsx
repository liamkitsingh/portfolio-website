import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <section id="home" className="d-flex align-items-center text-center vh-100">
      <Container>
        <h1>Liam Kitsingh</h1>
        <p className="lead">Aspiring Developer</p>
        <p className="text-supporting">I'm a 3rd Year Computer Science Student at University of Toronto Scarborough</p>
        <p className="text-supporting">Welcome to my portfolio :)</p>
        <p>
          <Button variant="primary" href="#projects">View my projects</Button>
        </p>
      </Container>
    </section>
  );
};

export default Home;
