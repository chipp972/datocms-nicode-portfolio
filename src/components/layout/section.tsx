import React from 'react';
import css from './layout.module.sass';
import clsx from 'clsx';

type Props = {
  component?: any;
  className?: string;
  id?: string;
};

export const Section: React.FC<Props> = ({
  component: Component = 'section',
  children,
  className,
  ...props
}) => (
  <Component className={clsx(css.section, className)} {...props}>
    {children}
  </Component>
);
