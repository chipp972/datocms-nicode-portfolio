import css from './nav.module.sass';
import cssVar from '../../theme/variables/js-variables.module.scss';
import './nav.sass';
import React from 'react';
import { Logo } from '../logo';
import { Section } from '../layout';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { gsap } from 'gsap';
import { useNavMenu } from './nav.hook';
import footerCss from '../footer/footer.module.sass';

export const NavBar: React.FC = () => {
  const menu = useNavMenu();

  React.useEffect(() => {
    gsap.to(`nav.${css.navbar}`, {
      scrollTrigger: {
        trigger: `.${css.navbar}`,
        start: 80,
        toggleClass: 'navbar-highlighted',
        endTrigger: `.${footerCss.footer}`,
        end: 'bottom top'
      }
    });
  }, []);

  return (
    <Section component="nav" className={css.navbar}>
      <Logo size={cssVar.xxlSize} />
      <ul className={css.menu}>
        {Object.values(menu).map(({ id, sectionLabel }) => (
          <li key={`nav-${id}`}>
            <AnchorLink to={`/#${id}`} title={sectionLabel} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export const BottomNavBar: React.FC = () => {
  const menu = useNavMenu();
  return (
    <Section component="nav" className={css.bottomNav}>
      <ul className={css.menu}>
        {Object.values(menu)
          .filter(({ isMobile }) => isMobile)
          .map(({ id, sectionLabel }) => (
            <li key={`bottomnav-${id}`}>
              <AnchorLink to={`/#${id}`} title={sectionLabel} />
            </li>
          ))}
      </ul>
    </Section>
  );
};
