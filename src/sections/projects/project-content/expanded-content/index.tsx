import React from 'react';
import { RessourceButtons } from './ressource-buttons';
import { Challenges } from './challenges';
import { ProjectsContext } from '../../projects.context';
import css from './expanded-content.module.sass';
import clsx from 'clsx';

type Props = {
  projectIndex: number;
  className?: string;
  descriptionClassname?: string;
  challengesTitleClassname?: string;
  challengesClassname?: string;
  challengesItemClassname?: string;
  ressourceButtonWebsite?: string;
  ressourceButtonSourceCode?: string;
};

export const ExpandedContent: React.FC<Props> = ({
  projectIndex,
  className,
  descriptionClassname,
  challengesClassname,
  challengesTitleClassname,
  challengesItemClassname,
  ressourceButtonWebsite,
  ressourceButtonSourceCode
}) => {
  const { projectList } = React.useContext(ProjectsContext);
  const project = projectList[projectIndex];

  return (
    <div className={className}>
      <p
        className={clsx(css.description, descriptionClassname)}
        dangerouslySetInnerHTML={{
          __html: project.contextNode.childMarkdownRemark.html
        }}
      />
      <Challenges
        challengesClassname={challengesClassname}
        challengesTitleClassname={challengesTitleClassname}
        challengesItemClassname={challengesItemClassname}
        projectIndex={projectIndex}
      />
      <RessourceButtons
        ressourceButtonWebsite={ressourceButtonWebsite}
        ressourceButtonSourceCode={ressourceButtonSourceCode}
        projectIndex={projectIndex}
      />
    </div>
  );
};
