import React from 'react';
import css from './challenges.module.sass';
import { ProjectsContext } from '../../projects.context';
import clsx from 'clsx';

type Props = {
  projectIndex: number;
  challengesTitleClassname?: string;
  challengesClassname?: string;
  challengesItemClassname?: string;
};

const animationDelayFactor = 0.1;

export const Challenges: React.FC<Props> = ({
  projectIndex,
  challengesClassname,
  challengesTitleClassname,
  challengesItemClassname
}) => {
  const { projectList, challengesLabel } = React.useContext(ProjectsContext);
  const project = projectList[projectIndex];
  const challenges = JSON.parse(project.challenges);

  return (
    <>
      <h3 className={clsx(css.title, challengesTitleClassname)}>{challengesLabel}</h3>
      <ul className={clsx(css.challenges, challengesClassname)}>
        {challenges.map((challenge, index) => (
          <li
            key={index}
            className={clsx(css.challengeItem, challengesItemClassname)}
            style={{ animationDelay: `${index * animationDelayFactor}s` }}>
            {challenge}
          </li>
        ))}
      </ul>
    </>
  );
};
