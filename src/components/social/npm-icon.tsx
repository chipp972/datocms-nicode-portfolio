import React from 'react';
import clsx from 'clsx';
import css from './social-icon.module.sass';

export const NpmIcon: React.FC<SvgProps> = ({ size = 512, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    className={clsx(className, css.npm)}>
    <path
      className={css.npmBg}
      d="M482 502H30C18.954 502 10 493.046 10 482V30C10 18.954 18.954 10 30 10H482C493.046 10 502 18.954 502 30V482C502 493.046 493.046 502 482 502Z"
    />
    <path
      d="M482 512H30C13.458 512 0 498.542 0 482V30C0 13.458 13.458 0 30 0H482C498.542 0 512 13.458 512 30V482C512 498.542 498.542 512 482 512ZM30 20C24.486 20 20 24.486 20 30V482C20 487.514 24.486 492 30 492H482C487.514 492 492 487.514 492 482V30C492 24.486 487.514 20 482 20H30Z"
      fill="black"
    />
    <path
      d="M319.5 68H238C232.477 68 228 63.522 228 58C228 52.478 232.477 48 238 48H319.5C325.023 48 329.5 52.478 329.5 58C329.5 63.522 325.023 68 319.5 68Z"
      fill="black"
    />
    <path
      d="M192.618 68H192.5C186.977 68 182.5 63.522 182.5 58C182.5 52.478 186.977 48 192.5 48H192.618C198.141 48 202.618 52.478 202.618 58C202.618 63.522 198.141 68 192.618 68Z"
      fill="black"
    />
    <path
      className={css.npmLetter}
      d="M354 187H158V246V304.5V371H281V240H290.5V371H354V187Z"
      strokeWidth="26"
    />
  </svg>
);
