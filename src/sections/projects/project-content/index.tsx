/* eslint-disable max-lines-per-function, fp/no-mutation */
import React from 'react';
import css from './project-content.module.sass';
import clsx from 'clsx';
import { Technos } from './technos';
import { ProjectHeader } from './project-header';
import { SmallContent } from './small-content';
import { ExpandedContent } from './expanded-content';
import { ProjectsContext } from '../projects.context';
import { extendContentAnimation, retractContentAnimation } from './project-content.gsap';
import { useGsapAnimation } from '../../../helpers/gsap-react';

type Props = {
  projectIndex: number;
  isExpanded?: boolean;
  isModalContent?: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isTransitionDone?: boolean;
  style?: React.CSSProperties;
};

const _ProjectContent: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { projectIndex, isModalContent = false, setIsExpanded, isExpanded = false, isTransitionDone = false, style },
  ref = React.createRef()
) => {
  const { projectList } = React.useContext(ProjectsContext);
  const { id } = projectList[projectIndex];
  const [showTechnos, setShowTechnos] = React.useState(false);

  const uniqueId = `${id}-${isModalContent ? 1 : 0}`;
  const gsapClassnames = {
    header: `header-${uniqueId}`,
    headerOverlay: `header-overlay-${uniqueId}`,
    headerTitle: `header-title-${uniqueId}`,
    technos: `technos-${uniqueId}`,
    smallContent: `small-content-${uniqueId}`,
    expandedContent: `expanded-content-${uniqueId}`,
    description: `description-${uniqueId}`,
    challengesTitle: `challenges-title-${uniqueId}`,
    challenges: `challenges-${uniqueId}`,
    challengesItem: `challenges-item-${uniqueId}`,
    ressourceButtonWebsite: `ressource-button-website-${uniqueId}`,
    ressourceButtonSourceCode: `ressource-button-source-code-item-${uniqueId}`
  };

  useGsapAnimation({
    animationFn: () => isExpanded && isTransitionDone
      ? extendContentAnimation({ gsapClassnames, setShowTechnos }).play()
      : retractContentAnimation({ gsapClassnames, setShowTechnos }).play(),
    dependencyList: [isExpanded, isTransitionDone]
  });

  return (
    <div ref={ref} style={style} className={css.projectContent}>
      <ProjectHeader
        overlayClassname={gsapClassnames.headerOverlay}
        titleClassname={gsapClassnames.headerTitle}
        className={gsapClassnames.header}
        projectIndex={projectIndex}
      />
      <div
        className={clsx(css.innerContent, {
          [css.innerExpandedContent]: isExpanded && isTransitionDone
        })}>
        <Technos projectIndex={projectIndex} isExpanded={showTechnos} />
        <SmallContent
          className={gsapClassnames.smallContent}
          projectIndex={projectIndex}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
        <ExpandedContent
          className={gsapClassnames.expandedContent}
          descriptionClassname={gsapClassnames.description}
          challengesTitleClassname={gsapClassnames.challengesTitle}
          challengesClassname={gsapClassnames.challenges}
          challengesItemClassname={gsapClassnames.challengesItem}
          ressourceButtonWebsite={gsapClassnames.ressourceButtonWebsite}
          ressourceButtonSourceCode={gsapClassnames.ressourceButtonSourceCode}
          projectIndex={projectIndex}
        />
      </div>
    </div>
  );
};

export const ProjectContent = React.forwardRef(_ProjectContent);
