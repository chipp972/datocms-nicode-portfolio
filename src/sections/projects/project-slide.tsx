import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Project } from './projects.type';
import Img from 'gatsby-image';
import { Tag } from '../../components/tag/tag';
import css from './projects.module.sass';
import buttonCss from '../../components/buttons/buttons.module.sass';
import { Modal } from '../../components/modal';

type Props = {
  readMoreLabel: string;
  isCurrentSlide: boolean;
  isTransitionDone: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const transition = ['width', 'height', 'top', 'left']
  .map((property) => `${property} .35s ease-in-out`)
  .join(',');

const zIndex = 1000;

const expandedStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  opacity: 1,
  pointerEvents: 'auto',
  zIndex,
  transition
};

const defaultStyle: React.CSSProperties = {
  opacity: 0
};

const ProjectDescription: React.FC<Project & Props> = ({
  mainImage,
  excerptNode,
  name,
  technos,
  readMoreLabel,
  setIsExpanded
}) => (
  <div style={{ boxShadow: '0px 2px 10px 0px grey', borderRadius: 30 }}>
    <Img style={{ borderRadius: '30px 30px 0 0', maxHeight: 300 }} {...mainImage} />
    <div style={{ padding: '20px 20px 30px 20px', backgroundColor: 'white', borderRadius: '0 0 30px 30px' }}>
    <ul className={css.technoList}>
      {technos
        .split(',')
        .filter((_, index) => index < 3)
        .map((techno, index) => (
          <li key={techno + index} className={css.technoItem}>
            <Tag>{techno}</Tag>
          </li>
        ))}
    </ul>
      <h3 className={css.title}>{name}</h3>
      <p
        className={css.excerpt}
        dangerouslySetInnerHTML={{ __html: excerptNode.childMarkdownRemark.html }}
      />
      <button onClick={() => setIsExpanded(true)} className={buttonCss.largeButton}>
        {readMoreLabel}
      </button>
    </div>
  </div>
);

// eslint-disable-next-line max-lines-per-function
export const ProjectSlide: React.FC<Project & Props> = ({
  name,
  excerptNode,
  mainImage,
  technos,
  readMoreLabel,
  isCurrentSlide,
  isTransitionDone
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [containerStyle, setContainerStyle] = React.useState(defaultStyle);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isExpanded) {
        requestAnimationFrame(() => {
          const { top, left, width, height } = ref.current?.getBoundingClientRect();
          setContainerStyle({ top, left, width, height, zIndex, opacity: 1 });

          setTimeout(() => {
            document.body.style.overflowY = 'hidden';
            setContainerStyle(expandedStyle);
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
            pointerEvents: 'none'
          });
        });
      }
    }
  }, [isExpanded, isTransitionDone]);

  return (
    <SwiperSlide
      ref={ref}
      className={css.project}
      style={{
        transition: 'transform 0.3s ease',
        transform: isCurrentSlide ? 'scale(1)' : 'scale(0.6)'
      }}>
      <ProjectDescription
        name={name}
        excerptNode={excerptNode}
        mainImage={mainImage}
        readMoreLabel={readMoreLabel}
        technos={technos}
        setIsExpanded={setIsExpanded}
      />
      <Modal>
        <div style={{ position: 'fixed', backgroundColor: 'white', ...containerStyle }}>
          <button onClick={() => setIsExpanded(false)}>close</button>
          <ProjectDescription
            name={name}
            excerptNode={excerptNode}
            mainImage={mainImage}
            readMoreLabel={readMoreLabel}
            technos={technos}
            setIsExpanded={setIsExpanded}
          />
        </div>
      </Modal>
    </SwiperSlide>
  );
};
