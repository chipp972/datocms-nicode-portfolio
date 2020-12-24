import React from 'react';
import { Project } from './projects.type';
import Img from 'gatsby-image';
import { Tag } from '../../components/tag/tag';
import css from './project-content.module.sass';
import buttonCss from '../../components/buttons/buttons.module.sass';
import clsx from 'clsx';

type Props = {
  project: Project;
  readMoreLabel: string;
  challengesLabel: string;
  checkSourceCodeLabel: string;
  checkWebsiteLabel: string;
  nextProjectLabel: string;
  previousProjectLabel: string;
  isCurrentSlide: boolean;
  isTransitionDone: boolean;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const RessourceButtons: React.FC<{
  websiteUrl?: string;
  sourceCodeUrl?: string;
  checkSourceCodeLabel: string;
  checkWebsiteLabel: string;
}> = ({
  websiteUrl,
  sourceCodeUrl,
  checkWebsiteLabel,
  checkSourceCodeLabel
}) => (
  <div>
    {websiteUrl && (
      <a href={websiteUrl} target="_blank" rel="noreferrer" className={buttonCss.mediumButton}>
        {checkWebsiteLabel}
      </a>
    )}
    {sourceCodeUrl && (
      <a href={sourceCodeUrl} target="_blank" rel="noreferrer" className={buttonCss.mediumButton}>
        {checkSourceCodeLabel}
      </a>
    )}
  </div>
);

export const ProjectContent: React.FC<Props> = ({
  project,
  readMoreLabel,
  checkWebsiteLabel,
  checkSourceCodeLabel,
  isExpanded,
  isTransitionDone,
  setIsExpanded
}) => (
  <div className={css.projectContent}>
    <Img className={css.projectImage} {...project.mainImage} />
    <div
      className={clsx(css.innerContent, {
        [css.innerExpandedContent]: isExpanded && isTransitionDone
      })}>
      <ul className={css.technoList}>
        {project.technos.split(',').map((techno, index) => (
          <li
            key={techno + index}
            className={clsx(css.technoItem, {
              [css.technoItemVisible]: (isExpanded && isTransitionDone) || index < 3
            })}>
            <Tag>{techno}</Tag>
          </li>
        ))}
      </ul>
      <h3 className={css.title}>{project.name}</h3>
      {!(isExpanded && isTransitionDone) && <p
        className={css.excerpt}
        dangerouslySetInnerHTML={{ __html: project.excerptNode.childMarkdownRemark.html }}
      />}
      {isExpanded && isTransitionDone && <p dangerouslySetInnerHTML={{ __html: project.contextNode.childMarkdownRemark.html }} />}
      <button
        onClick={() => setIsExpanded(true)}
        className={clsx(buttonCss.largeButton, {
          [css.hiddenContent]: isExpanded && isTransitionDone
        })}>
        {readMoreLabel}
      </button>
      {isExpanded && isTransitionDone && (
        <RessourceButtons
          websiteUrl={project.websiteUrl}
          sourceCodeUrl={project.sourceCodeUrl}
          checkWebsiteLabel={checkWebsiteLabel}
          checkSourceCodeLabel={checkSourceCodeLabel}
        />
      )}
    </div>
  </div>
);
