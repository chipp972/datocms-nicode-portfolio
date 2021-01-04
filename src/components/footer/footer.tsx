import React from 'react';
import css from './footer.module.sass';
import { Section } from '../layout/section';
import { SocialIconList } from '../social/social-icon-list';
import { Link } from 'gatsby';

export const Footer: React.FC = () => (
  <>
    <div className={css.wavesContainer}>
      <div className={css.waves}></div>
    </div>
    <Section component="footer" className={css.footer}>
      <ul className={css.footerLinks}>
        <li className={css.footerLinkContainer}>
          {typeof document !== 'undefined' &&
            <button className={css.footerLink} onClick={() => window.scrollTo({
              behavior: 'smooth',
              top: 0
            })}>Retour en haut de page</button>
          }
        </li>
        <li className={css.footerLinkContainer}>
          <Link className={css.footerLink} to="/terms">Mentions légales</Link>
        </li>
        <li className={css.footerLinkContainer}>
          <Link className={css.footerLink} to="/credits">Credits</Link>
        </li>
      </ul>
      <SocialIconList />
    </Section>
  </>
);
