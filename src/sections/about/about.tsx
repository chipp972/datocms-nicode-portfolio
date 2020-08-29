import React from 'react';
import { Section } from '../../components/layout';
import cssVar from '../../theme/variables/js-variables.module.scss';
import css from './about.module.sass';
import { useSocialList, icon } from '../../components/social/use-social-list';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query AboutSectionQuery {
    about: datoCmsAboutSection {
      id
      introNode {
        childMarkdownRemark {
          html
        }
      }
      companiesNode {
        childMarkdownRemark {
          html
        }
      }
      technosNode {
        childMarkdownRemark {
          html
        }
      }
      collaborationTitleNode {
        childMarkdownRemark {
          html
        }
      }
      collaborations {
        title
        description
      }
    }
  }
`;

type AboutSectionQuery = {
  about: {
    id: string;
    introNode: {
      childMarkdownRemark: {
        html: string;
      };
    };
    companiesNode: {
      childMarkdownRemark: {
        html: string;
      };
    };
    technosNode: {
      childMarkdownRemark: {
        html: string;
      };
    };
    collaborationTitleNode: {
      childMarkdownRemark: {
        html: string;
      };
    };
    collaborations: {
      title: string;
      description: string;
    }[];
  };
};

export const About: React.FC = () => {
  const socialProfiles = useSocialList();
  const { about } = useStaticQuery<AboutSectionQuery>(query);
  return (
    <Section id={about.id} className={css.about}>
      <section dangerouslySetInnerHTML={{ __html: about.introNode.childMarkdownRemark.html }} />
      <section dangerouslySetInnerHTML={{__html: about.companiesNode.childMarkdownRemark.html }} />
      <section dangerouslySetInnerHTML={{__html: about.technosNode.childMarkdownRemark.html }} />
      <section dangerouslySetInnerHTML={{__html: about.collaborationTitleNode.childMarkdownRemark.html }} />
      <ul>
        {about.collaborations.map(({title, description}) => (
          <li key={title}>
            <h2>{title}</h2>
            <p>{description}</p>
          </li>
        ))}
      </ul>
      <div className={css.socialIconList}>
        {socialProfiles.map(({ profileType, label, url }) => {
          const Icon = icon[profileType];
          return (
            <a key={profileType} href={url} target="_blank" className={css.socialIcon}>
              <Icon size={cssVar.xxlSize} />
              <span className={css.label}>{label}</span>
            </a>
          );
        })}
      </div>
    </Section>
  );
};
