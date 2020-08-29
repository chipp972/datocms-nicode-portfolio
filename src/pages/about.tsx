import React from 'react';
import { Link, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Img from 'gatsby-image';
import { Layout } from '../components/layout/layout';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Masonry from 'react-masonry-component';

const About = ({ data: { about, allDatoCmsWork } }) => (
  <Layout>
    <h2>test</h2>
    <article className="sheet">
      <HelmetDatoCms seo={about.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{about.title}</h1>
        <p className="sheet__lead">{about.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={about.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: about.bioNode.childMarkdownRemark.html
          }}
        />
      </div>
    </article>
    <AnchorLink to="/about#test" title="Our team" stripHash>
      <span>Check out our team!</span>
    </AnchorLink>
    <Masonry className="showcase">
      {allDatoCmsWork.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/works/${work.slug}`}>{work.title}</Link>
              </h6>
              <div className="card__description">
                <p>{work.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
);

export default About;

export const query = graphql`
  query AboutQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
