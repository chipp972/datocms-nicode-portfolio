import { gsap } from 'gsap';
import { ContactSectionQuery } from './contact.type';

export const getContactMethodId = (id: string) => `contact-method-${id}`;

const appearingDelayFactor = 0.15;

export const contactMethodEnterAnimation = ({ query, onComplete }: {
  onComplete: () => void;
  query: ContactSectionQuery;
}) => {
  const animationTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${query.contact.id}`,
          start: 'top center',
          end: 'bottom bottom'
        },
        onComplete
      });

  query.contactMethods.edges.forEach(({ node: { id } }, index) => {
      animationTimeline.fromTo(`#${getContactMethodId(id)}`, {
        opacity: 0,
        yPercent: -20
      }, {
        opacity: 1,
        yPercent: 0,
        ease: 'power2.inOut',
        duration: 0.4,
        delay: appearingDelayFactor * index
      }, '<');
    });

  return animationTimeline;
};
