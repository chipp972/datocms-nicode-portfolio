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
      d="M0,224L80,234.7C160,245,320,267,480,272C640,277,800,267,960,234.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
  </svg>
);
