import { gsap } from 'gsap';

export const gsapClassnames = {
  promise: 'hero-promise',
  subtitle: 'hero-subtitle',
  cta: 'hero-cta',
  image: 'hero-image',
  floatingLogos: 'hero-floating-logos'
};

// eslint-disable-next-line max-lines-per-function
export const heroFadeIn = () => gsap
  .timeline({
    defaults: {
      duration: 0.5,
      ease: 'power2.inOut'
    }
  })
  .fromTo(`.${gsapClassnames.promise}`, {
    opacity: 0,
    translateY: -20
  }, {
    opacity: 1,
    translateY: 0,
    duration: 0.3,
    delay: 0.8
  })
  .fromTo(`.${gsapClassnames.subtitle}`, {
    opacity: 0,
    translateY: -20
  }, {
    opacity: 1,
    translateY: 0,
    duration: 0.5,
    delay: 0.1
  }, '<')
  .from(`.${gsapClassnames.image}`, {
    opacity: 0,
    duration: 0.5 
  }, '<')
  .from(`.${gsapClassnames.floatingLogos}`, {
    top: 0,
    opacity: 0,
    ease: 'power4.out',
    duration: 1
  })
  .fromTo(`.${gsapClassnames.cta}`, {
    opacity: 0
  }, {
    opacity: 1,
    duration: 0.5
  }, '<');
