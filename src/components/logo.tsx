/* eslint-disable max-lines-per-function */
import React from 'react';
import css from '../theme/variables/js-variables.module.scss';

export const Logo: React.FC<SvgProps> = ({ size, className }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 526 526"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <circle cx="263" cy="259" r="256" fill="url(#paint0_linear)" />
    </g>
    <path
      d="M190.043 375.224L160.279 313.677C137.908 267.418 151.013 213.188 188.87 181.797C212.436 162.256 234.92 141.445 255.553 118.829L260.798 113.08L272.994 129.194C288.043 149.077 299.527 170.22 306.311 191.643L190.043 375.224Z"
      fill={css.tealA700}
    />
    <path
      d="M371.833 189.849L367.869 170.032C348.275 216.218 298.019 240.759 269.212 272.628C218.835 328.36 190.043 375.224 190.043 375.224H219.87C352.441 375.224 391.018 285.748 371.833 189.849V189.849Z"
      fill={css.greenA700}
    />
    <path
      d="M367.868 170.032L360.643 172.924C342.84 180.051 324.692 186.224 306.311 191.643V191.644C295.348 194.876 284.302 197.841 273.198 200.58C225.45 212.359 190.042 255.474 190.042 306.859V375.224C190.043 375.224 314.009 296.988 367.868 170.032V170.032Z"
      fill={css.logoLightGreen}
    />
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="526"
        height="526"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.737255 0 0 0 0 0.32549 0 0 0 0.3 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="263"
        y1="3"
        x2="263"
        y2="515"
        gradientUnits="userSpaceOnUse">
        <stop stopColor={css.amber500} />
        <stop offset="1" stopColor={css.amber900} />
      </linearGradient>
    </defs>
  </svg>
);
