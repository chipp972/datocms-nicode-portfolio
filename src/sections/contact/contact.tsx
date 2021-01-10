import React from 'react';
import css from './contact.module.sass';
import { Section } from '../../components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import { LinkedInIcon } from '../../components/social/linkedin-icon';
import { MailIcon } from './mail-icon';
import { PhoneIcon } from './phone-icon';

const query = graphql`
  query ContactSectionQuery {
    contact: datoCmsContactSection {
      id
      sectionLabel
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      rdvDescriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
    contactMethods: allDatoCmsContactMethod(sort: { fields: position }) {
      edges {
        node {
          id
          contactType
          url
          label
          position
          detailsNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

enum ContactType {
  Email = 'Email',
  LinkedIn = 'LinkedIn',
  Phone = 'Phone'
}

export const icon = {
  [ContactType.LinkedIn]: LinkedInIcon,
  [ContactType.Email]: MailIcon,
  [ContactType.Phone]: PhoneIcon
};

type ContactMethod = {
  id: string;
  contactType: ContactType;
  position: number;
  label: string;
  detailsNode: MarkdownField;
  url: string;
};

type ContactSectionQuery = {
  contact: {
    id: string;
    sectionLabel: string;
    descriptionNode: MarkdownField;
    rdvDescriptionNode: MarkdownField;
  };
  contactMethods: {
    edges: { node: ContactMethod }[];
  };
};

export const Contact: React.FC = () => {
  const { contact, contactMethods } = useStaticQuery<ContactSectionQuery>(query);
  const isSSR = typeof window === 'undefined';
  const CalendlyWidget = React.lazy(() => import('react-calendly')
    .then((module) => ({ default: module.InlineWidget })));

  return (
    <Section id={contact.id} className={css.contact}>
      <h2 className={css.title}>{contact.sectionLabel}</h2>
      <p
        className={css.description}
        dangerouslySetInnerHTML={{ __html: contact.descriptionNode.childMarkdownRemark.html }}
      />
      <div className={css.contactMethodList}>
        {contactMethods.edges.map(({ node: { id, contactType, label, detailsNode, url } }) => {
          const Icon = icon[contactType];
          return (
            <div key={id}>
              <a className={css.contactMethod} href={url} target="_blank" rel="noreferrer">
                <Icon className={css.icon} />
                <p className={css.label}>{label}</p>
              </a>
              <p
                className={css.details}
                dangerouslySetInnerHTML={{ __html: detailsNode.childMarkdownRemark.html }}
              />
            </div>
          );
        })}
      </div>
      <p
        className={css.description}
        dangerouslySetInnerHTML={{ __html: contact.rdvDescriptionNode.childMarkdownRemark.html }}
      />
      {!isSSR && (
        <React.Suspense fallback={<div>Chargement du calendrier...</div>}>
          <CalendlyWidget styles={{ height: 1000 }} url="https://calendly.com/nicode/premier-contact" />
        </React.Suspense>
      )}
    </Section>
  );
};
