import React, { useState, useEffect, useRef } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import ProjectOverlay from './ProjectOverlay';
import { useSkills } from '../contexts/SkillContext';
import './Projects.css';
import type { Project } from '../data/projects';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { highlightedProject, setHighlightedProject } = useSkills();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const openOverlay = (project: Project) => setSelectedProject(project);
  const closeOverlay = () => setSelectedProject(null);
  const handleCardClick = (index: number) => {
    
  if (carouselRef.current) {
    const track = carouselRef.current.children[0];
    const cardElement = track.children[index] as HTMLElement;
    if (cardElement) {
      cardElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest', 
        inline: 'center' 
      });
    }
  }
};

  // Scroll listener to update active index
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;
        const cards = Array.from(carousel.querySelectorAll('.carousel-card-wrapper'));
        let closestCardIndex = -1;
        let minDistance = Infinity;

        cards.forEach((card, index) => {
            const cardElement = card as HTMLElement;
            const cardCenter = cardElement.offsetLeft + cardElement.clientWidth / 2;
            const distance = Math.abs(carouselCenter - cardCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestCardIndex = index;
            }
        });

        if (closestCardIndex !== -1) {
            setActiveIndex(closestCardIndex);
        }
      }
    };

    const carousel = carouselRef.current;
    carousel?.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      carousel?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.children[0].children[0] as HTMLElement;
      if (firstCard) {
        firstCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, []);

  // Effect to handle jumping from skill link
  useEffect(() => {
    if (highlightedProject) {
      const projectIndex = projects.findIndex(p => p.title === highlightedProject);
      if (projectIndex !== -1 && carouselRef.current) {
        const track = carouselRef.current.children[0];
        const cardElement = track.children[projectIndex] as HTMLElement;
        if (cardElement) {
          cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
        
        const timer = setTimeout(() => {
          setHighlightedProject(null);
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [highlightedProject, setHighlightedProject]);
  
  const scroll = (direction: 'prev' | 'next') => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.carousel-card-wrapper')?.clientWidth ?? 0;
      const scrollAmount = direction === 'prev' ? -cardWidth : cardWidth;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-5">
      <Container fluid>
        <h2 className="text-center mb-4">Projects</h2>
        <div className="carousel-container">
          <div className="carousel-wrapper" ref={carouselRef}>
            <div className="carousel-track">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  id={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`carousel-card-wrapper ${index === activeIndex ? 'active-card' : ''} ${highlightedProject === project.title ? 'highlight' : ''}`}
                  onClick={() => {
                    if (index !== activeIndex) {
                      handleCardClick(index);
                    }
                  }}
                >
                  <Card className="project-card-landscape">
                    <Card.Img variant="top" src={project.imgUrl} className="project-card-img"/>
                    <Card.Body>
                      <Card.Title as="h5">{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <Button variant="primary" onClick={() => openOverlay(project)}>Learn More</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button className="carousel-btn prev" onClick={() => scroll('prev')}>&#10094;</Button>
          <Button className="carousel-btn next" onClick={() => scroll('next')}>&#10095;</Button>
        </div>
      </Container>
      {selectedProject && <ProjectOverlay project={selectedProject} onClose={closeOverlay} />}
    </section>
  );
};

export default Projects;

