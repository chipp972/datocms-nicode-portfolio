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
import smoothscroll from 'smoothscroll-polyfill';
import { Footer } from '../components/footer/footer';

gsapSetup();

typeof window !== 'undefined' && smoothscroll.polyfill();

const IndexPage = () => (
  <Layout>
    <Hero />
    <SectionTransition color={cssVar.alternateBgColor} />
    <About />
    <SectionTransition color={cssVar.bgColor} bgColor={cssVar.alternateBgColor} />
    <Projects />
    <SectionTransition color={cssVar.alternateBgColor} />
    <Expertises />
    <SectionTransition color={cssVar.bgColor} bgColor={cssVar.alternateBgColor} />
    <Contact />
    <SectionTransition color={cssVar.alternateBgColor} />
    <Footer />
  </Layout>
);

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
  }
`;
