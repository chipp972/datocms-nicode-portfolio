import React from 'react';
import css from './ressource-buttons.module.sass';
import buttonCss from '../../../../components/buttons/buttons.module.sass';
import clsx from 'clsx';
import { Case } from 'react-case-when';
import { ProjectsContext } from '../../projects.context';

type Props = {
  projectIndex: number;
  ressourceButtonWebsite?: string;
  ressourceButtonSourceCode?: string;
};

export const RessourceButtons: React.FC<Props> = ({
  projectIndex,
  ressourceButtonSourceCode,
  ressourceButtonWebsite
}) => {
  const { projectList, checkSourceCodeLabel, checkWebsiteLabel } = React.useContext(
    ProjectsContext
  );
  const project = projectList[projectIndex];

  if (!project.websiteUrl && !project.sourceCodeUrl) {
    return null;
  }

  return (
    <div className={css.ressourceButtons}>
      <Case when={!!project.websiteUrl}>
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className={clsx(buttonCss.ghostOrangeButton, css.button, ressourceButtonWebsite)}>
          {checkWebsiteLabel}
        </a>
      </Case>
      <Case when={!!project.sourceCodeUrl}>
        <a
          href={project.sourceCodeUrl}
          target="_blank"
          rel="noreferrer"
          className={clsx(buttonCss.ghostGreenButton, css.button, ressourceButtonSourceCode)}>
          {checkSourceCodeLabel}
        </a>
      </Case>
    </div>
  );
};
