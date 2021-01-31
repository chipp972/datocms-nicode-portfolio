import { FluidObject } from 'gatsby-image';

export enum ProjectType {
  Mission = 'Mission',
  Project = 'Projet',
  CaseStudy = 'Étude de cas'
}

export type Project = {
  id: string;
  websiteUrl?: string;
  sourceCodeUrl?: string;
  technos: string;
  projectType: ProjectType;
  name: string;
  missionDuration?: number;
  challenges: string;
  contextNode: MarkdownField;
  excerptNode: MarkdownField;
  mainImage: {
    alt: string;
    fluid: FluidObject;
  };
  screenshots: {
    alt: string;
    fluid: FluidObject;
  }[];
};

export type ProjectsContext = {
  id: string;
  title: string;
  sectionLabel: string;
  readMoreLabel: string;
  closeButtonLabel: string;
  challengesLabel: string;
  checkSourceCodeLabel: string;
  checkWebsiteLabel: string;
  nextProjectLabel: string;
  previousProjectLabel: string;
  projectList: Project[];
};
