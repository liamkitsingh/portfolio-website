export interface Skill {
  name: string;
  projects: string[];
  customText?: string;
}

export const skillCategories = {
  "Languages": [
    { name: 'Java', projects: ['SMART-AIR'] },
    { name: 'Python', projects: ['noted.', 'MovieMind'] },
    { name: 'C', projects: ['Battleship'] },
    { name: 'JavaScript', projects: ['Beacon', 'MovieMind'] },
    { name: 'TypeScript', projects: ['Beacon'] },
    { name: 'SQL', projects: ['noted.'] },
  ],
  "Frameworks/Web": [
    { name: 'React', projects: ['Beacon', 'MovieMind'] },
    { name: 'FastAPI', projects: ['MovieMind']},
    { name: 'Express.js', projects: [], customText: 'Used for lab assignments in CSCC01'},
    { name: 'Firebase', projects: ['SMART-AIR']},
    { name: 'Node.js', projects: []},
  ],
  "Systems/Tools": [
    { name: 'Linux/UNIX', projects: ['Battleship'] },
    { name: 'Sockets', projects: ['Battleship']},
    { name: 'Epoll', projects: ['Battleship']},
    { name: 'Git', projects: ['Beacon', 'Battleship', 'noted.', 'SMART-AIR', 'MovieMind']},
    { name: 'Docker', projects: []},
  ],
  "Data/Design": [
    { name: 'Pandas', projects: ['MovieMind']},
    { name: 'scikit-learn', projects: ['MovieMind']},
    { name: 'Figma', projects: [], customText: 'Used for UI/UX prototyping and wireframing in CSCC01'},
    { name: 'ArcGIS', projects: [], customText: 'Used for geographic data analysis and mapping in GGRA30.'},
    { name: 'QGIS', projects: [], customText: 'Used for geographic data analysis and mapping in GGRA30.'},
  ],
};
