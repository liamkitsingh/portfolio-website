import React from 'react';
import { Card } from 'react-bootstrap';
import './PreviewCard.css';

interface PreviewCardProps {
  project: {
    title: string;
    imgUrl: string;
  } | null;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="preview-card-container">
      <Card className="preview-card">
        <Card.Img variant="top" src={project.imgUrl} />
        <Card.Body>
          <Card.Title as="h6">{project.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PreviewCard;
