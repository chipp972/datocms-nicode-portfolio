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
      legalTermsNode: MarkdownField;
    };
  };
};

const TermsPage: React.FC<Props> = ({ data: { legal }, path }) => (
  <Layout path={path} >
    <Section>
      <article
        className={css.markdown}
        dangerouslySetInnerHTML={{ __html: legal.legalTermsNode.childMarkdownRemark.html }}
      />
    </Section>
  </Layout>
);

export default TermsPage;

export const query = graphql`
  query TermsQuery {
    legal: datoCmsLegal {
      legalTermsNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
