import React from 'react';
import { SwiperSlide } from 'swiper/react';
import css from './projects.module.sass';
import { Modal } from '../../components/modal';
import clsx from 'clsx';
import { CloseIcon } from './close-icon';
import { ProjectContent } from './project-content';

type Props = {
  projectIndex: number;
  isCurrentSlide: boolean;
};

const zIndex = 1001;

// eslint-disable-next-line max-lines-per-function
export const ProjectSlide: React.FC<Props> = ({
  projectIndex,
  isCurrentSlide
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isTransitionDone, setIsTransitionDone] = React.useState(true);
  const [containerStyle, setContainerStyle] = React.useState({});
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isExpanded) {
        requestAnimationFrame(() => {
          const { top, left, width, height } = ref.current?.getBoundingClientRect();
          setContainerStyle({ top, left, width, height, zIndex, opacity: 1, transition: 'none' });
          setIsTransitionDone(false);

          setTimeout(() => {
            document.body.style.overflowY = 'hidden';
            setContainerStyle({});
          }, 300);
        });
      } else {
        document.body.style.overflowY = 'auto';
        requestAnimationFrame(() => {
          const { top, left, width, height } = ref.current?.getBoundingClientRect();
          setContainerStyle({
            top,
            left,
            width,
            height,
            zIndex,
            opacity: 0,
            pointerEvents: 'none',
            position: 'fixed'
          });
        });
      }
    }
  }, [isExpanded]);

  return (
    <SwiperSlide
      ref={ref}
      className={clsx(css.project, css.projectCard)}
      style={{
        transition: 'transform 0.3s ease',
        transform: isCurrentSlide ? 'scale(1)' : 'scale(0.6)'
      }}>
      <ProjectContent
        projectIndex={projectIndex}
        isTransitionDone={isTransitionDone}
        isExpanded={false}
        setIsExpanded={setIsExpanded}
      />
      <Modal>
        <div
          onTransitionEnd={() => setIsTransitionDone(true)}
          className={clsx(css.project, {
            [css.projectCard]: !isExpanded,
            [css.expandedProject]: isExpanded
          })}
          style={containerStyle}>
          <button className={css.closeButton} onClick={() => setIsExpanded(false)}><CloseIcon /></button>
          <ProjectContent
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
