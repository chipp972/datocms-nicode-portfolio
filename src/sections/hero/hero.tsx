import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Section } from '../../components/layout';
import css from './hero.module.sass';

const query = graphql`
  query HeroQuery {
    hero: datoCmsHeroSection {
      id
      promise
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
  const promise = hero?.promise;
  const subtitle = hero?.subtitleNode?.childMarkdownRemark.html;
  return (
    <Section id={hero.id} className={css.hero}>
      <h1 className={css.promise}>{promise}</h1>
      <p className={css.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />
    </Section>
  );
};
