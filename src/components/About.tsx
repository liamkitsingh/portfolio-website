import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './About.css';

const About: React.FC = () => {
  const [selection, setSelection] = useState('about');

  const content: { [key: string]: React.ReactNode } = {
    about: (
      <>
        <p>
          Hailing from Trinidad and Tobago, I’m a Computer Science student at the University of Toronto Scarborough with a deep interest in how 
          efficient code can solve real-world problems. Whether I’m architecting a full-stack application or 
          experimenting with machine learning models, I’m driven by the challenge of making software that 
          feels intuitive and impactful.
        </p>
      </>
    ),
    interests: (
      <p>
        Outside of coding and math, I really appreciate good fiction. I absolutely love watching movies, especially sci-fi and fantasy (PS: I'm really looking forward to Project Hail Mary and the Odyssey).
        In fact, my love for cinema inspired me to make a movie recommendation engine (MovieMind)!
        When I'm not watching cinema, you can find me reading a dark fantasy book (just started Malazan: Book of the Fallen!). I'm also a huge football/soccer fan,
        for which Liverpool is my favorite team (YNWA :) ).
      </p>
    ),
    hobbies: (
      <>
        <p>
          Studying Computer Science is stressful, just ask anyone in the field. That said, I think I do a pretty good job at managing it,  
          with rock climbing being a cheat code. Nothing feels better than nailing a route that's been humbling you for so long.
        </p>
        <p>
          That aside, I also try to connect with nature as much as I can. The valley trail at UTSC is perfect for long evening walks,
          and the occasional deer sighting. During the summer and fall I absolutely love biking along its paths too :)
        </p>
        <p>
          And lastly, what kind of CS student would I be if I didn't play some video games? Whether it's a MOBA, RPG or roguelike, I love a wide variety.
          I play a lot of online games such as Overwatch and League of Legends, but when I finally get time I like to pour hours into longer, story-driven games,
          such as Outer Wilds (which inspired the aesthetic of this website !!!), Dragon Age, Fallout and The Legend of Zelda.
        </p>
      </>
    ),
  };

  return (
    <section id="about" className="py-5">
      <Container fluid className="px-5"> {/* Fluid with padding gives it room to breathe */}
        <Row className="align-items-center"> {/* Vertically centers everything */}
          
          {/* COLUMN 1: YOUR PHOTO */}
          <Col lg={3} md={4} className="text-center">
            <div className="profile-image-container">
              <img src="/images/headshot.png" alt="Liam Kitsingh" className="profile-image" />
            </div>
          </Col>
          
          {/* COLUMN 2: THE CONTENT */}
          <Col lg={6} md={4}>
            <h2 className="about-content-title">
              {selection === 'about' ? 'About Me' : selection.toUpperCase()}
            </h2>
            <div className="about-text-content">
              {content[selection]}
            </div>
          </Col>
          
          {/* COLUMN 3: THE NAVIGATION */}
          <Col lg={3} md={4} className="text-center text-md-start">
            <h5 className="sidebar-title">More About Me</h5>
            <Nav className="flex-column side-nav">
              <Nav.Link onClick={() => setSelection('about')} className={selection === 'about' ? 'active' : ''}>General</Nav.Link>
              <Nav.Link onClick={() => setSelection('interests')} className={selection === 'interests' ? 'active' : ''}>Interests</Nav.Link>
              <Nav.Link onClick={() => setSelection('hobbies')} className={selection === 'hobbies' ? 'active' : ''}>Hobbies</Nav.Link>
            </Nav>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default About;
