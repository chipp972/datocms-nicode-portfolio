/* eslint-disable max-lines-per-function */
import { gsap } from 'gsap';

export const extendContentAnimation = ({ gsapClassnames, setShowTechnos }) =>
  gsap
    .timeline({
      onStart: () => setShowTechnos(false),
      defaults: {
        duration: 0.35,
        ease: 'power2.inOut'
      }
    })
    .to(`.${gsapClassnames.smallContent}`, {
      opacity: 0,
      onComplete: () => setShowTechnos(true)
    })
    .to(`.${gsapClassnames.headerOverlay}`, {
      opacity: 0.5
    })
    .to(`.${gsapClassnames.headerTitle}`, {
      opacity: 1
    })
    .to(`.${gsapClassnames.expandedContent}`, {
      opacity: 1,
      height: 'auto'
    })
    .to(
      `.${gsapClassnames.smallContent}`,
      {
        height: 0
        // Add the Tween at the start of the previous Tween so that they run in parallel
      },
      '<'
    )
    .fromTo(
      `.${gsapClassnames.description}`,
      {
        opacity: 0
      },
      {
        opacity: 1,
        delay: 0.5
      }
    )
    .fromTo(
      `.${gsapClassnames.challengesTitle}`,
      {
        opacity: 0
      },
      {
        opacity: 1
      }
    )
    .fromTo(
      `.${gsapClassnames.challengesItem}`,
      {
        opacity: 0,
        translateX: 20
      },
      {
        opacity: 1,
        translateX: 0
      }
    )
    .fromTo(
      `.${gsapClassnames.ressourceButtonWebsite}`,
      {
        opacity: 0,
        marginLeft: 20
      },
      {
        opacity: 1,
        marginLeft: 0
      }
    )
    .fromTo(
      `.${gsapClassnames.ressourceButtonSourceCode}`,
      {
        opacity: 0,
        marginLeft: 20
      },
      {
        opacity: 1,
        marginLeft: 0
      }
    );

export const retractContentAnimation = ({ gsapClassnames, setShowTechnos }) =>
  gsap
    .timeline({
      onStart: () => setShowTechnos(false),
      defaults: {
        duration: 0.15,
        ease: 'power2.inOut'
      }
    })
    .to(
      `.${gsapClassnames.headerTitle}`,
      {
        opacity: 0
      },
      0
    )
    .to(
      `.${gsapClassnames.headerOverlay}`,
      {
        opacity: 0
      },
      0
    )
    .to(`.${gsapClassnames.expandedContent}`, {
      opacity: 0,
      height: 0
    })
    .to(`.${gsapClassnames.smallContent}`, {
      opacity: 1,
      height: 'auto'
    });
