import React from 'react';
import css from './navigation.module.sass';
import { ArrowIcon, ArrowDirection } from './arrow-icon';

type Props = {
  isStart: boolean;
  isEnd: boolean;
  slidePrev: () => void;
  slideNext: () => void;
  previousProjectLabel: string;
  nextProjectLabel: string;
};

export const ProjectsNavigation: React.FC<Props> = ({
  isStart,
  isEnd,
  slideNext,
  slidePrev,
  previousProjectLabel,
  nextProjectLabel
}) => (
  <div className={css.navigationContainer}>
    <button className={css.navigation} disabled={isStart} onClick={() => slidePrev()}>
      <ArrowIcon size={50} direction={ArrowDirection.left} />
      {previousProjectLabel}
    </button>
    <button className={css.navigation} disabled={isEnd} onClick={() => slideNext()}>
      <ArrowIcon size={50} direction={ArrowDirection.right} />
      {nextProjectLabel}
    </button>
  </div>
);
