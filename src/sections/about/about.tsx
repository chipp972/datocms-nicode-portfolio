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
      technosImage {
        alt
        fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
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
        image {
          alt
          fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
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
    introNode: MarkdownField;
    companiesNode: MarkdownField;
    companiesImage: {
      alt: string;
      fluid: FluidObject;
    };
    technosNode: MarkdownField;
    technosImage: {
      alt: string;
      fluid: FluidObject;
    };
    collaborationTitleNode: MarkdownField;
    collaborations: {
      title: string;
      description: string;
      image: {
        alt: string;
        fluid: FluidObject;
      };
    }[];
  };
};

// eslint-disable-next-line max-lines-per-function
export const About: React.FC = () => {
  const socialProfiles = useSocialList();
  const { about } = useStaticQuery<AboutSectionQuery>(query);
  return (
    <Section id={about.id} className={css.about}>
      <Img
        className={css.photo}
        fluid={about.photo.fluid}
        style={{ display: 'block' }}
        alt={about.photo.alt}
      />
      <section
        className={css.intro}
        dangerouslySetInnerHTML={{ __html: about.introNode.childMarkdownRemark.html }}
      />
      <section className={css.companiesBloc}>
        <span
          className={css.companiesText}
          dangerouslySetInnerHTML={{ __html: about.companiesNode.childMarkdownRemark.html }}
        />
        <Img
          style={{ flex: 1, borderRadius: 50 }}
          fluid={about.companiesImage.fluid}
          alt={about.companiesImage.alt}
        />
      </section>
      <section className={css.technosBloc}>
        <Img
          style={{ flex: 1, borderRadius: 50 }}
          fluid={about.technosImage.fluid}
          alt={about.technosImage.alt}
        />
        <span
          className={css.technosText}
          dangerouslySetInnerHTML={{ __html: about.technosNode.childMarkdownRemark.html }}
        />
      </section>
      <section
        className={css.collaborationText}
        dangerouslySetInnerHTML={{ __html: about.collaborationTitleNode.childMarkdownRemark.html }}
      />
      <section className={css.collaborations}>
        <ul className={css.collaborationList}>
          {about.collaborations.map(({ title, description, image }) => (
            <li className={css.collaborationListItem} key={title}>
              <Img className={css.collaborationImage} fluid={image.fluid} alt={image.alt} />
              <h4 className={css.collaborationTitle}>{title}</h4>
              <p className={css.collaborationDescription}>{description}</p>
            </li>
          ))}
        </ul>
      </section>
      <div className={css.socialIconList}>
        {socialProfiles.map(({ profileType, label, url }) => {
          const Icon = icon[profileType];
          return (
            <a
              key={profileType}
              href={url}
              target="_blank"
              rel="noreferrer"
              className={css.socialIcon}>
              <Icon size={cssVar.xxlSize} />
              <span className={css.label}>{label}</span>
            </a>
          );
        })}
      </div>
    </Section>
  );
};
