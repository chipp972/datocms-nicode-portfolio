import { graphql, useStaticQuery } from 'gatsby';
import { LinkedInIcon } from './linkedin-icon';
import { CvIcon } from './cv-icon';
import { GithubIcon } from './github-icon';
import { NpmIcon } from './npm-icon';
import { TwitterIcon } from './twitter-icon';

enum ProfileType {
  LinkedIn = 'LinkedIn',
  Github = 'Github',
  CV = 'CV',
  NPM = 'NPM',
  Twitter = 'Twitter'
}

type SocialProfile = {
  profileType: ProfileType;
  url: string;
  label: string;
};

export const icon = {
  [ProfileType.LinkedIn]: LinkedInIcon,
  [ProfileType.Github]: GithubIcon,
  [ProfileType.CV]: CvIcon,
  [ProfileType.NPM]: NpmIcon,
  [ProfileType.Twitter]: TwitterIcon
};

const query = graphql`
  query SocialQuery {
    allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          profileType
          url
          label
        }
      }
    }
  }
`;

export const useSocialList = (): SocialProfile[] => {
  const { allDatoCmsSocialProfile: { edges } } = useStaticQuery(query);
  return edges.map(({ node }) => node);
};
