import React from 'react';
import css from './loader.module.sass';

export type Props = {
  style?: React.CSSProperties;
};

export const Loader: React.FC<Props> = ({ style }) => (
  <div style={style} className={css.loader}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
