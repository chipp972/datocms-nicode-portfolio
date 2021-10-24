import React from 'react';
import { ProjectsContext as ProjectsContextType } from './projects.type';

export const ProjectsContext = React.createContext<ProjectsContextType>({
  id: 'projects-section',
  title: 'Projets',
  sectionLabel: 'Projets',
  readMoreLabel: 'En savoir plus',
  challengesLabel: 'Mes défis',
  checkSourceCodeLabel: 'Voir le code',
  checkWebsiteLabel: 'Voir le site',
  nextProjectLabel: 'suivant',
  previousProjectLabel: 'précédent',
  closeButtonLabel: 'Fermer',
  projectList: []
});
