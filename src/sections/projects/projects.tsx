import React from 'react';
import { Section } from '../../components/layout';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query ProjectsSectionQuery {
    projects: datoCmsProjectsSection {
      id
    }
  }
`;

type ProjectsSectionQuery = {
  contact: {
    id: string;
  }
};

export const Projects: React.FC = () => {
  const { projects } = useStaticQuery<ProjectsSectionQuery>(query);
  return (
    <Section id={projects.id} style={{height: '100vh'}}>
      PROJECTS
    </Section>
  );
};
