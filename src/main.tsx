import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import { SkillProvider } from './contexts/SkillContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SkillProvider>
      <App />
    </SkillProvider>
  </StrictMode>,
)
