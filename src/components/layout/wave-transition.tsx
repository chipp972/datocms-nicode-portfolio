import React from 'react';
import css from './wave-transition.module.sass';

export const WaveTransition: React.FC = () => (
  <div className={css.wavesContainer}>
    <div className={css.waves} />
  </div>
);
