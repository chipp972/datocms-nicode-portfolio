import React from 'react';
import css from './tag.module.sass';

export const Tag: React.FC = ({ children }) => (
  <span className={css.tag}>{children}</span>
);
