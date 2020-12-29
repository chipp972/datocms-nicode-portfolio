import React from 'react';
import Img from 'gatsby-image';
import css from './project-header.module.sass';
import clsx from 'clsx';
import { ProjectsContext } from '../../projects.context';

type Props = {
  overlayClassname: string;
  titleClassname: string;
  className: string;
  projectIndex: number;
};

export const ProjectHeader: React.FC<Props> = ({
  className,
  overlayClassname,
  titleClassname,
  projectIndex
}) => {
  const { projectList } = React.useContext(ProjectsContext);
  const project = projectList[projectIndex];
  return (
    <header className={clsx(css.projectHeader, className)}>
      <Img
        className={css.projectImage}
        {...project.mainImage}
      />
      <div className={clsx(overlayClassname, css.overlay)}></div>
      <h3 className={clsx(css.expandedTitle, titleClassname)}>
        {project.name}
      </h3>
    </header>
  );
};
