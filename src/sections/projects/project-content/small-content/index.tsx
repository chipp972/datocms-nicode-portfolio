import React from 'react';
import { ProjectsContext } from '../../projects.context';
import css from './small-content.module.sass';
import buttonCss from '../../../../components/buttons/buttons.module.sass';
import clsx from 'clsx';

type Props = {
  className: string;
  projectIndex: number;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SmallContent: React.FC<Props> = ({
  className,
  projectIndex,
  isExpanded,
  setIsExpanded
}) => {
  const { projectList, readMoreLabel } = React.useContext(ProjectsContext);
  const project = projectList[projectIndex];

  return (
    <div className={clsx(css.smallContent, className)}>
      <h3 className={css.title}>{project.name}</h3>
      <p
        className={css.excerpt}
        dangerouslySetInnerHTML={{
          __html: project.excerptNode.childMarkdownRemark.html
        }}
      />
      <button
        onClick={() => setIsExpanded(true)}
        className={clsx(buttonCss.gradientGreenButton, css.button, {
          [css.buttonHidden]: isExpanded
        })}>
        {readMoreLabel}
      </button>
    </div>
  );
};
