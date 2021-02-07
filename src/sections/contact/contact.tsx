/* eslint-disable max-lines-per-function */
import React from 'react';
import css from './contact.module.sass';
import { Section } from '../../components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import { LinkedInIcon } from '../../components/social/linkedin-icon';
import { MailIcon } from './mail-icon';
import { PhoneIcon } from './phone-icon';
import { Loader } from '../../components/loader/loader';
import { ContactType, ContactSectionQuery } from './contact.type';
import { getContactMethodId, contactMethodEnterAnimation } from './contact.gsap';
import { useGsapAnimation } from '../../helpers/gsap-react';

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
      calendlyUrl
      fallbackText
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

export const icon = {
  [ContactType.LinkedIn]: LinkedInIcon,
  [ContactType.Email]: MailIcon,
  [ContactType.Phone]: PhoneIcon
};

const CalendarFallback: React.FC<{ fallbackText: string }> = ({ fallbackText }) => (
  <div className={css.fallback}>
    <Loader style={{ marginBottom: 10 }} />
    <div className={css.fallbackCalendarText}>{fallbackText}</div>
  </div>
);

const CalendlyWidget = React.lazy(() => import('react-calendly')
  .then((module) => ({ default: module.InlineWidget })));

export const Contact: React.FC = () => {
  const { contact, contactMethods } = useStaticQuery<ContactSectionQuery>(query);
  const [isVisible, setIsVisible] = React.useState(false);
  const isSSR = typeof window === 'undefined';

  useGsapAnimation({
    animationFn: () => contactMethodEnterAnimation({
      query: { contact, contactMethods },
      onComplete: () => setIsVisible(true)
    }),
    dependencyList: []
  });

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
            <div id={getContactMethodId(id)} key={id}>
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
      {!isVisible && <CalendarFallback fallbackText={contact.fallbackText} />}
      {!isSSR && isVisible && (
        <React.Suspense fallback={<CalendarFallback fallbackText={contact.fallbackText} />}>
          <CalendlyWidget styles={{ height: 1000 }} url={contact.calendlyUrl} />
        </React.Suspense>
      )}
    </Section>
  );
};
