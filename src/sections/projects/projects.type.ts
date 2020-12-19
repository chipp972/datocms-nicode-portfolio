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
  challenges: string[];
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
