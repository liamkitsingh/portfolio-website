import React from 'react';
import './Courses.css';

interface Course {
  code: string;
  title: string;
  summary: string;
  status?: 'in-progress';
}

const courses: Course[] = [
  // First Year
  { code: 'CSCA08', title: 'Introduction to Computer Science I', summary: 'Procedural programming fundamentals and problem-solving using Python.' },
  { code: 'MATA67', title: 'Discrete Mathematics', summary: 'Mathematical reasoning, logic, set theory, and counting for Computer Science.' },
  { code: 'MATA31', title: 'Calculus I for Mathematical Sciences', summary: 'Theoretical foundations of limits, continuity, and differential calculus.' },
  { code: 'CSCA48', title: 'Introduction to Computer Science II', summary: 'Data structures, memory management, and abstract data types in C.' },
  { code: 'MATA37', title: 'Calculus II for Mathematical Sciences', summary: 'Techniques of integration, sequences, series, and power series expansions.' },
  { code: 'MATA22', title: 'Linear Algebra I', summary: 'Theory of vector spaces, systems of linear equations, matrices, and determinants.' },

  // Second Year
  { code: 'CSCB09', title: 'Software Tools & Systems Programming', summary: 'Low-level C programming, Unix shell scripting, and POSIX system calls.' },
  { code: 'STAB52', title: 'Introduction to Probability', summary: 'Theoretical probability distributions, random variables, and mathematical statistics.' },
  { code: 'MATB41', title: 'Multivariable Calculus', summary: 'Vector calculus, partial derivatives, and optimization for high-dimensional spaces.' },
  { code: 'MATB24', title: 'Linear Algebra II', summary: 'Advanced linear transformations, eigenvalues, eigenvectors, and inner product spaces.' },
  { code: 'CSCB07', title: 'Software Design', summary: 'Object-oriented design patterns, Agile development, and software architecture principles.' },
  { code: 'CSCB36', title: 'Theory of Computation', summary: 'Formal languages, induction, and analysis of algorithm complexity.' },

  //Third Year
  { code: 'CSCB63', title: 'Design and Analysis of Data Structures', summary: 'Advanced data structures, algorithm design, and complexity analysis.', status: 'in-progress' },
  { code: 'CSCC01', title: 'Introduction to Software Engineering', summary: 'Full-stack development within the Agile SDLC. Focused on design patterns, Scrum methodology, and delivering scalable software in a team environment.' , status: 'in-progress' },
  { code: 'CSCB58', title: 'Computer Organization', summary: 'Low-level CPU architecture and hardware design. Experience with ARM Assembly, logic gates, and memory management to optimize system performance.', status: 'in-progress'}
];

const Courses: React.FC = () => {
  return (
    <div className="courses-container">
      <h2 className="courses-title">Core Courses</h2>
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-node" key={course.code} id={`course-${course.code.toLowerCase()}`}>
            <div className={`course-badge ${course.status === 'in-progress' ? 'in-progress' : ''}`}>
              {course.status === 'in-progress' && <span className="in-progress-indicator">[IN_PROGRESS]</span>}
              <span className="course-code-small">{course.code}</span>
              <span className="course-title-main">{course.title}</span>
            </div>
            
            <div className="course-bubble">
              <p>{course.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

