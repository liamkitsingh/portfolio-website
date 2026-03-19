import React from 'react';
import './Courses.css';
import { courses } from '../data/courses';

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

