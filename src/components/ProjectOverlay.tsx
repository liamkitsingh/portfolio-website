import React, { useState, useEffect } from 'react';
import './ProjectOverlay.css';
import type { Project } from '../data/projects';

interface ProjectOverlayProps {
  project: Project;
  onClose: () => void;
}

const ProjectOverlay: React.FC<ProjectOverlayProps> = ({ project, onClose }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project.screenshots, activeImgIndex]);

  const nextImage = () => {
    setActiveImgIndex((prevIndex) => (prevIndex + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setActiveImgIndex((prevIndex) => (prevIndex - 1 + project.screenshots.length) % project.screenshots.length);
  };

  const getCaptionFromUrl = (url: string) => {
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    const caption = filename.split('.')[0].replace(/_/g, ' ');
    return caption;
  };

  return (
    <div className="project-overlay" onClick={onClose}>
      <div className="project-card" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close" onClick={onClose}>&times;</button>
        
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="image-viewer">
            <img 
              key={project.screenshots[activeImgIndex]}
              src={project.screenshots[activeImgIndex]} 
              alt={`${project.title} screenshot ${activeImgIndex + 1}`} 
              className="main-image"
            />
            <button className="nav-arrow left" onClick={(e) => {e.stopPropagation(); prevImage();}}>&#10094;</button>
            <button className="nav-arrow right" onClick={(e) => {e.stopPropagation(); nextImage();}}>&#10095;</button>
            <div className="image-caption">{getCaptionFromUrl(project.screenshots[activeImgIndex])}</div>
          </div>
        )}

        <div className="project-details">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="technologies">
            <strong>Technologies:</strong>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          {project.projectUrl && (
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
              View Project
            </a>
          )}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Code
            </a>
          )}
        </div>

        {project.screenshots && project.screenshots.length > 1 && (
          <div className="thumbnail-strip">
            {project.screenshots.map((screenshot, index) => (
              <img
                key={screenshot}
                src={screenshot}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${index === activeImgIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex(index);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectOverlay;
