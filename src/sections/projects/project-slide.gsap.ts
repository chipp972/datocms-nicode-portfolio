/* eslint-disable complexity */
import { gsap } from 'gsap';

const toDomId = (id: string) => `#${id}`;

export const zIndex = 1001;
export const desktopWidth = 1000;
export const wideScreenWidth = 1600;
export const xDesktopPosition = -50;
export const yDesktopPosition = -50;

export const openProjectSlideAnimation = ({ id, cardId, onStart, onComplete, top, left, width, height }) => {
  const isDesktop = window.innerWidth >= desktopWidth;
  const isWideScreen = window.innerWidth >= wideScreenWidth;

  return gsap
    .timeline({ onStart, onComplete })
    .set(toDomId(id), {
      xPercent: 0,
      yPercent: 0,
      top,
      left,
      width,
      height,
      zIndex,
      opacity: 1,
      position: 'fixed',
      pointerEvents: 'none',
      overflow: 'hidden'
    })
    .set(toDomId(cardId), {
      visibility: 'hidden'
    })
    .to(toDomId(id), {
      top,
      left,
      width,
      height,
      zIndex,
      opacity: 1,
      position: 'fixed',
      duration: 0.3
    })
    .to(toDomId(id), {
      xPercent: isDesktop ? xDesktopPosition : undefined,
      yPercent: isDesktop && !isWideScreen ? yDesktopPosition : undefined,
      top: isDesktop && !isWideScreen ? '50%' : 0,
      left: isDesktop ? '50%' : 0,
      width: isDesktop ? '800px' : '100vw',
      height: isDesktop && !isWideScreen ? '90%' : '100vh',
      zIndex,
      opacity: 1,
      duration: 0.35,
      ease: 'power2.inOut'
    });
};

export const closeProjectSlideAnimation = ({ id, cardId, onComplete, top, width, height, left }) => {
  const isDesktop = window.innerWidth >= desktopWidth;

  return gsap
    .timeline({ onComplete })
    .to(toDomId(id), {
      xPercent: isDesktop ? 0 : undefined,
      yPercent: isDesktop ? 0 : undefined,
      top,
      left,
      width,
      height,
      position: 'fixed',
      ease: 'power2.inOut',
      duration: 0.3
    })
    .set(toDomId(id), {
      opacity: 0,
      pointerEvents: 'none'
    })
    .set(toDomId(cardId), {
      visibility: 'visible'
    }, '<');
};
