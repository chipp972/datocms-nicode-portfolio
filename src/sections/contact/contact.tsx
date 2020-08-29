import React from 'react';
import { Section } from '../../components/layout';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query ContactSectionQuery {
    contact: datoCmsContactSection {
      id
    }
  }
`;

type ContactSectionQuery = {
  contact: {
    id: string;
  }
};

export const Contact: React.FC = () => {
  const { contact } = useStaticQuery<ContactSectionQuery>(query);
  return (
    <Section id={contact.id} style={{height: '100vh'}}>
      CONTACT
    </Section>
  );
};
