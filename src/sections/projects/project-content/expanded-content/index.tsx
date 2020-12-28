import React from 'react';
import { RessourceButtons } from './ressource-buttons';
import { Challenges } from './challenges';
import { ProjectsContext } from '../../projects.context';
import css from './expanded-content.module.sass';
import clsx from 'clsx';

type Props = {
  projectIndex: number;
  isExpanded: boolean;
};

export const ExpandedContent: React.FC<Props> = ({ projectIndex, isExpanded }) => {
  const { projectList } = React.useContext(ProjectsContext);
  const project = projectList[projectIndex];

  return (
    <div className={clsx(css.expandedContent, {
      [css.show]: isExpanded
    })}>
      <p
        className={css.description}
        dangerouslySetInnerHTML={{
          __html: project.contextNode.childMarkdownRemark.html
        }}
      />
      <Challenges projectIndex={projectIndex} />
      <RessourceButtons
        projectIndex={projectIndex}
        isExpanded={isExpanded}
      />
    </div>
  );
};
