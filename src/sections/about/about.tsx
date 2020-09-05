import React from 'react';
import { Section } from '../../components/layout';
import cssVar from '../../theme/variables/js-variables.module.scss';
import css from './about.module.sass';
import { useSocialList, icon } from '../../components/social/use-social-list';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

const query = graphql`
  query AboutSectionQuery {
    about: datoCmsAboutSection {
      id
      photo {
        alt
        fluid(maxWidth: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
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
      companiesImage {
        alt
        fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
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
    photo: {
      alt: string;
      fluid: FluidObject;
    };
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
    companiesImage: {
      alt: string;
      fluid: FluidObject;
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
      <Img className={css.photo} fluid={about.photo.fluid} style={{display: 'block'}} alt={about.photo.alt} />
      <section className={css.intro} dangerouslySetInnerHTML={{ __html: about.introNode.childMarkdownRemark.html }} />
      <section className={css.companiesBloc}>
        <span className={css.companiesText} dangerouslySetInnerHTML={{__html: about.companiesNode.childMarkdownRemark.html }} />
        <Img style={{flex: 1}} fluid={about.companiesImage.fluid} alt={about.companiesImage.alt} />
      </section> 
      <section className={css.technosBloc}>
        <Img style={{flex: 1}} fluid={about.companiesImage.fluid} alt={about.companiesImage.alt} />
        <span className={css.technosText} dangerouslySetInnerHTML={{__html: about.technosNode.childMarkdownRemark.html }} />
      </section>
      <section className={css.collaborationText} dangerouslySetInnerHTML={{__html: about.collaborationTitleNode.childMarkdownRemark.html }} />
      <section className={css.collaborations}>
        <ul className={css.collaborationList}>
          {about.collaborations.map(({title, description}) => (
            <li key={title}>
              <h2 className={css.collaborationTitle}>{title}</h2>
              <p className={css.collaborationDescription}>{description}</p>
            </li>
          ))}
        </ul>
      </section>
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
