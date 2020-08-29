import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const gsapSetup = () => {
  gsap.registerPlugin(ScrollTrigger);
};
