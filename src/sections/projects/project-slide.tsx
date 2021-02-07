/* eslint-disable fp/no-mutation, max-lines-per-function, complexity, max-statements */
import React from 'react';
import css from './projects.module.sass';
import { Modal } from '../../components/modal';
import clsx from 'clsx';
import { CloseIcon } from './close-icon';
import { ProjectContent } from './project-content';
import { openProjectSlideAnimation, closeProjectSlideAnimation } from './project-slide.gsap';

type Props = {
  projectIndex: number;
  closeButtonLabel: string;
};

export const ProjectSlide: React.FC<Props> = ({ projectIndex, closeButtonLabel }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isTransitionDone, setIsTransitionDone] = React.useState(true);
  const animationRef = React.useRef<gsap.core.Timeline>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const modalId = `modal-${projectIndex}`;
  const cardId = `card-${projectIndex}`;

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      if (animationRef.current?.isActive()) {
        animationRef.current.kill();
      }

      const { top, left, width, height } = ref.current?.getBoundingClientRect();

      if (isExpanded) {
        animationRef.current = openProjectSlideAnimation({
            id: modalId,
            onStart: () => {
              document.body.style.overflowY = 'hidden';
              setIsTransitionDone(false);
            },
            onComplete: () => {
              setIsTransitionDone(true);
              animationRef.current.set(modalRef.current, {
                pointerEvents: 'auto',
                overflowY: 'auto',
                delay: 1.5
              }).play();
            },
            top,
            left,
            width,
            height,
            cardId
        }).play();
      } else {
        animationRef.current = closeProjectSlideAnimation({
          id: modalId,
          onComplete: () => {
            document.body.style.overflowY = 'auto';
          },
          top,
          left,
          width,
          height,
          cardId
        }).play();
      }
    }
  }, [isExpanded, modalId]);

  return (
    <>
      <div id={cardId}>
        <ProjectContent
          ref={ref}
          projectIndex={projectIndex}
          setIsExpanded={setIsExpanded}
        />
      </div>
      <Modal>
        <div id={modalId} ref={modalRef}>
          <button title={closeButtonLabel} className={css.closeButton} onClick={() => setIsExpanded(false)}>
            <CloseIcon />
            {closeButtonLabel}
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
    </>
  );
};
