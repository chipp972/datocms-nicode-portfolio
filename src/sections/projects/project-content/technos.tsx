/* eslint-disable no-mixed-operators */
import React from 'react';
import { Tag } from '../../../components/tag/tag';
import css from './technos.module.sass';
import clsx from 'clsx';
import { ProjectsContext } from '../projects.context';

type Props = {
  projectIndex: number;
  isExpanded: boolean;
  isTransitionDone: boolean;
};

const maxCardTagNumber = 3;
const baseTransitionDelay = 0.1;
const transitionDelayFactor = 0.1;

export const Technos: React.FC<Props> = ({ projectIndex, isExpanded, isTransitionDone }) => {
  const { projectList } = React.useContext(ProjectsContext);
  const project = projectList[projectIndex];
  const technos = project.technos.split(',');
  return (
    <ul className={css.technoList}>
      {technos.map((techno, index) => (
        <li
          key={techno + index}
          style={{
            transitionDelay: index >= maxCardTagNumber && isExpanded
              ? `${index * transitionDelayFactor + baseTransitionDelay}s`
              : '0s' 
            }}
          className={clsx(css.technoItem, {
            [css.technoItemVisible]: (isExpanded && isTransitionDone) || index < maxCardTagNumber
          })}>
          <Tag>{techno}</Tag>
        </li>
      ))}
      {technos.length > maxCardTagNumber && !(isExpanded && isTransitionDone) && (
        <li
          className={clsx(css.technoItem, {
            [css.technoItemVisible]: !(isExpanded && isTransitionDone)
          })}>
          <Tag>{`+${technos.length - maxCardTagNumber}`}</Tag>
        </li>
      )}
    </ul>
  );
};
