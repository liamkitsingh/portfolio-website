import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

export interface SkillContextType {
  activeSkill: string | null;
  setActiveSkill: (skill: string | null) => void;
  highlightedProject: string | null;
  setHighlightedProject: (projectId: string | null) => void;
}

const SkillContext = createContext<SkillContextType | undefined>(undefined);

export const useSkills = () => {
  const context = useContext(SkillContext);
  if (!context) {
    throw new Error('useSkills must be used within a SkillProvider');
  }
  return context;
};

interface SkillProviderProps {
  children: ReactNode;
}

export const SkillProvider: React.FC<SkillProviderProps> = ({ children }) => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [highlightedProject, setHighlightedProject] = useState<string | null>(null);

  return (
    <SkillContext.Provider value={{ activeSkill, setActiveSkill, highlightedProject, setHighlightedProject }}>
      {children}
    </SkillContext.Provider>
  );
};
