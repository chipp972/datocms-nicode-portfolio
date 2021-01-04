import css from './nav.module.sass';
import cssVar from '../../theme/variables/js-variables.module.scss';
import React from 'react';
import { Logo } from '../logo';
import { Section } from '../layout';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { gsap } from 'gsap';
import { useNavMenu } from './nav.hook';
import footerCss from '../footer/footer.module.sass';

type Props = {
  path: string;
};

export const NavBar: React.FC<Props> = ({ path }) => {
  const { about, projects, expertises, contact } = useNavMenu();
  const menu = { about, projects, expertises, contact };

  React.useEffect(() => {
    path === '/' && Object.values(menu).forEach(({ id }) =>
        gsap.timeline({
          scrollTrigger: {
            trigger: `#${id}`,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            toggleClass: {
              targets: [`#nav-${id}`, `#bottomnav-${id}`],
              className: css.currentNavbarItem
            }
          }
        })
      );

    gsap.to(`nav.${css.navbar}`, {
      scrollTrigger: {
        trigger: `.${css.navbar}`,
        start: 80,
        toggleClass: css.highlighted,
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
          <li key={`nav-${id}`} id={`nav-${id}`} className={css.navbarItem}>
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
            <li key={`bottomnav-${id}`} id={`bottomnav-${id}`} className={css.navbarItem}>
              <AnchorLink to={`/#${id}`} title={sectionLabel} />
            </li>
          ))}
      </ul>
    </Section>
  );
};
