import React, { useState } from 'react';
import { Container, Row, Col, Badge, FormControl } from 'react-bootstrap';
import { useSkills } from '../contexts/SkillContext';
import { skillCategories } from '../data/skills';
import type { Skill } from '../data/skills';
import './Skills.css';

const SkillBadge: React.FC<{ skill: Skill, id: string, dimmed: boolean }> = ({ skill, id, dimmed }) => {
  const { setHighlightedProject } = useSkills();

  const handleProjectClick = (projectName: string) => {
    setHighlightedProject(projectName);
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`skill-badge-wrapper ${dimmed ? 'dimmed' : ''}`} id={id}>
      <Badge className={`skill-badge m-2 ${!dimmed ? 'glow' : ''}`}>
        {skill.name}
      </Badge>
      <div className="custom-tooltip">
        {skill.customText && <div className="mb-1">{skill.customText}</div>}
        {skill.projects.length > 0 ? (
          <div>
            Seen in:{' '}
            {skill.projects.map((project, index) => (
              <React.Fragment key={project}>
                <a href="#projects" onClick={(e) => {
                  e.preventDefault();
                  handleProjectClick(project);
                }} style={{ color: 'cyan', textDecoration: 'underline' }}>
                  {project}
                </a>
                {index < skill.projects.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </div>
        ) : !skill.customText && (
          'No associated projects yet.'
        )}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const allSkills: Skill[] = Object.values(skillCategories).flat();
  const filteredSkills = allSkills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <Row className="mb-4">
          <Col lg={{ span: 6, offset: 3 }}>
            <FormControl
              type="text"
              placeholder="// Filter tech stack..."
              className="search-bar"
              onChange={handleSearchChange}
            />
          </Col>
        </Row>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <Row>
              <Col className="text-center">
                {skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    id={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    dimmed={searchTerm !== '' && !filteredSkills.some(s => s.name === skill.name)}
                  />
                ))}
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
