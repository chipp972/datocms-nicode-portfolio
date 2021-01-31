import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Section } from '../../components/layout';
import buttonCss from '../../components/buttons/buttons.module.sass';
import css from './hero.module.sass';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Img from 'gatsby-image';

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
      goToAboutSectionCtaLabel
      illustration {
        alt
        fluid(maxWidth: 800, imgixParams: { fm: "png", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    about: datoCmsAboutSection {
      id
    }
  }
`;

export const Hero = () => {
  const { hero, about } = useStaticQuery(query);
  const promise = hero?.promise;
  const subtitle = hero?.subtitleNode?.childMarkdownRemark.html;
  return (
    <div className={css.heroWrapper}>
      <Section id={hero.id} className={css.hero}>
        <div>
          <h1 className={css.promise}>{promise}</h1>
          <p className={css.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />
          <AnchorLink
            gatsbyLinkProps={{ className: buttonCss.gradientOrangeButton }}
            to={`/#${about.id}`}
            title={hero.goToAboutSectionCtaLabel}>
            {hero.goToAboutSectionCtaLabel}
          </AnchorLink>
        </div>
      </Section>
      <div className={css.imageWrapper}>
        <Img
          alt={hero.illustration.alt}
          fluid={hero.illustration.fluid}
        />
      </div>
    </div>
  );
};
