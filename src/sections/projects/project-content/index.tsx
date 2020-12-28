import React from 'react';
import css from './project-content.module.sass';
import clsx from 'clsx';
import { Technos } from './technos';
import { ProjectHeader } from './project-header';
import { SmallContent } from './small-content';
import { ExpandedContent } from './expanded-content';

type Props = {
  projectIndex: number;
  isExpanded?: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isTransitionDone?: boolean;
};

const _ProjectContent: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { projectIndex, isExpanded = false, setIsExpanded, isTransitionDone = false },
  ref = React.createRef()
) => {
  console.log({ isTransitionDone });
  return (
    <div ref={ref} className={css.projectContent}>
      <ProjectHeader isExpanded={isExpanded && isTransitionDone} projectIndex={projectIndex} />
      <div className={clsx(css.innerContent, {
          [css.innerExpandedContent]: isExpanded && isTransitionDone
        })}>
        <Technos projectIndex={projectIndex} isExpanded={isExpanded && isTransitionDone} />
        <SmallContent
          projectIndex={projectIndex}
          isExpanded={isExpanded}
          isTransitionDone={isTransitionDone}
          setIsExpanded={setIsExpanded}
        />
        <ExpandedContent isExpanded={isExpanded && isTransitionDone} projectIndex={projectIndex} />
      </div>
    </div>
  );
};

export const ProjectContent = React.forwardRef(_ProjectContent);
