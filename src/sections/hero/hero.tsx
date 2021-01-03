import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Section } from '../../components/layout';
import css from './hero.module.sass';

const query = graphql`
  query HeroQuery {
    hero: datoCmsHeroSection {
      id
      promiseNode {
        childMarkdownRemark {
          html
        }
      }
      subtitleNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export const Hero = () => {
  const { hero } = useStaticQuery(query);
  const promise = hero?.promiseNode?.childMarkdownRemark.html;
  const subtitle = hero?.subtitleNode?.childMarkdownRemark.html;
  return (
    <Section id={hero.id} className={css.hero}>
      <p className={css.promise} dangerouslySetInnerHTML={{ __html: promise }} />
      <p className={css.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />
    </Section>
  );
};
