import '../../theme/global.sass';
import css from './layout.module.sass';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { NavBar, BottomNavBar } from '../nav/nav';
import { Footer } from '../footer/footer';

const layoutQuery = graphql`
  query LayoutQuery {
    datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
      copyright
    }
    allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          profileType
          url
        }
      }
    }
  }
`;

export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(layoutQuery);
  return (
    <>
      <div>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />
        <NavBar />
        <main className={css.mainContainer}>
          {children}
        </main>
        <BottomNavBar />
      </div>
      <Footer />
    </>
  );
};
