import { graphql, useStaticQuery } from 'gatsby';

type MenuItem = {
  id: string;
  sectionLabel: string;
  isMobile: boolean;
};

type NavQuery = {
  hero: MenuItem;
  about: MenuItem;
  projects: MenuItem;
  contact: MenuItem;
};

const query = graphql`
  query NavQuery {
    hero: datoCmsHeroSection {
      id
    }
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
    contact: datoCmsContactSection {
      id
      sectionLabel
      isMobile
    }
  }
`;

export const useNavMenu = () => useStaticQuery<NavQuery>(query);
