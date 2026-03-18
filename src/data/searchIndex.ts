import { projects } from './projects';

// Manually define skills and courses as the search index will centralize this data.
const skills = [
    { name: 'Java', projects: ['Battleship'] },
    { name: 'Python', projects: ['noted.', 'MovieMind'] },
    { name: 'C++', projects: [] },
    { name: 'C', projects: ['Battleship'] },
    { name: 'JavaScript', projects: ['Beacon', 'MovieMind'] },
    { name: 'TypeScript', projects: ['Beacon'] },
    { name: 'React', projects: ['Beacon', 'MovieMind'] },
    { name: 'Node.js', projects: ['Beacon'] },
    { name: 'Express.js', projects: ['Beacon'] },
    { name: 'MongoDB', projects: ['Beacon'] },
    { name: 'SQL', projects: ['noted.'] },
    { name: 'Git', projects: ['Beacon', 'Battleship', 'noted.', 'SMART-AIR', 'MovieMind'] },
    { name: 'Docker', projects: ['Beacon'] },
    { name: 'Linux', projects: [] },
    { name: 'Firebase', projects: ['SMART-AIR']},
    { name: 'Pandas', projects: ['MovieMind']},
    { name: 'scikit-learn', projects: ['MovieMind']},
    { name: 'Tkinter', projects: ['noted.']},
    { name: 'Sockets', projects: ['Battleship']},
    { name: 'Epoll', projects: ['Battleship']},
    { name: 'JWT', projects: ['Beacon']},
    { name: 'Swagger', projects: ['Beacon']},
    { name: 'AWS S3', projects: ['Beacon']},
    { name: 'Android', projects: ['SMART-AIR']}
];

const courses = [
  { code: 'CSCA08', title: 'Introduction to Computer Science I' },
  { code: 'MATA67', title: 'Discrete Mathematics' },
  { code: 'MATA31', title: 'Calculus I for Mathematical Sciences' },
  { code: 'CSCA48', title: 'Introduction to Computer Science II' },
  { code: 'MATA37', title: 'Calculus II for Mathematical Sciences' },
  { code: 'MATA22', title: 'Linear Algebra I' },
  { code: 'CSCB09', title: 'Software Tools & Systems Programming' },
  { code: 'STAB52', title: 'Introduction to Probability' },
  { code: 'CSCB63', title: 'Design and Analysis of Data Structures' },
  { code: 'MATB41', title: 'Multivariable Calculus' },
  { code: 'MATB24', title: 'Linear Algebra II' },
  { code: 'CSCB07', title: 'Software Design' },
  { code: 'CSCB36', title: 'Theory of Computation' },
];

export interface SearchResult {
  id: string;
  category: 'Project' | 'Skill' | 'Course';
  name: string;
  tags?: string[];
}

const projectIndex: SearchResult[] = projects.map(p => ({
  id: `project-${p.title.toLowerCase().replace(/\s+/g, '-')}`,
  category: 'Project',
  name: p.title,
  tags: [...p.technologies, p.description, p.longDescription, ...p.contributions],
}));

const skillIndex: SearchResult[] = skills.map(s => ({
  id: `skill-${s.name.toLowerCase().replace(/\s+/g, '-')}`,
  category: 'Skill',
  name: s.name,
}));

const courseIndex: SearchResult[] = courses.map(c => ({
  id: `course-${c.code.toLowerCase()}`,
  category: 'Course',
  name: `${c.code}: ${c.title}`,
  tags: [c.code, c.title],
}));

export const searchIndex: SearchResult[] = [...projectIndex, ...skillIndex, ...courseIndex];
