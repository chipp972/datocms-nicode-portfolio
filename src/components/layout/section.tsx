import React from 'react';
import css from './layout.module.sass';
import clsx from 'clsx';

type Props = {
  component?: any;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  isFullWidth?: boolean;
};

export const Section: React.FC<Props> = ({
  component: Component = 'section',
  isFullWidth = false,
  children,
  className,
  ...props
}) => (
  <Component className={clsx({
    [css.section]: !isFullWidth,
    [css.fullWidthSection]: isFullWidth
  }, className)} {...props}>
    {children}
  </Component>
);
