import React from 'react'
import { Section } from '../../components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import cssVar from '../../theme/variables/js-variables.module.scss';

const query = graphql`
  query ExpertisesSectionQuery {
    expertises: datoCmsExpertisesSection {
      id
    }
  }
`;

type ExpertisesSectionQuery = {
  expertises: {
    id: string;
  }
};

export const Expertises: React.FC = () => {
  const { expertises } = useStaticQuery<ExpertisesSectionQuery>(query);
  return (
    <Section id={expertises.id} style={{height: '100vh', backgroundColor: cssVar.alternateBgColor}}>
      EXPERTISES
    </Section>
  );
};
