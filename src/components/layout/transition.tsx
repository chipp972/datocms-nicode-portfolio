import React from 'react';

type Props = {
  color?: string;
  bgColor?: string;
  className?: string;
};

export const SectionTransition: React.FC<Props> = ({ color = 'transparent', bgColor = 'transparent', className }) => (
  <svg
    style={{ marginBottom: '-8px', backgroundColor: bgColor }}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320">
    <path
      fill={color}
      fillOpacity="1"
      d="M0,96L60,96C120,96,240,96,360,128C480,160,600,224,720,213.3C840,203,960,117,1080,85.3C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
  </svg>
);
