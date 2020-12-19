import React from 'react';
import { Section } from '../../components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { RawCarousel } from '@chipp972/carousel';

const query = graphql`
  query ProjectsSectionQuery {
    projects: datoCmsProjectsSection {
      id
      title
      sectionLabel
      readMoreLabel
      challengesLabel
      checkSourceCodeLabel
      checkWebsiteLabel
      nextProjectLabel
      previousProjectLabel
      projectList {
        id
        websiteUrl
        technos
        sourceCodeUrl
        projectType
        name
        missionDuration
        challenges
        contextNode {
          childMarkdownRemark {
            html
          }
        }
        mainImage {
          alt
          fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
        screenshots {
          alt
          fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`;

enum ProjectType {
  Mission = 'Mission',
  Project = 'Projet',
  CaseStudy = 'Étude de cas'
}

type Project = {
  id: string;
  websiteUrl?: string;
  sourceCodeUrl?: string;
  technos: string;
  projectType: ProjectType;
  name: string;
  missionDuration?: number;
  challenges: string[];
  contextNode: MarkdownField;
  mainImage: {
    alt: string;
    fluid: FluidObject;
  };
  screenshots: {
    alt: string;
    fluid: FluidObject;
  }[];
};

type ProjectsSectionQuery = {
  projects: {
    id: string;
    title: string;
    sectionLabel: string;
    readMoreLabel: string;
    challengesLabel: string;
    checkSourceCodeLabel: string;
    checkWebsiteLabel: string;
    nextProjectLabel: string;
    previousProjectLabel: string;
    projectList: Project[];
  };
};

const slideStyle: React.CSSProperties = {
  height: 500,
  width: 500,
  color: 'white',
  textAlign: 'center',
  fontSize: 50
};

export const Projects: React.FC = () => {
  const { projects } = useStaticQuery<ProjectsSectionQuery>(query);
  const ref = React.useRef(null);
  console.log({ projects });

  return (
    <Section id={projects.id} style={{ position: 'relative', height: '100vh', overflowX: 'hidden'}}>
      <button onClick={() => ref.current.slide(0)}>jump to first</button>
      <button onClick={() => ref.current.prev()}>prev</button>
      <button onClick={() => ref.current.next()}>next</button>
      <button onClick={() => ref.current.slide(6)}>jump to last</button>
      <div style={{ display: 'flex', position: 'absolute', left: 0, top: 100 }}>
        <RawCarousel
          ref={ref}
          id="test-raw"
          swipeOptions={
            {
              widthOfSiblingSlidePreview: 400,
              // continuous: false,
              auto: 5000
              // swiping: action('swipe'),
              // callback: action('transition start'),
              // transitionEnd: action('transition end')
            }
          }>
          <div style={{ backgroundColor: 'red', ...slideStyle }}>1</div>
          <div style={{ backgroundColor: 'blue', ...slideStyle }}>2</div>
          <div style={{ backgroundColor: 'green', ...slideStyle }}>3</div>
          <div style={{ backgroundColor: 'yellow', ...slideStyle }}>4</div>
          <div style={{ backgroundColor: 'orange', ...slideStyle }}>5</div>
          <div style={{ backgroundColor: 'purple', ...slideStyle }}>6</div>
          <div style={{ backgroundColor: 'black', ...slideStyle }}>7</div>
        </RawCarousel>
      </div>
      PROJECTS
    </Section>
  );
};
