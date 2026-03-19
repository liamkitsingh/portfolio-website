import { projects } from './projects';
import { skillCategories } from './skills';
import { courses } from './courses';

// Manually define skills and courses as the search index will centralize this data.
const skills = Object.values(skillCategories).flat();

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
