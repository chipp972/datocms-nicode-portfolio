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
  project: Project;
  checkSourceCodeLabel: string;
  checkWebsiteLabel: string;
}> = ({ project, checkWebsiteLabel, checkSourceCodeLabel }) => (
  <div className={css.ressourceButtons}>
    {project.websiteUrl && (
      <a
        href={project.websiteUrl}
        target="_blank"
        rel="noreferrer"
        className={clsx(buttonCss.mediumButton, css.button)}>
        {checkWebsiteLabel}
      </a>
    )}
    {project.sourceCodeUrl && (
      <a
        href={project.sourceCodeUrl}
        target="_blank"
        rel="noreferrer"
        className={clsx(buttonCss.mediumButton, css.button)}>
        {checkSourceCodeLabel}
      </a>
    )}
  </div>
);

const Technos = ({ project, isExpanded, isTransitionDone }) => {
  const maxCardTagNumber = 3;
  const technos = project.technos.split(',');
  return (
    <ul className={css.technoList}>
      {technos.map((techno, index) => (
        <li
          key={techno + index}
          style={{ transitionDelay: index >= maxCardTagNumber ? `${index * 0.1 + 0.3}s` : '0s' }}
          className={clsx(css.technoItem, {
            [css.technoItemVisible]: (isExpanded && isTransitionDone) || index < maxCardTagNumber
          })}>
          <Tag>{techno}</Tag>
        </li>
      ))}
      {technos.length > maxCardTagNumber && !(isExpanded && isTransitionDone) && (
        <li
          className={clsx(css.technoItem, {
            [css.technoItemVisible]: !(isExpanded && isTransitionDone)
          })}>
          <Tag>{`+${technos.length - maxCardTagNumber}`}</Tag>
        </li>
      )}
    </ul>
  );
};

const Challenges = ({ project, challengesLabel }) => {
  const challenges = JSON.parse(project.challenges);
  return (
    <>
      <h3 className={css.title}>{challengesLabel}</h3>
      <ul className={css.challenges}>
        {challenges.map((challenge, index) => (
          <li key={index} className={css.challengeItem} style={{ animationDelay: `${index * 0.1}s`}}>{challenge}</li>
        ))}
      </ul>
    </>
  );
};

export const ProjectContent: React.FC<Props> = ({
  project,
  readMoreLabel,
  checkWebsiteLabel,
  checkSourceCodeLabel,
  challengesLabel,
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
      <Technos project={project} isExpanded={isExpanded} isTransitionDone={isTransitionDone} />
      <h3 className={css.title}>{project.name}</h3>
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
          [css.hiddenContent]: isExpanded && isTransitionDone
        })}>
        {readMoreLabel}
      </button>
      {isExpanded && isTransitionDone && (project.websiteUrl || project.sourceCodeUrl) && (
        <>
          <Challenges project={project} challengesLabel={challengesLabel} />
          <RessourceButtons
            project={project}
            checkWebsiteLabel={checkWebsiteLabel}
            checkSourceCodeLabel={checkSourceCodeLabel}
          />
        </>
      )}
    </div>
  </div>
);
