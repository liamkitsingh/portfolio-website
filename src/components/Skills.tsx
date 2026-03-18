import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useSkills } from '../contexts/SkillContext';
import './Skills.css';

interface Skill {
  name: string;
  projects: string[];
  customText?: string;
}

const skills: Skill[] = [
    { name: 'Java', projects: ['SMART-AIR'] },
    { name: 'Python', projects: ['noted.', 'MovieMind'] },
    { name: 'C', projects: ['Battleship'] },
    { name: 'JavaScript', projects: ['Beacon', 'MovieMind'] },
    { name: 'FastAPI', projects: ['MovieMind']},
    { name: 'Express.js', projects: [], customText: 'Used for lab assignments in CSCC01'},
    { name: 'TypeScript', projects: ['Beacon'] },
    { name: 'React', projects: ['Beacon', 'MovieMind'] },
    { name: 'SQL', projects: ['noted.'] },
    { name: 'Linux/UNIX', projects: ['Battleship'] },
    { name: 'Sockets', projects: ['Battleship']},
    { name: 'Firebase', projects: ['SMART-AIR']},
    { name: 'Pandas', projects: ['MovieMind']},
    { name: 'scikit-learn', projects: ['MovieMind']},
    { name: 'Tkinter', projects: ['noted.']},
    { name: 'Sockets', projects: ['Battleship']},
    { name: 'Epoll', projects: ['Battleship']},
    { name: 'Android', projects: ['SMART-AIR']},
    { name: 'LangChain', projects: ['Beacon']},
    { name: 'ArcGIS', projects: [], customText: 'Used for geographic data analysis and mapping in GGRA30.'},
    { name: 'QGIS', projects: [], customText: 'Used for geographic data analysis and mapping in GGRA30.'},
    { name: 'NoSQL', projects: ['SMART-AIR']},
    { name: 'Git', projects: ['Beacon', 'Battleship', 'noted.', 'SMART-AIR', 'MovieMind']},
    { name: 'Figma', projects: [], customText: 'Used for UI/UX prototyping and wireframing in CSCC01'},
    { name: 'Postgres', projects: [], customText: 'Used for labs during CSCC01'},
    { name: 'Microsoft Office', projects: [], customText: 'Used for various documentation and projects throughout school'},
];


const SkillBadge: React.FC<{ skill: Skill, id: string }> = ({ skill, id }) => {
  const { setHighlightedProject, setActiveSkill } = useSkills();

  const handleProjectClick = (projectName: string) => {
    setHighlightedProject(projectName);
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="skill-badge-wrapper" id={id}>
      <Badge className="m-2 p-3" onMouseEnter={() => setActiveSkill(skill.name)} onMouseLeave={() => setActiveSkill(null)}>
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
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <Row>
          <Col lg={{ span: 10, offset: 1 }} className="text-center">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} id={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
