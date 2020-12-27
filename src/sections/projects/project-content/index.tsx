import React from 'react';
import css from './project-content.module.sass';
import buttonCss from '../../../components/buttons/buttons.module.sass';
import clsx from 'clsx';
import { Technos } from './technos';
import { ProjectHeader } from './project-header';
import { RessourceButtons } from './ressource-buttons';
import { Challenges } from './challenges';
import { ProjectsContext } from '../projects.context';

type Props = {
  projectIndex: number;
  isTransitionDone: boolean;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

// eslint-disable-next-line max-lines-per-function, complexity
export const ProjectContent: React.FC<Props> = ({
  projectIndex,
  isExpanded,
  isTransitionDone,
  setIsExpanded
}) => {
  const { projectList, readMoreLabel } = React.useContext(ProjectsContext);
  const project = projectList[projectIndex];

  return (
    <div className={css.projectContent}>
      <ProjectHeader
        isExpanded={isExpanded}
        isTransitionDone={isTransitionDone}
        projectIndex={projectIndex}
      />
      <div
        className={clsx(css.innerContent, {
          [css.innerExpandedContent]: isExpanded && isTransitionDone
        })}>
        <Technos projectIndex={projectIndex} isExpanded={isExpanded} isTransitionDone={isTransitionDone} />
        <h3
          className={clsx(css.title, {
            [css.hideMe]: isExpanded && isTransitionDone
          })}>
          {project.name}
        </h3>
        <p
          className={css.excerpt}
          dangerouslySetInnerHTML={{
            __html:
              isExpanded && isTransitionDone
                ? project.contextNode.childMarkdownRemark.html
                : project.excerptNode.childMarkdownRemark.html
          }}
        />
        <button
          onClick={() => setIsExpanded(true)}
          className={clsx(buttonCss.largeButton, {
            [css.hideMe]: isExpanded && isTransitionDone
          })}>
          {readMoreLabel}
        </button>
        {/* TODO: transition challenges properly */}
        {isExpanded && isTransitionDone && (
          <>
            <Challenges projectIndex={projectIndex} />
            <RessourceButtons
              projectIndex={projectIndex}
              isExpanded={isExpanded}
              isTransitionDone={isTransitionDone}
            />
          </>
        )}
      </div>
    </div>
  );
};
