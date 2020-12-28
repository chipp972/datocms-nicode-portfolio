import React from 'react';
import { ProjectsContext } from '../../projects.context';
import clsx from 'clsx';
import css from './small-content.module.sass';
import buttonCss from '../../../../components/buttons/buttons.module.sass';

type Props = {
  projectIndex: number;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isTransitionDone: boolean;
};

export const SmallContent: React.FC<Props> = ({ projectIndex, isExpanded, setIsExpanded, isTransitionDone }) => {
  const { projectList, readMoreLabel } = React.useContext(ProjectsContext);
  const project = projectList[projectIndex];

  return (
        <div style={{ opacity: isExpanded ? 0 : 1 }} className={clsx(css.smallContent, {
          [css.hidden]: isExpanded && isTransitionDone 
        })}>
          <h3 className={css.title}>{project.name}</h3>
          <p
            className={css.excerpt}
            dangerouslySetInnerHTML={{
              __html: project.excerptNode.childMarkdownRemark.html
            }}
          />
          <button
            onClick={() => setIsExpanded(true)}
            className={buttonCss.largeButton}>
            {readMoreLabel}
          </button>
        </div>
  );
};
