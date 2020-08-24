import '../../theme/global.sass';
import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';

const layoutQuery = graphql`
  query LayoutQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
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

const SideBar = ({ datoCmsSite, datoCmsHome, allDatoCmsSocialProfile }) => {
  return (
    <div className="container__sidebar">
      <div className="sidebar">
        <h6 className="sidebar__title">
          <Link to="/">{datoCmsSite.globalSeo.siteName}</Link>
        </h6>
        <div
          className="sidebar__intro"
          dangerouslySetInnerHTML={{
            __html: datoCmsHome.introTextNode.childMarkdownRemark.html
          }}
        />
        <ul className="sidebar__menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <p className="sidebar__social">
          {allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
            <a
              key={profile.profileType}
              href={profile.url}
              target="blank"
              className={`social social--${profile.profileType.toLowerCase()}`}>
              {' '}
            </a>
          ))}
        </p>
        <div className="sidebar__copyright">{datoCmsHome.copyright}</div>
      </div>
    </div>
  );
};

type Props = {
  setShowMenu: (Function) => void;
  siteName: string;
};

const Container: React.FC<Props> = ({ setShowMenu, siteName, children }) => (
  <div className="container__body">
    <div className="container__mobile-header">
      <div className="mobile-header">
        <div className="mobile-header__menu">
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowMenu((isVisible) => !isVisible);
            }}
          />
        </div>
        <div className="mobile-header__logo">
          <Link to="/">{siteName}</Link>
        </div>
      </div>
    </div>
    {children}
  </div>
);

export const Layout: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const data = useStaticQuery(layoutQuery);
  return (
    <div className={`container ${showMenu ? 'is-open' : ''}`}>
      <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} seo={data.datoCmsHome.seoMetaTags} />
      <SideBar {...data} />
      <Container setShowMenu={setShowMenu} siteName={data.datoCmsSite.globalSeo.siteName}>
        {children}
      </Container>
    </div>
  );
};
