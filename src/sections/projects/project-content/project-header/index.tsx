import React from 'react';
import Img from 'gatsby-image';
import css from './project-header.module.sass';
import clsx from 'clsx';
import { ProjectsContext } from '../../projects.context';

type Props = {
  projectIndex: number;
  isExpanded: boolean;
};

export const ProjectHeader: React.FC<Props> = ({ projectIndex, isExpanded }) => {
  const { projectList } = React.useContext(ProjectsContext);
  const project = projectList[projectIndex];
  return (
    <header className={css.projectHeader}>
      <Img
        className={clsx(css.projectImage, {
          [css.projectImageExpanded]: isExpanded
        })}
        {...project.mainImage}
      />
      <h3
        className={clsx(css.expandedTitle, {
          [css.expandedTitleVisible]: isExpanded
        })}>
        {project.name}
      </h3>
    </header>
  );
};
