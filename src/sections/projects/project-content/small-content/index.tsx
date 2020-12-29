import React from 'react';
import { ProjectsContext } from '../../projects.context';
import css from './small-content.module.sass';
import buttonCss from '../../../../components/buttons/buttons.module.sass';

type Props = {
  className: string;
  projectIndex: number;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SmallContent: React.FC<Props> = ({ className, projectIndex, setIsExpanded }) => {
  const { projectList, readMoreLabel } = React.useContext(ProjectsContext);
  const project = projectList[projectIndex];

  return (
    <div className={className}>
      <h3 className={css.title}>{project.name}</h3>
      <p
        className={css.excerpt}
        dangerouslySetInnerHTML={{
          __html: project.excerptNode.childMarkdownRemark.html
        }}
      />
      <button onClick={() => setIsExpanded(true)} className={buttonCss.largeButton}>
        {readMoreLabel}
      </button>
    </div>
  );
};
