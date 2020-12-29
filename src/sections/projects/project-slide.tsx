/* eslint-disable fp/no-mutation, max-lines-per-function, complexity, max-statements */
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import css from './projects.module.sass';
import { Modal } from '../../components/modal';
import clsx from 'clsx';
import { CloseIcon } from './close-icon';
import { ProjectContent } from './project-content';
import { gsap } from 'gsap';

type Props = {
  projectIndex: number;
  isCurrentSlide: boolean;
};

const zIndex = 1001;
const desktopWidth = 1000;

export const ProjectSlide: React.FC<Props> = ({ projectIndex, isCurrentSlide }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isTransitionDone, setIsTransitionDone] = React.useState(true);
  const animationRef = React.useRef<gsap.core.Timeline>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const isDesktop = window.innerWidth >= desktopWidth;

      if (animationRef.current?.isActive()) {
        animationRef.current.kill();
      }

      if (isExpanded) {
        const { top, left, width, height } = ref.current?.getBoundingClientRect();

        animationRef.current = gsap
          .timeline({
            onStart: () => {
              document.body.style.overflowY = 'hidden';
              setIsTransitionDone(false);
            },
            onComplete: () => {
              setIsTransitionDone(true);
            }
          })
          .set(modalRef.current, {
            xPercent: 0,
            yPercent: 0,
            top,
            left,
            width,
            height,
            zIndex,
            opacity: 1,
            position: 'fixed'
          })
          .to(modalRef.current, {
            top,
            left,
            width,
            height,
            zIndex,
            opacity: 1,
            position: 'fixed'
          })
          .to(modalRef.current, {
            xPercent: isDesktop ? -50 : undefined,
            yPercent: isDesktop ? -50 : undefined,
            top: isDesktop ? '50%' : 0,
            left: isDesktop ? '50%' : 0,
            width: isDesktop ? '800px' : '100vw',
            height: 'auto',
            zIndex,
            opacity: 1,
            maxHeight: '100%',
            duration: 0.35,
            ease: 'power2.inOut'
          });

        animationRef.current.play();
      } else {
        const { top, left, width, height } = ref.current?.getBoundingClientRect();

        animationRef.current = gsap
          .timeline({
            onComplete: () => {
              document.body.style.overflowY = 'auto';
            }
          })
          .to(modalRef.current, {
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
          .set(modalRef.current, {
            opacity: 0,
            pointerEvents: 'none'
          });

        animationRef.current.play();
      }
    }
  }, [isExpanded]);

  return (
    <SwiperSlide
      className={clsx(css.project, css.projectCard)}
      style={{
        transition: 'transform 0.3s ease',
        transform: isCurrentSlide ? 'scale(1)' : 'scale(0.6)',
        opacity: isCurrentSlide ? 1 : 0.9
      }}>
      <ProjectContent ref={ref} projectIndex={projectIndex} setIsExpanded={setIsExpanded} />
      <Modal>
        <div ref={modalRef}>
          <button className={css.closeButton} onClick={() => setIsExpanded(false)}>
            <CloseIcon />
          </button>
          <ProjectContent
            isModalContent
            projectIndex={projectIndex}
            isTransitionDone={isTransitionDone}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>
        <div
          onClick={() => setIsExpanded(false)}
          className={clsx(css.overlay, { [css.overlayVisible]: isExpanded })}></div>
      </Modal>
    </SwiperSlide>
  );
};
