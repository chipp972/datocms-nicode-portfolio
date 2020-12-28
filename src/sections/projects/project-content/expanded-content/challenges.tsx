import React from 'react';
import css from './challenges.module.sass';
import { ProjectsContext } from '../../projects.context';

type Props = {
  projectIndex: number;
};

const animationDelayFactor = 0.1;

export const Challenges: React.FC<Props> = ({ projectIndex }) => {
  const { projectList, challengesLabel } = React.useContext(ProjectsContext);
  const project = projectList[projectIndex];
  const challenges = JSON.parse(project.challenges);

  return (
    <>
      <h3 className={css.title}>{challengesLabel}</h3>
      <ul className={css.challenges}>
        {challenges.map((challenge, index) => (
          <li
            key={index}
            className={css.challengeItem}
            style={{ animationDelay: `${index * animationDelayFactor}s` }}>
            {challenge}
          </li>
        ))}
      </ul>
    </>
  );
};
