import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout/layout';
import { gsapSetup } from '../helpers/gsap-setup';
import css from '../theme/markdown-page.module.sass';
import { Section } from '../components/layout';
import smoothscroll from 'smoothscroll-polyfill';

gsapSetup();

typeof window !== 'undefined' && smoothscroll.polyfill();

type Props = {
  path: string;
  data: {
    legal: {
      creditsNode: MarkdownField;
    };
  };
};

const CreditsPage: React.FC<Props> = ({ data: { legal }, path }) => (
  <Layout path={path} >
    <Section>
      <article
        className={css.markdown}
        dangerouslySetInnerHTML={{ __html: legal.creditsNode.childMarkdownRemark.html }}
      />
    </Section>
  </Layout>
);

export default CreditsPage;

export const query = graphql`
  query CreditsQuery {
    legal: datoCmsLegal {
      creditsNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
