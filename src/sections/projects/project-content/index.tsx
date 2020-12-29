/* eslint-disable max-lines-per-function, fp/no-mutation */
import React from 'react';
import css from './project-content.module.sass';
import clsx from 'clsx';
import { Technos } from './technos';
import { ProjectHeader } from './project-header';
import { SmallContent } from './small-content';
import { ExpandedContent } from './expanded-content';
import { gsap } from 'gsap';
import { ProjectsContext } from '../projects.context';

type Props = {
  projectIndex: number;
  isExpanded?: boolean;
  isModalContent?: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isTransitionDone?: boolean;
};

const _ProjectContent: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { projectIndex, isModalContent = false, setIsExpanded, isExpanded = false, isTransitionDone = false },
  ref = React.createRef()
) => {
  const animationRef = React.useRef<gsap.core.Timeline>(null);
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

  React.useEffect(() => {
    if (animationRef.current?.isActive()) {
      animationRef.current.kill();
    }

    if (isExpanded && isTransitionDone) {
      animationRef.current = gsap
        .timeline({
          onStart: () => setShowTechnos(false),
          defaults: {
            duration: 0.35,
            ease: 'power2.inOut'
          }
        })
        .to(`.${gsapClassnames.smallContent}`, {
          opacity: 0,
          onComplete: () => setShowTechnos(true)
        })
        .to(`.${gsapClassnames.headerOverlay}`, {
          opacity: 0.5
        })
        .to(`.${gsapClassnames.headerTitle}`, {
          opacity: 1
        })
        .to(`.${gsapClassnames.expandedContent}`, {
          opacity: 1,
          height: 'auto'
        })
        .to(`.${gsapClassnames.smallContent}`, {
          height: 0
        // Add the Tween at the start of the previous Tween so that they run in parallel
        }, '<')
        .fromTo(`.${gsapClassnames.description}`, {
          opacity: 0
        }, {
          opacity: 1,
          delay: 0.5
        })
        .fromTo(`.${gsapClassnames.challengesTitle}`, {
          opacity: 0
        }, {
          opacity: 1
        })
        .fromTo(`.${gsapClassnames.challengesItem}`, {
          opacity: 0,
          translateX: 20
        }, {
          opacity: 1,
          translateX: 0
        })
        .fromTo(`.${gsapClassnames.ressourceButtonWebsite}`, {
          opacity: 0,
          marginLeft: 20
        }, {
          opacity: 1,
          marginLeft: 0
        })
        .fromTo(`.${gsapClassnames.ressourceButtonSourceCode}`, {
          opacity: 0,
          marginLeft: 20
        }, {
          opacity: 1,
          marginLeft: 0
        });

      animationRef.current.play();
    } else if (!isExpanded) {
      animationRef.current = gsap
        .timeline({
          onStart: () => setShowTechnos(false),
          defaults: {
            duration: 0.15,
            ease: 'power2.inOut'
          }
        })
        .to(`.${gsapClassnames.headerTitle}`, {
          opacity: 0
        }, 0)
        .to(`.${gsapClassnames.headerOverlay}`, {
          opacity: 0
        }, 0)
        .to(`.${gsapClassnames.expandedContent}`, {
          opacity: 0,
          height: 0
        }, 0)
        .to(`.${gsapClassnames.smallContent}`, {
          opacity: 1,
          height: 'auto'
        }, 0);

      animationRef.current.play();
    }
  }, [isExpanded, isTransitionDone]);

  return (
    <div ref={ref} className={css.projectContent}>
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
