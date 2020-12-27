import React from 'react';
import css from './ressource-buttons.module.sass';
import buttonCss from '../../../components/buttons/buttons.module.sass';
import clsx from 'clsx';
import { Case } from 'react-case-when';
import { ProjectsContext } from '../projects.context';

type Props = {
  projectIndex: number;
  isExpanded: boolean;
  isTransitionDone: boolean;
};

// eslint-disable-next-line complexity
export const RessourceButtons: React.FC<Props> = ({
  projectIndex,
  isExpanded,
  isTransitionDone
}) => {
  const { projectList, checkSourceCodeLabel, checkWebsiteLabel } = React.useContext(ProjectsContext);
  const project = projectList[projectIndex];
  const isVisible = isExpanded && isTransitionDone;

  if (!project.websiteUrl && !project.sourceCodeUrl) {
    return null;
  }

  return (
    <div className={css.ressourceButtons}>
      <Case when={!!project.websiteUrl}>
        <a
          style={{ animationDelay: isVisible ? '0.4s' : '0s' }}
          href={project.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className={clsx(buttonCss.mediumButton, css.button)}>
          {checkWebsiteLabel}
        </a>
      </Case>
      <Case when={!!project.sourceCodeUrl}>
        <a
          style={{ animationDelay: isVisible ? '0.6s' : '0s' }}
          href={project.sourceCodeUrl}
          target="_blank"
          rel="noreferrer"
          className={clsx(buttonCss.mediumButton, css.button)}>
          {checkSourceCodeLabel}
        </a>
      </Case>
    </div>
  );
};
