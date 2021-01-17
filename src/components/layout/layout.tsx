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

type Props = {
  path: string;
};

export const Layout: React.FC<Props> = ({ path, children }) => {
  const data = useStaticQuery(layoutQuery);
  return (
    <>
      <div>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />
        <NavBar path={path} />
        <main className={css.mainContainer}>
          {children}
        </main>
        <BottomNavBar />
      </div>
      <Footer />
    </>
  );
};
