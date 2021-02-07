import css from './hero.module.sass';
import React from 'react';
import { ReactLogo } from '../../components/logos/react-logo';
import { TypescriptLogo } from '../../components/logos/typescript-logo';
import { ReduxLogo } from '../../components/logos/redux-logo';
import { Html5Logo } from '../../components/logos/html5-logo';
import { JsLogo } from '../../components/logos/js-logo';
import { SassLogo } from '../../components/logos/sass-logo';
import { gsapClassnames } from './hero.gsap';
import clsx from 'clsx';

const random = (min, max) => Math.random() * max + min;

export const LogoAnimation: React.FC = () => (
  <>
    {[ReactLogo, TypescriptLogo, ReduxLogo, Html5Logo, JsLogo, SassLogo].map((Logo, index) => (
      <Logo
        key={index}
        size={random(0.5, 0.5) * 50}
        className={clsx(css.smallLogo, gsapClassnames.floatingLogos)}
        style={{
          animationDuration: `${random(2, 4)}s`,
          top: `${random(15, 5 + 10 * index)}%`,
          // top: `${random(15, 65)}%`,
          left: `${random(58 + 5 * index, 5)}%`
        }}
      />
    ))}
  </>
);
