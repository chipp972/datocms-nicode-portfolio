import { graphql, useStaticQuery } from 'gatsby';

type MenuItem = {
  id: string;
  sectionLabel: string;
  isMobile: boolean;
};

type NavQuery = {
  about: MenuItem;
  projects: MenuItem;
  expertises: MenuItem;
  contact: MenuItem;
};

const query = graphql`
  query NavQuery {
    about: datoCmsAboutSection {
      id
      sectionLabel
      isMobile
    }
    projects: datoCmsProjectsSection {
      id
      sectionLabel
      isMobile
    }
    expertises: datoCmsExpertisesSection {
      id
      sectionLabel
      isMobile
    }
    contact: datoCmsContactSection {
      id
      sectionLabel
      isMobile
    }
  }
`;

export const useNavMenu = () => useStaticQuery<NavQuery>(query);
