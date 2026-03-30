import React, { useState, useEffect, useRef } from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Courses from './components/Courses';
import Contact from './components/Contact';
import PreviewCard from './components/PreviewCard';
import { useSkills } from './contexts/SkillContext';
import { projects } from './data/projects';
import './App.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { activeSkill } = useSkills();
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  const getProjectForSkill = (skillName: string | null) => {
    if (!skillName) return null;
    const project = projects.find(p => p.technologies.includes(skillName));
    return project ? { title: project.title, imgUrl: project.imgUrl } : null;
  };

  const handleWarp = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.classList.add('glow-effect');
      setTimeout(() => {
        element.classList.remove('glow-effect');
      }, 1000); 
    }
  };

  return (
    <div>
      <NavigationBar 
        activeSection={activeSection} 
        onWarp={handleWarp} 
      />
      <section id="home" className="scroll-section">
        <Home />
      </section>
      <section id="projects" className="scroll-section">
        <Projects />
      </section>
      <section id="skills" className="scroll-section">
        <Skills />
      </section>
      <section id="courses" className="scroll-section">
        <Courses />
      </section>
      <section id="about" className="scroll-section">
        <About />
      </section>
      <section id="contact" className="scroll-section">
        <Contact />
      </section>
      {activeSection === 'skills' && <PreviewCard project={getProjectForSkill(activeSkill)} />}
    </div>
  );
};

export default App;
