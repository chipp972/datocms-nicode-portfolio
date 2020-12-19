import React from 'react';
import clsx from 'clsx';
import css from './contact.module.sass';

export const MailIcon: React.FC<SvgProps> = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    className={clsx(className, css.mailIcon)}>
  <path className={css.mailIconBlue1} d="M10 206h492v296H10z"/>
  <path className={css.mailIconBlue2} d="M502 206l-54-39.073H64L10 206l51.149 39.073H448z"/>
  <path className={css.mailIconPaper} d="M64 241.065V10h384v231.065L256 384.169z"/>
  <path className={css.mailIconBlue3} d="M10 502h492L256 324z"/>
  <path fill="black" d="M507.858 197.907c.002-.003.003-.006.005-.009L458 161.819V10c0-5.523-4.477-10-10-10H64c-5.523 0-10 4.477-10 10v151.819L4.138 197.898c-2.701 1.955-4.127 5.008-4.128 8.106-.004-.001-.007-.002-.01-.004v296c0 5.372 4.239 9.742 9.552 9.977.13.014.273.023.448.023h492c.27 0 .487-.011.657-.033 5.215-.34 9.343-4.666 9.343-9.967V206c0-3.332-1.636-6.276-4.142-8.093zM314.52 354L492 225.579v256.842L314.52 354zM20 225.579L197.48 354 20 482.421V225.579zM484.941 206L458 225.494v-38.988L484.941 206zM438 20v219.966L297.461 341.657l-35.599-25.758c-3.499-2.531-8.226-2.531-11.725 0l-35.599 25.758L74 239.966V20h364zM54 225.494L27.059 206 54 186.506v38.988zM40.879 492L256 336.343 341.211 398h-46.384c-5.523 0-10 4.477-10 10s4.477 10 10 10h74.024l27.64 20H241.254c-5.523 0-10 4.477-10 10s4.477 10 10 10h182.878l46.989 34H40.879z"/>
  <path fill="black" d="M128 135.533h256c5.523 0 10-4.477 10-10s-4.477-10-10-10H128c-5.523 0-10 4.477-10 10s4.477 10 10 10zM128 183.583h256c5.523 0 10-4.477 10-10s-4.477-10-10-10H128c-5.523 0-10 4.477-10 10s4.477 10 10 10zM256 211.63c-2.63 0-5.21 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07 0 2.64 1.07 5.21 2.93 7.07 1.86 1.86 4.44 2.93 7.07 2.93s5.21-1.07 7.07-2.93c1.86-1.86 2.93-4.44 2.93-7.07s-1.07-5.21-2.93-7.07c-1.86-1.86-4.44-2.93-7.07-2.93zM128 231.632h89c5.523 0 10-4.477 10-10s-4.477-10-10-10h-89c-5.523 0-10 4.477-10 10s4.477 10 10 10zM200.33 438c-2.63 0-5.21 1.07-7.07 2.93s-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.44 2.93 7.07 2.93 5.21-1.07 7.07-2.93c1.87-1.86 2.93-4.44 2.93-7.07s-1.06-5.21-2.93-7.07c-1.86-1.86-4.43-2.93-7.07-2.93z"/>
</svg>
);
