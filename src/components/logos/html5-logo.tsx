import React from 'react';
import clsx from 'clsx';
import css from './logos.module.sass';

export const Html5Logo: React.FC<SvgProps> = ({ size = 25, className, style }) => (
  <svg
    style={style}
    width={size * 2.5}
    height={size * 2.5}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2500 2500"
    fill="none"
    className={clsx(css.html5, className)}>
    <circle cx="1250" cy="1250" r="1250" fill="#212126" />
    <path
      d="M1968.69 634.53L1837.8 2100.79L1249.47 2263.89L662.75 2101.01L532 634.53H1968.69Z"
      fill="#E44D26"
    />
    <path d="M1250.35 2139.22L1725.75 2007.42L1837.6 754.433H1250.35V2139.22Z" fill="#F16529" />
    <path
      d="M995.892 1114.16H1250.33V934.298H799.33L803.633 982.55L847.841 1478.19H1250.33V1298.33H1012.33L995.892 1114.16V1114.16ZM1036.43 1568.12H855.878L881.074 1850.53L1249.5 1952.8L1250.33 1952.57V1765.44L1249.54 1765.65L1049.23 1711.57L1036.43 1568.12V1568.12Z"
      fill="#EBEBEB"
    />
    <path
      d="M665.689 236H757.091V326.304H840.705V236H932.112V509.462H840.71V417.891H757.097V509.462H665.695V236H665.689ZM1052.3 326.686H971.849V236H1224.23V326.686H1143.72V509.462H1052.32V326.686H1052.31H1052.3ZM1264.28 236H1359.58L1418.21 332.087L1476.78 236H1572.12V509.462H1481.09V373.919L1418.21 471.15H1416.63L1353.71 373.919V509.462H1264.28V236ZM1617.61 236H1709.04V419.074H1837.58V509.462H1617.6V236H1617.61Z"
      fill="#EBEBEB"
    />
    <path
      d="M1249.71 1478.19H1471.19L1450.3 1711.45L1249.71 1765.6V1952.71L1618.43 1850.53L1621.13 1820.14L1663.4 1346.63L1667.79 1298.33H1249.71V1478.19ZM1249.71 1113.72V1114.16H1684.15L1687.76 1073.73L1695.96 982.55L1700.25 934.298H1249.71V1113.72V1113.72Z"
      fill="white"
    />
  </svg>
);