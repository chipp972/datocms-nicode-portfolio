import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout/layout';
import { Hero } from '../sections/hero/hero';
import { About } from '../sections/about/about';
import { Projects } from '../sections/projects/projects';
import { Expertises } from '../sections/expertises/expertises';
import { Contact } from '../sections/contact/contact';
import cssVar from '../theme/variables/js-variables.module.scss';
import { SectionTransition } from '../components/layout/transition';
import { gsapSetup } from '../helpers/gsap-setup';

gsapSetup();

const IndexPage = ({ data: { about } }) => {
  return (
    <Layout>
      <Hero />
      <SectionTransition color={cssVar.alternateBgColor} />
      <About {...about} />
      <SectionTransition color={cssVar.bgColor} bgColor={cssVar.alternateBgColor} />
      <Projects />
      <SectionTransition color={cssVar.alternateBgColor} />
      <Expertises />
      <SectionTransition color={cssVar.bgColor} bgColor={cssVar.alternateBgColor} />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
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
    about: datoCmsAboutSection {
      photo {
        fixed(width: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFixed
        }
      }
      intro
      companies
      collaborationTitle
      collaborations {
        title
        description
      }
    }
  }
`;
