import { graphql, useStaticQuery } from 'gatsby';

export type SiteMetadata = {
  title: string;
  description: string;
};

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
