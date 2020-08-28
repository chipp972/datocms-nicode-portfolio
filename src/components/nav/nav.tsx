import css from './nav.module.sass';
import React from 'react';
import { Logo } from '../logo';
import { Section } from '../layout';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

type MenuItem = {
  label: string;
  sectionId: string;
  isMobile: boolean;
}

const menu: MenuItem[] = [
  {label: 'À propos', sectionId: 'test', isMobile: true},
  {label: 'Projets', sectionId: 'test', isMobile: true},
  {label: 'Mon expertise', sectionId: 'test', isMobile: false},
  {label: 'Me contacter', sectionId: 'test', isMobile: true},
];

export const NavBar = () => {
  return (
    <Section component="nav" className={css.navbar}>
      <Logo className={css.logo} />
      <ul className={css.menu}>
        {menu.map(({label, sectionId}) => (
          <li key={`nav-${label}`}>
            <AnchorLink to={`/#${sectionId}`} title={label} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export const BottomNavBar = () => {
  return (
    <Section component="nav" className={css.bottomNav}>
      <ul className={css.menu}>
        {menu
          .filter(({isMobile}) => isMobile)
          .map(({label, sectionId}) => (
            <li key={`bottomnav-${label}`}>
              <AnchorLink key={label} to={`/#${sectionId}`} title={label} />
            </li>
          ))}
      </ul>
    </Section>
  );
};
