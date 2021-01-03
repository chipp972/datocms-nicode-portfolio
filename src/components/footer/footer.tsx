import React from 'react';
import css from './footer.module.sass';
import { Section } from '../layout/section';
import { SocialIconList } from '../social/social-icon-list';
import { useNavMenu } from '../nav/nav.hook';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export const Footer: React.FC = () => {
  const { hero } = useNavMenu();
  return (
    <>
      <div className={css.wavesContainer}>
        <div className={css.waves}></div>
      </div>
      <Section component="footer" className={css.footer}>
        <ul className={css.footerLinks}>
          <li className={css.footerLinkContainer}>
            <AnchorLink className={css.footerLink} to={`/#${hero.id}`} title="Retour en haut de page" />
          </li>
          <li className={css.footerLinkContainer}>
            <AnchorLink className={css.footerLink} to={`/#${hero.id}`} title="Mentions légales" />
          </li>
          <li className={css.footerLinkContainer}>
            <AnchorLink className={css.footerLink} to={`/#${hero.id}`} title="Credits" />
          </li>
        </ul>
        <SocialIconList />
      </Section>
    </>
  );
};
